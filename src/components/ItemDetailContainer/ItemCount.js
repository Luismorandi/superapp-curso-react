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
      <div className="section-center-count">
        <RemoveIcon onClick={removeCountClick} className="icon-count"/>
        <p>{count}</p>
        <AddIcon
          onClick={() => {
            addCountClick();
          }}
        className="icon-count"/>
      </div>
    </>
  );
};

export default ItemCount;
