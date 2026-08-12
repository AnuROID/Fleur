import { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

function MobileMenuCategory({ column }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-category">

      <button
        className="mobile-category-row"
        onClick={() => setOpen(!open)}
      >
        <span>{column.title}</span>

        {open ? (
          <FiChevronDown />
        ) : (
          <FiChevronRight />
        )}
      </button>


      {open && (
        <div className="mobile-category-items">

          {column.items.map((item, index) => (
            <a
              href="#"
              key={index}
            >
              {item.name}

              {item.star && (
                <span className="mobile-menu-star">
                  ★
                </span>
              )}
            </a>
          ))}

        </div>
      )}

    </div>
  );
}


function MobileMenuSection({
  title,
  columns,
}) {

  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-section">

      {/* MAIN ITEM */}

      <button
        className="mobile-main-row"
        onClick={() => setOpen(!open)}
      >

        <span>{title}</span>

        {open ? (
          <FiChevronDown />
        ) : (
          <FiChevronRight />
        )}

      </button>


      {/* SUBMENU */}

      {open && (
        <div className="mobile-submenu">

          {columns.map((column, index) => (
            <MobileMenuCategory
              key={index}
              column={column}
            />
          ))}

        </div>
      )}

    </div>
  );
}


function MobileMenu({
  homeColumns,
  pagesColumns,
  portfolioColumns,
  blogColumns,
  shopColumns,
  elementsColumns,
}) {

  return (
    <div className="mobile-menu-content">

      {/* HOME */}

      <MobileMenuSection
        title="Home"
        columns={homeColumns}
      />


      {/* PAGES */}

      <MobileMenuSection
        title="Pages"
        columns={pagesColumns}
      />


      {/* PORTFOLIO */}

      <MobileMenuSection
        title="Portfolio"
        columns={portfolioColumns}
      />


      {/* BLOG */}

      <MobileMenuSection
        title="Blog"
        columns={blogColumns}
      />


      {/* SHOP */}

      <MobileMenuSection
        title="Shop"
        columns={shopColumns}
      />


      {/* ELEMENTS */}

      <MobileMenuSection
        title="Elements"
        columns={elementsColumns}
      />

    </div>
  );
}

export default MobileMenu;