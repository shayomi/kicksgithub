import React, { useRef, useState } from "react";

import Input from "../components/UI/Input";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.defaultValue;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form>
      <Input
        class
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        className="border-slate-800 border-solid border-2 rounded-md "
      />
      <button
        className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2"
        onClick={submitHandler}
      >
        + Add to cart
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ItemForm;
