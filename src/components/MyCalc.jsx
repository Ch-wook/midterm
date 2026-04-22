import Calc from "./Calc";

const MyCalc = () => {
  const a = 10;
  const b = 20;
  const operator = "+";
  return (
    <>
      <h1>나만의 계산기(MyCalc)</h1>
      <Calc a={a} b={b} operator={operator} />
    </>
  );
};

export default MyCalc;
