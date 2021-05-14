import React from 'react'
import { formatDate } from '../utils/date';

const TenantsTable = ({ tenants, onDelete }) => {

  const RowItem = ({tenant}) => (<tr>
    <th>{tenant.id}</th>
    <td>{tenant.name}</td>
    <td>{tenant.paymentStatus}</td>
    <td>{formatDate(tenant.leaseEndDate)}</td>
    <td>
      <button 
        className="btn btn-danger"
        onClick={() => onDelete(tenant.id)}
      >
        Delete
      </button>
    </td>
  </tr>);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Payment Status</th>
          <th>Lease End Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      { tenants.map(t => (<RowItem key={t.id} tenant={t} />)) }
      </tbody>
    </table>
  );
}

export default TenantsTable