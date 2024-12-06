import axios from "axios"
import { useEffect, useState } from "react"
interface abc{
    userId:number,
    id:number,
    title:string,
    body:string
}

const Apiget2=()=>{
    const [info,setInfo]=useState<abc[]>([]);
    const [matched,setMatched]=useState<any>([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{setInfo(res.data)})
    })
    const showitem=(id:any)=>{
        // alert(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((item:any)=>{
            setMatched(item.data)
        })
        

    }
    return(
        <>
        <div className="container">
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </thead>
                {
                    info.map((item:abc)=>{
                        return(
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td><button onClick={()=>{showitem(item.id)}} className="btn btn-success">Show</button></td>
                            </tr>
                        )

                    })
                }
            </table>
        </div>
        
        <div className="card">
            <div className="card-header">
                <h2>User Information : </h2>
            </div>
            <div className="card-body">
                {
                <>
        
                <p>Id  : {matched?.id}</p>
                <p>User Id : {matched?.userId}</p>
                <p>Title  : {matched?.title}</p>
                <p>Body : {matched?.body}</p>
                </>
            }
            </div>
        </div>

        
        </>
    )
}
export default Apiget2