function Menu({ event, setMenuOpen, setCopied }) {

    const handleMenuItemClick = (value) => {
        setCopied(true)
        setMenuOpen(false);
        navigator.clipboard.writeText(value);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <div className="Menu">
            <div className="menu-item" onClick={() => handleMenuItemClick(event.id)}>Note ID</div>
            <div className="menu-item" onClick={() => handleMenuItemClick(event.sig)}>Note signature</div>
            <div className="menu-item" onClick={() => handleMenuItemClick(event.content)}>Content</div>
            <div className="menu-item" onClick={() => handleMenuItemClick(event.pubkey)}>Pubkey</div>
        </div>
    )
}

export default Menu