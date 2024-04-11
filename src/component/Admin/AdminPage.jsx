import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api/getAll")
      setUser(res.data)
    }
    fetchData();
  }, [])

  return (
    <div>
      <div className="container">
        <h2>User Information</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className='bg-primary'>Sr. No.</th>
              <th scope="col" className='bg-primary'>First Name</th>
              <th scope="col" className='bg-primary'>Last Name</th>
              <th scope="col" className='bg-primary'>Email</th>
              <th scope="col" className='bg-primary'>Password</th>
              <th scope="col" className='bg-primary'>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData, index) => (
              <tr key={userData._id}>
                <td>{index + 1}</td>
                <td>{userData.fname}</td>
                <td>{userData.lname}</td>
                <td>{userData.email}</td>
                <td>{userData.password}</td>
                <td>
                  <button className='btn btn-success btn-sm'>
                    <Link to={`/edit/${userData._id}`}>
                      <i className="bi bi-pencil text-white"></i>
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
