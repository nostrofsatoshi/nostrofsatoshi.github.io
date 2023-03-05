import logo from './logo.gif';
import './App.css';
import { NostrProvider } from "nostr-react";
import Notes from './Notes';
import Post from './Post';

const relayUrls = [
  "wss://nostr.wine",
  "wss://relay.orangepill.dev",
  "wss://nos.lol",
  "wss://nostr.milou.lol",
  "wss://atlas.nostr.land",
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
          <small className='slogan'>
            We are all Satoshi.
          </small>
          <Post />
          <div className='FundNotes'>
            <Notes />
          </div>
        </header>
      </div>
    </NostrProvider>
  );
}

export default App;
