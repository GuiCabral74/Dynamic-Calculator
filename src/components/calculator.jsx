import { useState } from "react";
import { ContainerCalculator, Container, Button, Result } from "../styles/styles";
import buttons from "./buttons";

function Calculator() {

  const [result, setResult] = useState("0");

  const handleClick= (e) => {
    let input = e.target.value;
    if (result == "0") {
      setResult(input)
    } else {
      setResult(result + input)
    }
    console.log(input);
    //let type = e.target.type;
    // console.log(type);
    // if(type === "number") {
    //   console.log("Isso é um numero.")
    // } else {
    //   console.log("NÃO É NUMERO.")
    // }
  }

  return(
    
    <Container id="containerBodyCalculator">
      <ContainerCalculator id="containerCalculator">
      <Result>{result}</Result>
      {buttons.map((i) => {
        return(
          <Button onClick={handleClick} type={i.type} value={i.value}>{i.symbol}</Button>
        )
      })}
      </ContainerCalculator>
    </Container>
  )
}

export default Calculator;