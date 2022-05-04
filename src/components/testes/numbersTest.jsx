import { useState } from "react";
import { NumbersTestStyle, DivNumber } from "../../styles/operatorsStyle";
import buttonsTeste from "./buttonsTeste";

function NumbersTest(props) {


  const handleClick = (e) => {
    let input = e.target.value;
    if (props.num == "0") {
      props.setNum(input);
    } else {
      props.setNum(props.num + input);
    }
    console.log(input);
  };



  return (
    <DivNumber>
      {buttonsTeste.map((i) => {
        return (
          <NumbersTestStyle onClick={handleClick} type={i.type} value={i.value}>
            {i.symbol}
          </NumbersTestStyle>
        );
      })}
    </DivNumber>
  );
}

export default NumbersTest;
