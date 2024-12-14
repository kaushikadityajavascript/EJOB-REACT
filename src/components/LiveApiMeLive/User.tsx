import axios from "axios";
import { useEffect, useState } from "react";
interface abc {
    id: number;
    fname: string;
    lname: string;
    username: string;
    password: string;
    avatar: string;
}


const User = () => {
    const [info, setInfo] = useState<abc[]>([]);
    const [user, setUser] = useState<abc | null>(null);
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [isUpdate, setIsupdate] = useState<boolean>(false);
    useEffect(() => {
          const fetchUsers = async () => {
        try {
            const data = await axios.get('https://www.melivecode.com/api/users');
            setInfo(data.data);
            console.log(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    fetchUsers();
    }, []);
    
    const showItem =async (id:number) => {
        try {
            const res = await axios.get(`https://www.melivecode.com/api/users/${id}`);
            console.log(res.data);
            setUser(res.data);
        } catch (err) {
            console.log(err);
       }
    }

    const selectItem =async (id:number) => {
        try {
            const data = await axios.get(` https://www.melivecode.com/api/users/${id}`);
            const res = await data.data.user;
            setFname(res.fname);
            setLname(res.lname);
            setUsername(res.username)
            setAvatar(res.avatar)
            setIsupdate(true);
            // setAvatar(res.avatar)
        } catch (err) {
            console.log(err);
       }
    }

    const finalUpdate = async () => {
        console.log(user?.user.id);
        if(!user?.user.id){
            alert("Missing fields");
            return;
        }
        const updateData = {
            id: user?.user.id,
            fname,
            lname
        }
        try {
            const response = await axios.put(' https://www.melivecode.com/api/users/update',updateData);
            alert(`User updated: ${response.data.message}`);
            const updatedUsers = await axios.get('https://www.melivecode.com/api/users');
            setInfo(updatedUsers.data);
            setIsupdate(false)
        } catch (err) {
            console.log(err);
        }
    }

    const saveItem = async () => {
         const payload = {
                fname,
                lname,
                username,
                password:1234,
                email: "test@email.com",
                avatar:avatar || "default-avatar-url", 
        };
        //  const headers = {
        //     "Content-Type": "application/json",
        // };
        try {  
            console.log("===============start");
            const data = await axios.post('https://www.melivecode.com/api/users/create',payload);
            console.log("======",data.data);
            alert('User created successfully');
            const updatedUsers = await axios.get('https://www.melivecode.com/api/users');
            setInfo(updatedUsers.data);
            // setFname("");
            // setLname("");
            // setUsername("");
            // setAvatar("");
        } catch (err) {
            alert(err)
            console.log(err);
        }
    }
    return (
        <>
            
            <div className="conatiner">
                <form action="">
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label>First Name</label>
                                <input type="text"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                             <div className="col">
                                <label>Last Name</label>
                                <input type="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                             <div className="col">
                                <label>Username</label>
                                <input type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col">
                                <label>Avatar</label>
                                <input type="file"
                                    
                                className="form-control"
                                />
                            </div>
                           
                            <div className="col">
                                <label htmlFor="">Action1</label>
                                {
                                    (isUpdate)?(<input type="button" value="Update" onClick={finalUpdate} className="form-control"/>):(<input type="button" value="Save" onClick={saveItem} className="btn btn-success"/>)
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="container" >
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((item:abc) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <img src={item.avatar} style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>{showItem(item.id)}}>View</button>
                                    </td>
                                     <td>
                                        <button className="btn btn-danger" onClick={()=>{showItem(item.id)}}>Delete</button>
                                    </td>
                                     <td>
                                        <button className="btn btn-primary" onClick={()=>{selectItem(item.id)}}>Select</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
             <div className="card" style={{width:"300px", wordWrap:"break-word"}}>
                    <div className="card-body">
                         {
                        <>
                            <p>Id:{user?.user.id}</p>
                            <p>First Name:{user?.user.fname}</p>
                            <p>Last Name{user?.user.lname}</p>
                            <p>Username{user?.user.username}</p>
                            <p>
                                <img src={user?.user.avatar} style={{width:"50px",height:"50px" , borderRadius:"50%"}}/>
                            </p>
                        </>
                    }
                   </div>
                </div>
        </>
   )
}
export default User;