import React, { useEffect, useState } from 'react'

const users = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="">
      <table>
        <thead>
          <th>Active</th>
          <th>Email</th>
          <th>Password</th>
          <th>User_id</th>
          <th>User_name</th>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.User_id}>
              <td>{d.Active}</td>
              <td>{d.Email}</td>
              <td>{d.Password}</td>
              <td>{d.User_ID}</td>
              <td>{d.User_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default users
