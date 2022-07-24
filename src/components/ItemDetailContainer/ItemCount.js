import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../ItemDetailContainer/itemCount.css";


const ItemCount = ({ stock,  countPushToState }) => {
  const [count, setCount] = useState(1);

  const transferCount = () => {
    countPushToState(count + 1);
  };

  const addCountClick = () => {
    if (count < stock) {
      setCount(count + 1);
      transferCount();
    }
  };

  const removeCountClick = () => {
    if (count > 1) {
      setCount(count - 1);
      transferCount();
    }
  };

  return (
    <>
      <div className="countCard">
        <RemoveIcon onClick={removeCountClick} />
        <p>{count}</p>
        <AddIcon
          onClick={() => {
            addCountClick();
          }}
        />
      </div>
    </>
  );
};

export default ItemCount;
