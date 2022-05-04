import { ButtonTeste, ConteinerOperator, OperatorsTop } from "../../styles/operatorsStyle";

function Operators({num, setNum, oldNum, setOldNum, operator, setOperator}) {

  function Clear(){
    setNum(0);
  }

  function ChangeSing(){
    setNum(num * -1);
  }

  function Porcentage(){
    const porcentageCalc = num / 100;
    setNum(porcentageCalc);
  }

  function OperatorHandler(e) {
    let operatorInput = e.target.value;
    console.log("este é o value: " + operatorInput);
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  return (
    <ConteinerOperator>
     <OperatorsTop>
        <ButtonTeste onClick={Clear} >c</ButtonTeste>
        <ButtonTeste onClick={ChangeSing} >+/-</ButtonTeste>
        <ButtonTeste onClick={Porcentage} >%</ButtonTeste>
        <ButtonTeste value={"/"} onClick={OperatorHandler}>/</ButtonTeste>
      </OperatorsTop>
    </ConteinerOperator>
  );
}

export default Operators;
