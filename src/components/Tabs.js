import React from 'react'

const Tabs = () => {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">All</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Payment is late</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Lease ends in less than a month</a>
      </li>
    </ul>
  );
}

export default Tabs