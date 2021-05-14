import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '../components/Tabs';

describe('Component: Tabs', () => {

  test('renders content: correct tab names', () => {
    const filter = 'all';
    const setFilter = () => {};
    const component = render(<Tabs filter={filter} setFilter={setFilter}/>);
  
    expect(component.container).toHaveTextContent('All');
    expect(component.container).toHaveTextContent('Payment is late');
    expect(component.container).toHaveTextContent('Lease ends in less than a month');
  });

  test('clicking on a tab calls setFilter with correct filter', () => {
    const filter = 'all';
    const setFilter = jest.fn();
    const component = render(<Tabs filter={filter} setFilter={setFilter}/>);
  
    // clicking on 'Payment is late' tab
    const tabPaymentLate = component.getByText('Payment is late');
    fireEvent.click(tabPaymentLate);
  
    // only called once
    expect(setFilter).toHaveBeenCalledTimes(1);
  
    // called with the correct tab id (filter name)
    expect(setFilter).toHaveBeenLastCalledWith('payment-late');
  
    // clicking on 'Lease ends in less than a month' tab
    const tabLeaseEndsInAMonth = component.getByText('Lease ends in less than a month');
    fireEvent.click(tabLeaseEndsInAMonth);
  
    // now called for the second time
    expect(setFilter).toHaveBeenCalledTimes(2);
  
    // called with the correct tab id (filter name)
    expect(setFilter).toHaveBeenLastCalledWith('lease-less-than-month');
  });

});