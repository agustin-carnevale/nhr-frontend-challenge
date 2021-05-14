import React from 'react';
import AddTenantForm from './components/AddTenantForm';
import Tabs from './components/Tabs';
import TenantsTable from './components/TenantsTable';
import { Service } from './Service';

const mockTenants = [
  {
    id: 1,
    name: "Mark Otto",
    paymentStatus: "CURRENT",
    leaseEndDate: "12/31/2020"
  }
]

function App() {

  return (
      <>
        <div className="container">
          <h1>Tenants</h1>
          <Tabs />
          <TenantsTable tenants={mockTenants}/>
        </div>
        <div className="container">
          <button className="btn btn-secondary">Add Tenant</button>
        </div>
        <AddTenantForm />
      </>
  );
}

export default App;
