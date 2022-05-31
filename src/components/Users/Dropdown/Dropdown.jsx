import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import './dropdown.css'

const Dropdown = () => {
  const { users } = useSelector((store) => store.user);
  console.log(users.id)
  
  return (
    <div className='dropdown'>
        <ul>
            <Link to={`/user/${users.id}`}>View Details</Link>
        </ul>
    </div>
  )
}

export default Dropdown