import { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const [val,setVal]=useState<boolean>(false);
    const sentdata=()=>{
        setVal(true)

    }
    return(
        <div>
             <button onClick={sentdata} className="btn btn-success">SendData</button>
             {
                (val) ? (<Child name="Abc" age={25} />):(null)
             }
        </div>
       
    )
}
export default Parent;