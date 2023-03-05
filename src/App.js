import logo from './logo.gif';
import './App.css';
import { NostrProvider } from "nostr-react";
import FundNotes from './FundNotes';
import PostButton from './Post';

const relayUrls = [
  "wss://nostr.wine",
  "wss://relay.orangepill.dev",
  "wss://puravida.nostr.land",
];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <a
              className="App-link"
              href="https://nostr.how"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nostr
            </a>
            OfSatoshi
          </p>
          <p>
            We are all Satoshi.
          </p>
          <PostButton />
          <div className='FundNotes'>
            <FundNotes />
          </div>
        </header>
      </div>
    </NostrProvider>
  );
}

export default App;
