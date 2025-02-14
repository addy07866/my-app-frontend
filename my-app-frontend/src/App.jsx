import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Registered Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;