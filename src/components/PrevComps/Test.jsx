import React, { useState } from "react";

const Test = () => {
  const products = {
    id: 1,
    name: "Example Product",
    description: "This is an example product.",
    price: 29.99,
    currency: "USD",
    inStock: true,
    categories: ["electronics", "gadgets"],
    tags: ["new", "featured", "popular"],
    images: [
      {
        url: "https://example.com/image1.jpg",
        alt: "Example Product Image 1",
      },
      {
        url: "https://example.com/image2.jpg",
        alt: "Example Product Image 2",
      },
    ],
    dimensions: {
      weight: "1.5 kg",
      width: "10 cm",
      height: "20 cm",
      depth: "5 cm",
    },
    manufacturer: {
      name: "Example Manufacturer",
      address: "123 Example Street, Example City, EX 12345",
      contact: "contact@example.com",
    },
  };

  const [product, setProduct] = useState(products);

  function handleChange(event) {
    const newProducts = {
      ...product,
      name: event.target.value,
    };
    setProduct(newProducts);
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <input onChange={(event) => handleChange(event)} />
    </div>
  );
};

export default Test;
