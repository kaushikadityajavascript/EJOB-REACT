import axios from 'axios'
import { useEffect, useState } from "react"
interface abc{
    userId:number,
    id:number,
    title:string,
    body:string
}

const Apiget=()=>{
    const [info,setInfo]=useState<abc[]>([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{setInfo(res.data)})
    })
    return(
        <>
        <div className="container">
            <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                    <tr>    
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                {
                    info.map((item:abc)=>{
                        return(
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )

                    })
                }
            </table>
        </div>

        
        </>
    )
}
export default Apiget