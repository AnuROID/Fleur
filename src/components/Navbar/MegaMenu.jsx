function MegaMenu({ columns }) {
  return (
    <div className="mega-menu">

      {columns.map((column, index) => (
        <div className="mega-menu-column" key={index}>

          <h3>{column.title}</h3>

          <div className="mega-menu-links">
            {column.items.map((item, itemIndex) => (
              <a href="#" key={itemIndex}>
                {item.name}

                {item.star && (
                  <span className="menu-star">★</span>
                )}

                {item.arrow && (
                  <span className="menu-arrow">›</span>
                )}
              </a>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default MegaMenu;