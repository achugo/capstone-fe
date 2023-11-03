// ProductViewComponent.tsx

import React, { useEffect, useState } from 'react';
import { ProductTracker } from '../product_views_tracker/productTracker';

const productTracker = new ProductTracker();

const ProductViewComponent: React.FC = () => {
  const userIP = '127.0.0.1';
  const productID = '123';

  useEffect(() => {
    // Track a product view by IP when the component mounts
    productTracker.trackProductView(userIP, productID);
  }, []);

  const views = productTracker.getProductViews(userIP, productID);

  return (
    <div>
      <h1>Product View Counter</h1>
      <p>Product ID: {productID}</p>
      <p>Views from IP {userIP}: {views}</p>
    </div>
  );
};

export default ProductViewComponent;
