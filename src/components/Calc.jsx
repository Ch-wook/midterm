const Calc = ({ a, b, operator }) => {
  let result;
  let oper;
  switch (operator) {
    case "+":
      result = a + b;
      oper = "덧셈";
      break;
    case "-":
      result = a - b;
      oper = "뺄셈";
      break;
    case "*":
      result = a * b;
      oper = "곱셈";
      break;
    case "/":
      result = a / b;
      oper = "나눗셈";
      break;
    default:
      result = 0;
  }

  return (
    <div>
      <p>{oper}의 결과입니다.</p>
      <p>
        {a} {operator} {b} = {result}
      </p>
    </div>
  );
};

export default Calc;
