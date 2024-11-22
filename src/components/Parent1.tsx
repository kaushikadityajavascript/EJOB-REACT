import { useState } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const [data, setData] = useState<number>(0);
  const [check, setCheck] = useState<boolean>(false);

  const sendData = () => {
    setCheck(true);
  };

  const increment = () => {
    setData((prevData) => prevData + 1); 
    };
    
    const decrement = () => {
    setData((prevData) => prevData - 1);
  };

  return (
    <div>
      <button onClick={sendData}>Send</button>
      {check ? <Child1 count={data} increment={increment} decrement={decrement} /> : null}
    </div>
  );
};

export default Parent1;
