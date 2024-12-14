import axios from "axios";
import { useEffect, useState } from "react";

interface abc{
    userId: number;
    id: number;
    title: string;
    body:string
}

const GetUserDetails = () => {
    const [info, setInfo] = useState<abc[]>([]);
    const [user, setSelectedUser] = useState<abc | null>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res:any)=>{setInfo(res.data)})
    })

    const showItem = (id:any) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => { setSelectedUser(res.data) });
    }

    

    return (
        <>
        <div className="container">
        <table className="table table-bordered">
            <thead>
                <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((item: abc) => (
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <button onClick={()=>{showItem(item.id)}}>View</button>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>

        <div className="card">
            <div className="card-body">
                    {
                        <>
                        <p>Id:{user?.userId}</p>
                        <p>UserId:{user?.id}</p>
                        <p className="card-title">Title:{user?.title}</p>
                            <p>Body:{user?.body}</p>
                        </>
                   }
            </div>
        </div>
     </>   
    );
}

export default GetUserDetails;