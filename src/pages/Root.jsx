import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import CartProvider from "../store/CartProvider";
import Cart from "../components/cart/Cart";
import SearchBar from "../components/Layout/SearchBar";
import { Allproduct } from "../Data/StoreData/AllproductData";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div className="header_nav">
        <Navbar onShowCart={showCartHandler} />
      </div>
      <main className="main">
        {/* {navigation.state === 'loading' && <p>Loading ...</p>} */}
        <Outlet />
      </main>
    </CartProvider>
  );
};

export default RootLayout;
