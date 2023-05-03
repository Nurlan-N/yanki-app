import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="products">
            <i className="bi bi-bag-dash-fill"></i>
            <span>Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="categories">
            <i className="bi bi-bookmarks"></i>
            <span>Categories</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="orders">
            <i className="bi bi-list-ul"></i>
            <span>Orders</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="users">
            <i className="bi bi-people"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="settings">
            <i className="bi bi-gear-wide-connected"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="online">
            <i className="bi bi-person-check"></i>
            <span>Online Users</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
