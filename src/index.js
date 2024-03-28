import React from "react";
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";


import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root.

root.render( // Use the root to render your app.
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
        <App />
        </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
