import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
      setLoading(false);
    });
  }, []);

  return (
    <div className='p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
      <h3 className='pb-4 mb-8 text-xl font-semibold border-b'>Categories</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map(({ name, slug }, index) => (
          <Link key={index} href={`/category/${slug}`}>
            <span className={`cursor-pointer block pb-3 mb-3`}>{name}</span>
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;
