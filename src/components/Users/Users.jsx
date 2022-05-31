import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import moment from "moment";
import { FaUsers } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";


import "./users.css";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { activeStatus, blacklistStatus } from "../../features/userSlice";

const Users = (id) => {
  const { users, status } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  

  const [showDropdown, setShowDropdown] = useState(false);
 

  const handleClick = (id) => {
    const dropdown = users.find((item) => item.id === id)
    setShowDropdown(dropdown);
  }

  const [pageNumber, setPageNumber] = useState(0);
  // console.log(users);
  const usersPerPage = 10;
  const pagesVisted = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisted, pagesVisted + usersPerPage)
    .map((user) => {
      return (
        <>
        <tr key={user.id}>
          <td>{user.organization}</td>
          <td>{user.user_name}</td>
          <td>{user.user_email}</td>
          <td>{user.phone_number}</td>
          <td>{moment(user.date).format("lll")}</td>
          <td className="td">
            <p className='status pending-status'>{status}</p>
            <button className="user_btn" onClick={() => handleClick(user.id)}>
              <img src="/images/info.svg" alt="" />
            </button>
          </td>
        </tr>
         {showDropdown && (
          <div className='dropdown'>
          <ul>
              <Link to={`/user/${user.id}`}><li>View Details</li></Link>
              <li onClick={() => dispatch(activeStatus())}>active</li>
              <li onClick={() => dispatch(blacklistStatus())}>Blacklist</li>
          </ul>
      </div>
      )}
      </>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="users-container">
      <h3 className="title">Users</h3>
      <div className="box-wrapper">
        <div className="boxes">
          <div className="box-icons box1">
            <IoMdContacts />
          </div>
          <p className="box-name">USERS</p>
          <p className="box-number">2,453</p>
        </div>
        <div className="boxes">
          <div className="box-icons box2">
            <FaUsers />
          </div>
          <p className="box-name">ACTIVE USERS</p>
          <p className="box-number">2,453</p>
        </div>
        <div className="boxes">
          <div className="box-icons box3">
            <GiReceiveMoney />
          </div>
          <p className="box-name">USERS WITH LOANS</p>
          <p className="box-number">12,453</p>
        </div>
        <div className="boxes">
          <div className="box-icons box4">
            <GrMoney />
          </div>
          <p className="box-name">USERS WITH SAVINGS</p>
          <p className="box-number">102,453</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <p className="table_head">
                ORGANIZATION{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
            <th>
              <p className="table_head">
                USERNAME{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
            <th>
              <p className="table_head">
                EMAIL{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
            <th>
              <p className="table_head">
                PHONE NUMBER{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
            <th>
              <p className="table_head">
                DATE JOINED{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
            <th>
              <p className="table_head">
                STATUS{" "}
                <img className="head_logo" src="/images/bar.svg" alt="bars" />
              </p>
            </th>
          </tr>
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>

      <ReactPaginate
        previousLabel={<IoMdArrowDropleft className="page-icon" />}
        nextLabel={<IoMdArrowDropright className="page-icon" />}
        pageCount={pageCount}
        onPageChange={changePage}
        breakLabel={"..."}
        pageClassName={"page"}
        containerClassName={"page-container"}
        activeClassName={"paginationActive"}
        disabledClassName={"disableBtn"}
      />
    </div>
  );
};

export default Users;
