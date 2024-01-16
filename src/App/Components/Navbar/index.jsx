import React from 'react';

export const index = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', height: '70px' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='mt-3 w-50 d-flex justify-content-between align-items-center'>
          <div>
            <img src='./Logo.svg' alt='' />
          </div>
          <div
            className='d-flex justify-content-start align-items-center w-100 py-2 ms-5 rounded-4 '
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <img src='./iconoir_search.svg' alt='' className='ms-2' />
            <p
              className='my-0 ms-3'
              style={{ color: '#3D3D3D', fontWeight: '400', fontSize: '18px' }}
            >
              Search
            </p>
          </div>
        </div>
        <div>
          <img
            src='./clarity_notification-solid-badged.svg'
            className='me-4'
            alt=''
          />
          <img src='./PNG/UserImage.png' alt='' />
        </div>
      </div>
    </div>
  );
};
export default index;
