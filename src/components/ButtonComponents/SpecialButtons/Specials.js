import React, { useState } from "react";

//import any components needed
import SpecialButton from './SpecialButton.js';

//Import your array data to from the provided data file
import { specials } from '../../../data.js';

const Specials = () => {
// STEP 2 - add the imported data to state
const [buttonSpecials, setbuttonSpecials] = useState(specials);
return (
  <div>
    {buttonSpecials.map(special => <SpecialButton
      special={special}
      key={special} />)}
  </div>
);
};

export default Specials;
