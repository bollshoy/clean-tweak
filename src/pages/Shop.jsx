import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Categories from "@/components/Categories/Categories.jsx";
import ProductList from "@/components/ProductList/ProductList.jsx";
import categories from "@/data/categories.js";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].title);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="shop" id="shop">
      <Header />
      <Banner />
      <Categories
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ProductList selectedCategory={selectedCategory} />
    </section>
  );
};

export default Shop;
