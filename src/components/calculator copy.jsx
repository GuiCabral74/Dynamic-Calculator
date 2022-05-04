import { useState } from "react";
import { ContainerCalculator, Container, ResultStyle } from "../styles/testStyles";
import NumbersTest from "./testes/numbersTest";
import Operators from "./testes/operators";
import OperatorsRight from "./testes/operatorsRight";
import Result from "./testes/result";

function Calculator() {

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();


  return (
    <Container id="containerBodyCalculator">
      <ContainerCalculator id="containerCalculator">
        <Result num={num} setNum={setNum} />
        <Operators num={num} setNum={setNum} operator={operator} setOperator={setOperator} oldNum={oldNum} setOldNum={setOldNum} />
        <NumbersTest num={num} setNum={setNum} />
        <OperatorsRight num={num} setNum={setNum} operator={operator} setOperator={setOperator} oldNum={oldNum} setOldNum={setOldNum}  />
      </ContainerCalculator>
    </Container>
  );
}

export default Calculator;
