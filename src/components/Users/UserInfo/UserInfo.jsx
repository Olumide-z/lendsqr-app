import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './userInfo.css'

const UserInfo = () => {
    const {id} = useParams();
    const { users } = useSelector((store) => store.user);
    const user = users.find((user) => user.id.toString() === id);

  return (
    <div className="user-info-container">
        {
            user && (
                <div className="info-content">
                    <div className="info">
                        <h3>Personal Information</h3>
                        <div className="info-details">
                            <p><h6>FULL NAME</h6><span>{user.user}</span></p>
                            <p><h6>Phone number</h6><span>+{user.phone_number}</span></p>
                            <p><h6>email address</h6><span>{user.user_email}</span></p>
                            <p><h6>bvn</h6><span>{user.bvn}</span></p>
                            <p><h6>Gender</h6><span>{user.gender}</span></p>
                            <p><h6>Martial status</h6><span>Single</span></p>
                            <p><h6>Children</h6><span>{user.children}</span></p>
                            <p><h6>type of residence</h6><span>Parent's Apartment</span></p>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Education and Employment</h3>
                        <div className="info-details">
                            <p><h6>Level of education</h6><span>B.Sc</span></p>
                            <p><h6>EMPLOYMENT STATUS</h6><span>Employed</span></p>
                            <p><h6>sector of employment</h6><span>FinTech</span></p>
                            <p><h6>duration of employment</h6><span>{Math.floor((Math.random() * 10) + 1)} years</span></p>
                            <p><h6>office mail</h6><span>{user.user_email}</span></p>
                            <p><h6>Monthly income</h6><span>N200,000.00 - N400,000</span></p>
                            <p><h6>Loan repayment</h6><span>40,000</span></p>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Socials</h3>
                        <div className="info-details">
                            <p><h6>Twitter</h6><span>@{user.user}</span></p>
                            <p><h6>Facebook</h6><span>{user.user}</span></p>
                            <p><h6>instagram</h6><span>@{user.user}</span></p>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Gurantor</h3>
                        <div className="info-details">
                            <p><h6>FULL NAME</h6><span>{user.gurantor}</span></p>
                            <p><h6>Phone number</h6><span>+234 70 123 234 87</span></p>
                            <p><h6>email address</h6><span>{user.gurantor_email}</span></p>
                            <p><h6>relationship</h6><span>Brother</span></p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default UserInfo