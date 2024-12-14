import axios from "axios";
import { useEffect, useState } from "react";

interface abc{
    id: number;
    fname: string;
    lname: string;
    username: string;
    avatar: string;
}

const GetUser = () => {
    const [info, setInfo] = useState<abc[]>([]);
    const [user, setSelectedUser] = useState<abc | null>(null);
    const [update, setUpdate] = useState<any[]>([]);
    const [isUpdate, setIsupdate] = useState<boolean>(false);
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("default-avatar-url");
    
   useEffect(() => {
    axios.get('https://www.melivecode.com/api/users')
        .then((res: any) => {
            setInfo(res.data);
        })
        .catch((err) => console.error(err));
});

    const showItem = (id: any) => {
    axios.get(`https://www.melivecode.com/api/users/${id}`)
        .then((res) => { 
            setSelectedUser(res.data);
            console.log(res.data); 
        })
        .catch((err) => console.error(err));
    };
    
   const updateItem = async (id: any) => {
       try {
        const res = await axios.get(`https://www.melivecode.com/api/users/${id}`);
        const userData = res.data.user; 
        console.log(userData);
           setFname(userData.fname);
        setLname(userData.lname);
           setUsername(userData.username);
             setIsupdate(true);
    } catch (err) {
        console.error(err);
    }
    };

    const finalUpdate = async () => {
    if (!user?.user.id || !fname || !lname) {
        alert("Missing required fields.");
        return;
    }

    const updatedData = {
        id: user.user.id,
        fname,
        lname,
    };

    try {
        const response = await axios.put(
            `https://www.melivecode.com/api/users/update`,
            updatedData
        );
        console.log(response.data);
        alert(`User updated: ${response.data.message}`);
        setIsupdate(false);
        const updatedUsers = await axios.get('https://www.melivecode.com/api/users');
        setInfo(updatedUsers.data);
    } catch (err) {
        console.error("Error updating user:", err);
        alert("Failed to update user.");
    }
};
    const createItem = async () => {
   const newUser = {
        fname,
        lname,
        username,
        email: "default@example.com",
        avatar: avatar || "default-avatar-url", 
    };

    try {
        const res = await axios.post('https://www.melivecode.com/api/users/create', newUser);
        console.log(res.data);
        alert('User created successfully');
        const updatedUsers = await axios.get('https://www.melivecode.com/api/users');
        setInfo(updatedUsers.data);
        setFname("");
        setLname("");
        setUsername("");
        setAvatar("");
    } catch (err) {
        console.error('Error creating user:', err);
    }
};



    return (
        <>
        <div className="container">
                <form action="">
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">First Name</label>
                                <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} className="form-control"/>
                            </div>
                             <div className="col">
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} className="form-control"/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Username</label>
                                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control"/>
                            </div>
                             {/* <div className="col">
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={avatar} className="form-control"/>
                            </div> */}
                             <div className="col">
                                <label htmlFor="">Action 1</label>
                                {/* <input type="button" value="Update"className="form-control" /> */}
                        {
                                (isUpdate) ? (<input type="button" value="Update" onClick={finalUpdate} className="form-control" />) : (<input type="button" value="Save" onClick={createItem} className="form-control" />)
                        }
                       
                    </div>
                        </div>
                    </div>
                </form>        
        </div>

        <div className="container">
             <table className="table table-bordered">
            <thead>
                <tr>
                <th>Id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Username</th>
                <th>Avatar</th>
                <th>View</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((item: abc) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.username}</td>
                            <td>
                                 <img src={item.avatar} alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                            </td>
                            <td>
                                  <button onClick={()=>{showItem(item.id)}}>View</button>
                            </td>
                            <td>
                                 <td><button className="btn btn-info" onClick={()=>{updateItem(item.id)}}>Update</button></td>
                           </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            </div>
            
             <div className="card" style={{ width: "300px", wordWrap: "break-word" }}>
            <div className="card-body">
                    {
                        <>
                        <p>Id:{user?.user.id}</p>
                        <p>Fname:{user?.user.fname}</p>
                        <p>Lname:{user?.user.lname}</p>
                        <p>Username:{user?.user.username}</p>
                            <p>
                                 <img src={user?.user.avatar} alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                        </p>
                        </>
                   }
            </div>
        </div>
        </>
    );
}

export default GetUser;