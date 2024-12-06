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
    const [id, setId] = useState<number>();
    const [names, setNames] = useState<string>();
    const [locs, setLocs] = useState<string>();
    const [isupdate,setIsupdate]=useState<boolean>(false);

    const deleteitem = (id: number) => {
        const deletedData = data.filter((item: abc) => {
            return item.id !== id
        });
        setData(deletedData);
    }

    const updateItem = (id:number) => {
        const updatedData = data.filter((item: abc) => {
            return item.id === id;
        })
           setIsupdate(true);
        setId(id);
        setNames(updatedData[0].name);
        setLocs(updatedData[0].loc);
    }

    const finalupdate = () => {
        const index:number | null = data.map((item: any) => {
            return item.id
        }).indexOf(id)
        const dt:any = [...data];
        dt[index].name = names;
        dt[index].loc = locs;
        setData(dt);
        cleared();
        setIsupdate(false);
    }

    const createItem = () => {
        const newItem: abc = {
            id:data.length+1,
            name: names,
            loc:locs
        }
        setData([...data, newItem]);
        cleared();
    }

    const cleared = () => {
        setNames('');
        setLocs("");
    }
    return (
        <>
        <div className="container">
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" value={names} onChange={(e)=>setNames(e.target.value)} id="" className="form-control" />
                    </div>
                    <div className="col">
                    <label htmlFor="">Location</label>
                    <input type="text" name="" id="" value={locs} onChange={(e)=>setLocs(e.target.value)} className="form-control" />
                    </div> 
                   
                    <div className="col">
                        <label htmlFor="">Action 1</label>
                        {
                                (isupdate) ? (<input type="button" value="Update" onClick={finalupdate} className="form-control" />) : (<input type="button" value="Save" onClick={createItem} className="form-control" />)
                        }
                       
                    </div>
                    <div className="col">
                    <label htmlFor="">Action 2</label>
                            <input type="button" value="Clear" onClick={cleared} className="form-control" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <table className="table table-bordered">
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Delete</th>
                <th>Update</th>
                {
                    data.map((item: abc) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.loc}</td>
                                <td><button className="btn btn-danger" onClick={()=>{deleteitem(item.id)}}>Delete</button></td>
                                   <td><button className="btn btn-info" onClick={()=>{updateItem(item.id)}}>Update</button></td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>
            </>
    );
}
export default CrudOperation;