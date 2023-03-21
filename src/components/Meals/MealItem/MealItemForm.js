import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"

export default function (props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount  = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    setAmountIsValid(true);
  }

  return (
    <form classes={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}></Input>
        <button>+ Add</button>
        {
          !amountIsValid && <p>Please enter a valid amount (1-5).</p>
        }
    </form>
  )
}
