import React from "react";
import Card from "../UI/Card";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChooseOptn from "../ChooseOptn/ChooseOptn";
import Shoots from "../Shoots/Shoots";
import Button from "../UI/Button";

import { Link } from "react-router-dom";

import "./MilkCard.css";

const MilkCard = () => {
  return (
    <>
      <Card>
        <div className="card-container">
          <div className="arrowBack">
            <ArrowBackIosIcon className="arrBack" />
          </div>

          <div className="heading">
            <h1>Iced latte</h1>
          </div>
          <div className="img">
            <img src="../img/milk-shake.png" alt="Milk Shake" />
          </div>

          <div className="inner_container">
            <div className="shake__size">
              <h4>Size</h4>
              <div className="selection">
                <p>S</p>
                <p>M</p>
                <p>L</p>
              </div>
            </div>
            <ChooseOptn />
            <Shoots />
          </div>

          <Link to="/order" className='renderLink'>
            <Button type="submit">Add to Order</Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default MilkCard;
