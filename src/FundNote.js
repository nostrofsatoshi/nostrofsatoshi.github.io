import { useState } from 'react'
import Menu from './Menu'
import menu from './menu.png'
import { useProfile } from "nostr-react";

function FundNote({ event }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const pubkey = event.pubkey;

    const { data: userData } = useProfile({
        pubkey,
    });

    return (
        <div className="FundNote">
            <div className="FundNote-header">
                {copied && <small>copied to clipboard</small>}
                <div className='menu-container'>
                    <img className='menu-icon' src={menu} alt='menu-icon' onClick={() => setMenuOpen(!menuOpen)} />
                </div>
            </div>
            <div className='Menu-container'>
                {menuOpen && <Menu event={event} setMenuOpen={setMenuOpen} setCopied={setCopied} />}
            </div>
            <div className="FundNote-body" onClick={() => setMenuOpen(false)}>
                <div className='profile-info'>
                    <img className='profile-pic' src={userData?.picture} alt="pic not available" />
                    <p>{userData?.name}</p>
                </div>
                <p className="Event-content">{event.content.replace('#nostrfund', '')}</p>
            </div>
        </div>
    )
}

export default FundNote