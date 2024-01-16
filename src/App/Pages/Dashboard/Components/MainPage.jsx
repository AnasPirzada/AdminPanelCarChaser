import React from 'react';
import Table from 'react-bootstrap/Table';

export const MainPage = () => {
  const data = [
    {
      userID: 'Mohsin 5050',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Pending',
        backgroundColor: '#F1AD3D80',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5051',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5052',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5052',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5052',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5052',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
    {
      userID: 'Mohsin 5052',
      name: 'Mohsin zulfqar',
      address: 'H#220, DHA phase 7 lahore',
      phoneNumber: '+92 300 11 22 33 3',
      amount: '$22000',
      carDetail: 'Honda Civic 2023 200000KM',
      bidStatus: {
        text: 'Accepted ',
        backgroundColor: '#4E9C0B66',
      },
      moreDetails: 'More details',
      imageSrc: './mdi_delete.svg',
    },
  ];

  const headerCellStyle1 = {
    background: '#F5F5F5',
    color: '#1F1F1F',
    borderBottom: 'transparent !important',
    fontWeight: '500',
    borderRadius: '8px 0  0 8px',
  };
  const headerCellStyle = {
    background: '#F5F5F5',
    borderBottom: 'transparent !important',
    color: '#1F1F1F',
    fontWeight: '500',
  };
  const headerCellStylelast = {
    background: '#F5F5F5',
    color: '#1F1F1F',
    borderBottom: 'transparent !important',
    fontWeight: '500',
    borderRadius: ' 0 8px 8px 0',
  };
  const headertable = {
    background: '#FFFFFF',
    padding: '40px',
    border: '1px solid #ffff',
  };

  const tablerow = {
    color: '#000000',
    fontSize: '14px',
    fontWeight: '400',
  };

  return (
    <div>
      <p
        className='p-4'
        style={{ color: '#4C4C4C', fontSize: '32px', fontWeight: '500' }}
      >
        Dashboard
      </p>
      <div className='bg-white p-4'>
        <Table responsive style={headertable}>
          <thead style={headertable}>
            <tr className='tbody,td,tfoot,th,thead,tr' style={headertable}>
              <th className='m-3' style={headerCellStyle1}>
                User ID
              </th>
              <th style={headerCellStyle}>Name seller</th>
              <th style={headerCellStyle}>Address</th>
              <th style={headerCellStyle}>Phone Number</th>
              <th style={headerCellStyle}>Amount</th>
              <th style={headerCellStyle}>Car detail</th>
              <th style={headerCellStyle}>Bid status</th>
              <th style={headerCellStyle}></th>
              <th style={headerCellStylelast}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className='border-bottom'>
                <td>
                  <p
                    className=' my-0 py-1 text-nowrap '
                    style={{
                      color: '#4E9C0B',
                      fontSize: '14px',
                      fontWeight: '400',
                    }}
                  >
                    {item.userID}
                  </p>
                </td>
                <td>
                  <p className=' my-0 py-1 text-nowrap ' style={tablerow}>
                    {item.name}
                  </p>
                </td>
                <td>
                  {' '}
                  <p className=' my-0 py-1 text-nowrap ' style={tablerow}>
                    {item.address}
                  </p>
                </td>
                <td>
                  {' '}
                  <p className=' my-0 py-1 text-nowrap ' style={tablerow}>
                    {item.phoneNumber}
                  </p>
                </td>
                <td>
                  {' '}
                  <p className=' my-0 py-1 text-nowrap ' style={tablerow}>
                    {item.amount}
                  </p>
                </td>
                <td>
                  {' '}
                  <p className=' my-0 py-1' style={tablerow}>
                    {item.carDetail}
                  </p>
                </td>
                <td>
                  <p className=' my-0 py-1 text-nowrap '>
                    <button
                      className='border-0 px-2 py-1'
                      style={{
                        backgroundColor: item.bidStatus.backgroundColor,
                        color: '#000000',
                        borderRadius: '6px',
                        fontWeight: '500',
                      }}
                    >
                      {item.bidStatus.text}
                    </button>
                  </p>
                </td>
                <td>
                  {' '}
                  <p
                    className=' my-0 py-1 text-nowrap '
                    style={{
                      color: '#4E9C0B',
                    }}
                  >
                    {item.moreDetails}
                  </p>
                </td>
                <td>
                  <p className=' my-0 py-1 text-nowrap '>
                    {' '}
                    <img src={item.imageSrc} alt='delete icon' />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MainPage;
