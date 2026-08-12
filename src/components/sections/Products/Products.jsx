import { useState } from "react";
import "./Products.css"
import Product1 from "../../../assets/products/product1.jpg"
import Product2 from "../../../assets/products/product2.jpg"
import Product3 from "../../../assets/products/product3.jpg"
import Product4 from "../../../assets/products/product4.jpg"

const products = [
  {
    name: "AUTUMN BOUQUET",
    price: "$375",
    rating: "5.00",
    image: Product1,
  },
  {
    name: "COZY ARMCHAIR",
    price: "$945",
    rating: "4.50",
    image: Product2,
  },
  {
    name: "FOREST FAIRY",
    price: "$188",
    rating: "3.50",
    image: Product3,
  },
  {
    name: "LACED DRESS",
    price: "$2,590",
    rating: "4.50",
    image: Product4,
  },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`product-card ${hovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>
      <h2 className="product-name">
        {product.name}
      </h2>
      <div className="product-bottom">
        <div className="product-price-area">
          {hovered ? (<button className="add-to-cart">
            ADD TO CART
          </button>
          ) : (
            <span className="product-price">
              {product.price}
            </span>
          )}

        </div>

      
      <div className="product-rating">
        <span className="stars">
          ★★★★★
        </span>
      </div>
      </div>
    </div>
  )
}

function Products() {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2>
            RECOMMENDED PRODUCTS
          </h2>
          <div className="products-decoration">
            <span></span>
            <b>◆</b>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer gravida nibh
            vel velit auctor aliquet. Aenean sollicitudin, lorem
            quis bibendum auci elit consequat ipsutis sem niuis
            sed odio sit amet nibh
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.name}
              product={product} />
          ))}
        </div>
      </div>

    </section>
  )
}
export default Products;
