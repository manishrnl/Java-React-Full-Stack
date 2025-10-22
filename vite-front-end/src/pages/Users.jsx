
// src/pages/Users.jsx
import { useEffect, useState } from 'react';
import { viewUser } from '../services/userService'; // ✅ import axios function

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        viewUser()
            .then(res => setUsers(res.data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-primary mb-4">User List</h2>
            <ul className="list-group">
                {users.map((u) => (
                    <li key={u.id} className="list-group-item">
                        <strong>{u.fullname}</strong> — {u.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;










// import { useEffect, useState } from 'react';
// import { viewUser } from '../services/userService';
//
// const Users = () => {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         viewUser()
//             .then(res => setUsers(res.data))
//             .catch(err => console.error(err));
//     }, []);
//
//     return (
//         <div>
//             <h1>Users</h1>
//             <ul>
//                 {users.map(u => <li key={u.id}>{u.name}</li>)}
//             </ul>
//         </div>
//     );
// };
//
// export default Users;
