import React from 'react'

const TenantsTable = () => {
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
        <tr>
          <th>1</th>
          <td>Mark Otto</td>
          <td>CURRENT</td>
          <td>12/31/2020</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TenantsTable