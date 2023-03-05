import { useNostr, dateToUnix } from "nostr-react";

import {
  getEventHash,
  getPublicKey,
  signEvent,
} from "nostr-tools";
import { useState } from "react";

export default function Post() {
  const { publish } = useNostr();

  const [message, setMessage] = useState('')

  const onPost = async () => {
    // the public private key of Satoshi Nakamoto ;)
    const privKey = 'nsec19tku7vcmw0s4qyekfl9mvnv3ynj54k8ttxtmhrkxwcan8f8myh6qkykq0j';

    const event = {
      content: message,
      kind: 1,
      tags: [],
      created_at: dateToUnix(),
      pubkey: getPublicKey(privKey),
    };

    event.id = getEventHash(event);
    event.sig = signEvent(event, privKey);

    publish(event);
    setMessage('')
  };

  return (
    <div className="Post-container">
        <input className="Post-input" type='text' placeholder="What's on your mind?" onChange={event => setMessage(event.target.value)} />
        <button className="post-button" onClick={onPost}>Post note</button>
    </div>
  );
}