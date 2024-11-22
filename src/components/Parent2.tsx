import { useState } from "react";
import Child2 from "./Child2";

interface Abc {
    id: number;
    name: string;
    add: string;
}

const Parent2 = () => {
    const [check, setCheck] = useState<boolean>(false);
    const [data] = useState<Abc[]>([
        { id: 1, name: "Amarnath Basak", add: "Kolkata" },
        { id: 2, name: "Koushik Aditya", add: "Burdwan" },
        { id: 3, name: "Sohan Sinha", add: "Purulia" },
    ]);

    const sendData = () => {
        setCheck(true);
    };

    return (
        <div>
            <button onClick={sendData}>Send</button>
            {check ? <Child2 value={data} /> : null}
        </div>
    );
};

export default Parent2;
