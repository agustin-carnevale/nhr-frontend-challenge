import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import TenantsTable from '../components/TenantsTable';
import { formatDate } from '../utils/date';

describe('Component: TenantsTable', () => {
  test('renders content: correct column names', () => {
    const tenants = [];
    const onDelete = () => {};
    const component = render(<TenantsTable tenants={tenants} onDelete={onDelete}/>);
  
    expect(component.container).toHaveTextContent('#');
    expect(component.container).toHaveTextContent('Name');
    expect(component.container).toHaveTextContent('Payment Status');
    expect(component.container).toHaveTextContent('Lease End Date');
    expect(component.container).toHaveTextContent('Actions');
  });

  test('renders content: correct tenant row', () => {
    const tenant = {
      id: 1,
      name: 'Joe',
      paymentStatus: 'CURRENT',
      leaseEndDate: new Date('2021-05-14').toISOString()
    }
    const tenants = [tenant];
    const onDelete = () => {};
    const component = render(<TenantsTable tenants={tenants} onDelete={onDelete}/>);
  
    expect(component.container).toHaveTextContent(tenant.id);
    expect(component.container).toHaveTextContent(tenant.name);
    expect(component.container).toHaveTextContent(tenant.paymentStatus);
    expect(component.container).toHaveTextContent(formatDate(tenant.leaseEndDate));
  });

  test('clicking delete button calls onDelete with correct tenant id', () => {
    const tenant = {
      id: 1,
      name: 'Joe',
      paymentStatus: 'CURRENT',
      leaseEndDate: new Date('2021-05-14').toISOString()
    }
    const tenants = [tenant];
    const onDeleteMock = jest.fn();
    const component = render(<TenantsTable tenants={tenants} onDelete={onDeleteMock}/>);
  
    // only tenant that exists on the table
    expect(component.container).toHaveTextContent(tenant.id);
    expect(component.container).toHaveTextContent(tenant.name);
    expect(component.container).toHaveTextContent(tenant.paymentStatus);
    expect(component.container).toHaveTextContent(formatDate(tenant.leaseEndDate));
  
    // clicking delete button
    const deleteButton = component.getByText('Delete');
    fireEvent.click(deleteButton);
  
    // only called once
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  
    // called with the correct tenant id
    expect(onDeleteMock).toHaveBeenLastCalledWith(tenant.id);
  });
  
});