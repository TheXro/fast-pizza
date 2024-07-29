import React, { Children } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';


function UpdateItemsQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      {quantity ? <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))} >
        -
      </Button> : null}
        {quantity}
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemsQuantity;
