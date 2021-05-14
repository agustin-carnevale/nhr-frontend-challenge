import React, { useState, useEffect } from 'react';
import AddTenantForm from './components/AddTenantForm';
import LoadingSpinner from './components/LoadingSpinner';
import Tabs from './components/Tabs';
import TenantsTable from './components/TenantsTable';
import { Service } from './Service';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tenants, setTenants] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTenants();
  }, []);

  const fetchTenants = async () => {
    setLoading(true);
    setError('');
    setTenants([]);
    try {
      const result = await Service.getTenants();
      setTenants(result);
    } catch (error) {
      setError("Something went wrong fetching tenants. Please refresh.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Tenants</h1>
        <Tabs />
        {
          loading 
          ? <LoadingSpinner />
          : <TenantsTable tenants={tenants}/>
        }
      </div>
      <div className="container text-center" style={{color: 'red'}}>
        { error }
      </div>
      <div className="container">
        <button 
          className="btn btn-secondary"
          onClick={()=> setShowForm(!showForm)}
        >
          Add Tenant
        </button>
      </div>
      {
        showForm && 
        <AddTenantForm />
      }
    </>
  );
}

export default App;
