function DropdownMenu({ items }) {
    return (
        <div className="dropdown-menu">
            {items.map((item, index) => (
                <a href="#" key={index}>
                    {item.name }
                    {item.star && (
                        <span className="menu-star">★</span>
                    )}
                    {item.arrow && (
                        <span className="menu-arrow">›</span>
                    )}
                </a>

            ))}
        </div>

    )

}
export default DropdownMenu;

