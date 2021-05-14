import React from 'react'
import { useFormik } from "formik";

const AddTenantForm = ({ onAddTenant }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      paymentStatus: "CURRENT",
      leaseEndDate: ""
    },
    onSubmit: async (values) => {
      const { error } = await onAddTenant(values);
      if(!error){
        formik.resetForm();
      }
    }
  });
  
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            className="form-control"
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Status</label>
          <select 
             className="form-control"
             id="paymentStatus"
             name="paymentStatus"
             type="text"
             value={formik.values.paymentStatus}
             onChange={formik.handleChange}
          >
            <option>CURRENT</option>
            <option>LATE</option>
          </select>
        </div>
        <div className="form-group">
          <label>Lease End Date</label>
          <input 
            className="form-control"
            id="leaseEndDate"
            name="leaseEndDate"
            type="date"
            value={formik.values.leaseEndDate}
            onChange={formik.handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <button className="btn" type="reset" onClick={formik.resetForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddTenantForm;