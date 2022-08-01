import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../ItemDetailContainer/itemCount.css";

const ItemCount = ({ stock, countPushToState, count }) => {
  const [countCopy, setCountCopy] = useState(1);

  const transferCountAdd = () => {
    countPushToState(count + 1);
  };

  const transferCountRemove = () => {
    countPushToState(count - 1);
  };

  const addCountClick = () => {
    if (count < stock) {
      setCountCopy(count + 1);
      transferCountAdd();
    }
  };

  const removeCountClick = () => {
    if (count > 1) {
      setCountCopy(count - 1);
      transferCountRemove();
    }
  };

  return (
    <>
      <div className="section-center-count">
        <RemoveIcon onClick={removeCountClick} className="icon-count" />
        <p>{count}</p>
        <AddIcon
          onClick={() => {
            addCountClick();
          }}
          className="icon-count"
        />
      </div>
    </>
  );
};

export default ItemCount;
