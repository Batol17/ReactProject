import React from 'react'
import { Link } from "react-router-dom";
import { FaUsersLine } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";

function SideBar() {
    return (
        <div>
            <div className="row">
                <div className="col-auto min-vh-100 bg-light  pt-5 text-white ">
                    <ul className='text-dark '>        
                        <li className='py-2 list-group-item'>
                            <a href="" className="nav-link px-1">
                                <i className="bi-speedometer">
                                    <Link to='/' className="nav-link">
                                        <FaUsersLine />
                                        <span className="ms-1 ps-2 d-none d-sm-inline">Home</span>
                                    </Link>
                                </i>
                            </a>
                        </li>
                        <li className='py-2 list-group-item'>
                            <a href="" className="nav-link px-1">
                                <i className="bi-table">
                                    
                                    <Link to='products' className="nav-link">
                                    <MdProductionQuantityLimits/>
                                        <span className="ms-1 ps-2 d-none d-sm-inline">Cart</span>
                                    </Link>
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar