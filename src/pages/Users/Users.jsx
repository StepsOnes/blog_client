import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {$axios} from "../../http/api.js";

const Users = (props) => {
    const [usersArr, setUsersArr] = useState([])

     useEffect( () => {
         const foo = async () => {
             try {
                 const { data } = await $axios.get('/auth/users')
                 setUsersArr(data)

             } catch (err) {
                 console.log(err)
             }
         }
            foo()
    }, []);


    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Время создания</th>
                    </tr>
                </thead>
                <tbody>
                    {(usersArr.length) && (usersArr.map(user => {
                        return (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        )
                    }))}
                </tbody>
            </Table>
        </div>
    );
}

export default Users;