import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./detail.css";
import UserInfo from "../UserInfo/UserInfo";
import { activeStatus, blacklistStatus } from "../../../features/userSlice";

const Details = () => {
  const { id } = useParams();
  const { users } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [toggleTab, setToggletab] = useState(1);

  const handleToggle = (index) => {
    setToggletab(index);
  };
  const user = users.find((user) => user.id.toString() === id);


  return (
    <div className="details-container">
      <Link to="/users" className="link">
        <p className="back-link">
          <BsArrowLeft />
          <span>Back to Users</span>
        </p>
      </Link>
      <div className="detail-title">
        <h2>Users Details</h2>
        <div className="btn">
          <button
            className="user-btn blacklist-btn"
            onClick={() => dispatch(blacklistStatus())}
          >
            blacklist user
          </button>
          <button
            className="user-btn active-btn"
            onClick={() => dispatch(activeStatus())}
          >
            activate user
          </button>
        </div>
      </div>
      {user && (
        <div className="detail-wrapper">
          <div className="user-tab">
            <div className="image-container">
              <img src="/images/user.svg" alt="user" />
            </div>

            <div className="user-name border">
              <p>{user.user}</p>
              <span>LSQFF587g9O</span>
            </div>
            <div className="user-tier border">
              <p>User's Tier</p>
              <span>ICONs</span>
            </div>
            <div className="bank-details">
              <p>N200,000.00</p>
              <span>991225789/Providus Bank</span>
            </div>
          </div>
          <div className="tab">
            <button
              className={toggleTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleToggle(1)}
            >
              General Details
            </button>
            <button
              className={toggleTab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleToggle(2)}
            >
              Documents
            </button>
            <button
              className={toggleTab === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleToggle(3)}
            >
              Bank Details
            </button>
            <button
              className={toggleTab === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleToggle(4)}
            >
              Loans
            </button>
            <button
              className={toggleTab === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleToggle(5)}
            >
              Savings
            </button>
          </div>
        </div>
      )}
      <div className="div">
        <div>
          <div
            className={toggleTab === 1 ? "content  active-content" : "content"}
          >
            <UserInfo />
          </div>
          <div
            className={toggleTab === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
          </div>
          <div
            className={toggleTab === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
          </div>
          <div
            className={toggleTab === 4 ? "content  active-content" : "content"}
          >
            <h2>Content 4</h2>
          </div>
          <div
            className={toggleTab === 5 ? "content  active-content" : "content"}
          >
            <h2>Content 5</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
