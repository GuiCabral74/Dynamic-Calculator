import styled from "styled-components";

export const Container = styled.section`
  background: #800080;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Result = styled.div`
  height: 6rem;
  width: 100vw;
  color: #fff;
  font-size: 5rem;
  text-align: right;
  background: #4e505d;
  padding: 10px;
  line-height: 1em;
  border-radius: 10px;

`

export const ContainerCalculator = styled.div`
  width: 23.438rem;
  height: 37.438rem;
  background: #17171C;
  padding: 1.25rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`

export const Button = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 2rem;
  background: #2E2F38;
  color: #fff;
  cursor: pointer;
  :hover{
    background: #4E505F;
  }
`