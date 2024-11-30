import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
    const userLoaded = useLoaderData()
    const [users, setUsers] = useState(userLoaded)
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CreateAt</th>
                        <th>lastSignInTime</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.lastSignInTime || 'N/A'}</td>
                            <td>{user?.createAi || 'N/A'}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-xs mr-2">X</button>
                                <button className="btn btn-xs">E</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;