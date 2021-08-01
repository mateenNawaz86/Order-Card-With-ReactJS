import React from "react";
import Card from "../UI/Card";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import "./OrderCard.css";

const OrderCard = () => {
  return (
    <>
      <Card>
        <div className="order-container">
          <h1>Your order is submitted!!</h1>
          <EmojiEmotionsIcon className='smile'/>
        </div>
      </Card>
    </>
  );
};

export default OrderCard;
