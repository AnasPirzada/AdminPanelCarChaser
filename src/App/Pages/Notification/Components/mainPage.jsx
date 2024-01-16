import React from 'react';
import { Link } from 'react-router-dom';
export const mainPage = () => {
  return (
    <div>
      <div>
        <p
          className='p-4'
          style={{ color: '#000000', fontSize: '16px', fontWeight: '600' }}
        >
          Today
        </p>
      </div>
      <Link to='/DetailPage'>
        <div
          className='rounded-4 p-3 shadow d-flex justify-content-between align-items-center'
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <p
            className='my-0'
            style={{ color: '#101010', fontSize: '14px', fontWeight: '500' }}
          >
            New Car Added
          </p>

          <p
            className='my-0'
            style={{ color: '#101010', fontSize: '14px', fontWeight: '400' }}
          >
            10:20 AM
          </p>
        </div>
      </Link>
      <div
        className='rounded-4 p-3 shadow mt-5  d-flex justify-content-between align-items-center'
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <p
          className='my-0'
          style={{ color: '#101010', fontSize: '14px', fontWeight: '500' }}
        >
          You got a new message from
          <span style={{ color: '#F1AD3D' }}> Mohsin</span>
        </p>
        <p
          className='my-0'
          style={{ color: '#000000', fontSize: '12px', fontWeight: '400' }}
        >
          10:20 AM
        </p>
      </div>
      <Link to='/DetailPage'>
        <div
          className='rounded-4 p-3 shadow mt-5  d-flex justify-content-between align-items-center'
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <p
            className='my-0'
            style={{ color: '#101010', fontSize: '14px', fontWeight: '500' }}
          >
            <span style={{ color: '#F1AD3D' }}> From Mohsin</span>
            <br />
            You got a new message.
          </p>
          <p
            className='my-0'
            style={{ color: '#000000', fontSize: '12px', fontWeight: '400' }}
          >
            10:20 AM
          </p>
        </div>
      </Link>
      <div className='d-flex justify-content-between align-items-center'>
        <p
          className='p-4'
          style={{ color: '#000000', fontSize: '16px', fontWeight: '600' }}
        >
          Yesterday
        </p>
      </div>
      <Link to='/DetailPage'>
        <div
          className='rounded-4 p-3 mb-5 shadow d-flex justify-content-between align-items-center'
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <p
            className='my-0'
            style={{ color: '#101010', fontSize: '14px', fontWeight: '500' }}
          >
            New Car Added
          </p>
          <p
            className='my-0'
            style={{ color: '#000000', fontSize: '12px', fontWeight: '400' }}
          >
            10:20 AM
          </p>
        </div>
      </Link>
    </div>
  );
};
export default mainPage;
