import { useState } from "react";
const State=()=>{
 
    const [data,setData]=useState<number>(0);
    const increment=()=>{
        setData(data+1);
    }
    const decrement=()=>{
        setData(data-1);
    }
    return(
        <div>
            <h2>{data}</h2>
            {/* This is a Functional component */}
            <button className="btn btn-info" style={{margin:'25px'}} onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </div>
    )
}
export default State;