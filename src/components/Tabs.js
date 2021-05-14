import React from 'react'

const Tabs = ({ filter, setFilter }) => {
  
  const NavItem = ({children, id}) => (
    <li className="nav-item">
      <button 
        className={`nav-link ${filter === id ? 'active':''}`} 
        onClick={()=>setFilter(id)}
      >
        {children}
      </button>
    </li>
  );

  return (
    <ul className="nav nav-tabs">
      <NavItem id='all'>
        All
      </NavItem>
      <NavItem id='payment-late'>
        Payment is late
      </NavItem>
      <NavItem id='lease-less-than-month'>
        Lease ends in less than a month
      </NavItem>
    </ul>
  );
}

export default Tabs;
