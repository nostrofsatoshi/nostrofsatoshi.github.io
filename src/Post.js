import { useNostr, dateToUnix } from "nostr-react";

import {
  getEventHash,
  getPublicKey,
  signEvent,
} from "nostr-tools";
import { useState } from "react";

function Post() {
  const { publish } = useNostr();

  const [message, setMessage] = useState('')

  const onPost = async () => {
    if (message === '') {
      return
    }
    // the public private key (hex) of Satoshi Nakamoto ;)
    const privKey = '2aedcf331b73e15013364fcbb64d9124e54ad8eb5997bb8ec6763b33a4fb25f4';

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
    setMessage('');
  };

  return (
    <div className="Post-container">
        <input className="Post-input" type='text' placeholder="What's on your mind?" value={message} onChange={event => setMessage(event.target.value)} />
        <button className="post-button" onClick={onPost}>Post note</button>
    </div>
  );
}

export default Post