import React, { useState, useEffect, useMemo } from 'react';
import { Service } from './Service';
import Tabs from './components/Tabs';
import LoadingSpinner from './components/LoadingSpinner';
import TenantsTable from './components/TenantsTable';
import AddTenantForm from './components/AddTenantForm';
import { diffInMonths } from './utils/date';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tenants, setTenants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

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

  const onDeleteTenant = async (id) => {
    setLoading(true);
    setError('');
    try {
      await Service.deleteTenant(id);
      const newTenants = tenants.filter(t => t.id !== id);
      setTenants(newTenants);
    } catch (error) {
      setError("Something went wrong deleting the tenant. Try again.");
    }finally{
      setLoading(false);
    }
  }

  

  const filteredTenants = useMemo(() => {
    switch (filter) {
      case 'all':
        return tenants;
      case 'payment-late':
        return tenants.filter(t => t.paymentStatus === 'LATE');
      case 'lease-less-than-month':
        const today = new Date();
        return tenants.filter(t => diffInMonths(t.leaseEndDate, today) < 1);
      default:
        return tenants; 
    }
  }, [filter, tenants]);

  return (
    <>
      <div className="container">
        <h1>Tenants</h1>
        <Tabs filter={filter} setFilter={setFilter} />
        {
          loading 
          ? <LoadingSpinner />
          : <TenantsTable tenants={filteredTenants} onDelete={onDeleteTenant}/>
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
