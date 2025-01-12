import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTabler() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res)
        // console.log(res.data)
        setuser(res.data)
    }

    return (
        <div className='container'>
            <h1>hello thi user api</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user) => {
                            const {id,name,email,company} = user
                            return (
                                <tr key={id}>
                                    {/* <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td> */}
                                     <th scope="row">{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTabler
