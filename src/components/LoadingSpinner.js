import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;