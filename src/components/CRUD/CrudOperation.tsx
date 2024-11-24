import { useState } from "react";
interface abc{
    id: number;
    name: string;
    loc: string;
}

const CrudOperation = () => {
    const [data, setData] = useState<abc[]>([
        { id: 1, name: "Shivam", loc: "Nagpur" },
        { id: 2, name: "Kaushik", loc: "Kolkata" },
        {id:3,name:"Sourav",loc:"Kolkata"}
    ]); 

    const deleteitem = (id: number) => {
        const deletedData = data.filter((item: abc) => {
            return item.id !== id
        });
        setData(deletedData);
    }
    return (
        <div className="container">
            <table className="table table-bordered">
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Action</th>
                {
                    data.map((item: abc) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.loc}</td>
                                <td><button className="btn btn-danger" onClick={()=>{deleteitem(item.id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}
export default CrudOperation;