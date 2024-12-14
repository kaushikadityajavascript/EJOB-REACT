import axios from "axios";
import { useState } from "react";

interface abc {
    fname: string;
    lname: string;
    username: string;
    password: string;
    email: string;
    avatar: string;
}

const CreateUser = () => {
    const [info, setInfo] = useState<abc>({
        fname: "",
        lname: "",
        username: "",
        password: "",
        email:"",
        avatar: "",
    });

    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = () => {
        axios.post('https://www.melivecode.com/api/users/create', info)
            .then((res) => {
                setResponseMessage(res.data.message || "User created successfully");
                console.log(res.data);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h2>Create User</h2>
            <div>
                <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={info.fname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={info.lname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={info.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={info.password}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={info.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="avatar"
                    placeholder="Avatar URL"
                    value={info.avatar}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Create User</button>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default CreateUser;
