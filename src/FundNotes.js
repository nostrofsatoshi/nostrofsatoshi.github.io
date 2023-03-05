import { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import FundNote from "./FundNote";

const FundNotes = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
      limit: 1
    },
  });

  return (
    <div className="FundNotes">
      {events.filter(event => event.content.includes(' ')).map((event) => (
        <FundNote event={event} />
      ))}
    </div>
  );
};

export default FundNotes