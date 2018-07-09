function Menu({items, opened = false}) {
    if(!opened) {
        return (
            <div className="menu">
                <div className="menu-toggle"><span></span></div>
            </div>
        );
    }
    const [home,about,contact] = items;
    return (
        <div class="menu menu-open">
            <div class="menu-toggle"><span></span></div>
            <nav>
                <ul>
                    <li><a href={home.href}>{home.title}</a></li>
                    <li><a href={about.href}>{about.title}</a></li>
                    <li><a href={contact.href}>{contact.title}</a></li>
                </ul>
            </nav>
        </div>
    );
}

