import { ButtonTeste, ConteinerOperator, OperatorsRightStyle } from "../../styles/operatorsStyle";

function OperatorsRight({num, setNum, oldNum, setOldNum, operator, setOperator}) {

  function OperatorHandler(e) {
    let operatorInput = e.target.value;
    console.log(operatorInput);
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function Calculate() {
    if(operator === "+"){
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if(operator === "-"){
      setNum(oldNum - num);
    } else if(operator === "X") {
      setNum(oldNum * num);
    } else if (operator === "/") {
      setNum(oldNum / num);
    }

  }

  return (
    <ConteinerOperator>
     <OperatorsRightStyle>
        <ButtonTeste value={"X"} onClick={OperatorHandler}>X</ButtonTeste>
        <ButtonTeste value={"-"} onClick={OperatorHandler}>-</ButtonTeste>
        <ButtonTeste value={"+"} onClick={OperatorHandler}>+</ButtonTeste>
        <ButtonTeste onClick={Calculate}>=</ButtonTeste>
      </OperatorsRightStyle>
    </ConteinerOperator>
  );
}

export default OperatorsRight;
