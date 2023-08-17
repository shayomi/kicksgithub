import React, { useEffect, useContext, useState } from "react";
import classes from "./HeaderButton.module.css";
import { HiShoppingCart } from "react-icons/hi";
import CartContext from "../../store/cart-context";
import CartProvider from "../../store/CartProvider";

const HeaderButton = (props) => {
  const [btnIsHihlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHihlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartProvider>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <HiShoppingCart />
        </span>
        <span className={classes.title}>
          <h4> Cart</h4>
        </span>
        <span className={classes.badge}> {numberOfCartItems}</span>
      </button>
    </CartProvider>
  );
};
export default HeaderButton;
