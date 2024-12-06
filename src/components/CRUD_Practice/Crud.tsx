import { useState } from "react";

interface abc{
    id: number;
    name: string;
    location: string;
}

const CrudOps: React.FC = () => {
    const [data] = useState<abc[]>([
    { id: 1, name: "Shivam", location: "Nagpur" },
    { id: 2, name: "Kaushik", location: "Kolkata" },
    { id: 3, name: "Sourav", location: "Kolkata" },
    ]); 

    const [currentItem, setCurrentItem] = useState<abc>({
        id: 0,
        name: "",
        location: ""
    });
    const [isUpdate, setIsupdate] = useState<boolean>(false);

    const updateItem = (id:number) => {
        const itemToUpdate = data.find((item: abc) => {
            return item.id === id;
        });
        console.log(itemToUpdate);
        // setCurrentItem(itemToUpdate)
    }

    return (
        <>
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name</label>
                            <input type="text"
                                value={currentItem.name}
                                onChange={(e) =>
                                    setCurrentItem({...currentItem,name:e.target.value})
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="">Location</label>
                            <input type="text"
                                value={currentItem.location}
                                onChange={(e) =>
                                    setCurrentItem({...currentItem,location:e.target.value})
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                                <label htmlFor="">Action1</label>
                        </div>
                        <div className="col">
                                 <label htmlFor="">Action2</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table table-bordered">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Delete</th>
                        <th>Update</th>
                        {
                        data.map((item: abc) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                    <td><button className="btn btn-danger" >Delete</button></td>
                                    <td> <button className="btn btn-danger" onClick={() => { updateItem(item.id) }}>Update</button></td>
                                </tr>
                            )
                        })
                        }
                </table>
            </div>
        </>
    )
}

export default CrudOps;