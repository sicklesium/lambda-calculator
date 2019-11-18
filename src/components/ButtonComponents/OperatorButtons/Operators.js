import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
// STEP 2 - add the imported data to state
const [buttonOperators, setbuttonOperators] = useState(operators);
return (
  <div>
     {buttonOperators.map(operator => {
        return <OperatorButton operator={operator} key={operator.char} />
    })}
  </div>
);
};

export default Operators;
