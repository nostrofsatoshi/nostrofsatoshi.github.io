import { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import Note from "./Note";

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
        <div key={event.id}>
          <Note event={event} />
        </div>
      ))}
    </div>
  );
};

export default FundNotes