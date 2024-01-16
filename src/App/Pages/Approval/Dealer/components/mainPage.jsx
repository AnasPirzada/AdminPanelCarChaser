import React from 'react';
import Table from 'react-bootstrap/Table';

export const mainPage = () =>
{
  const data = [
    {
      DealerID: 'Mohsin 5050',
      Dealername: 'Mohsin zulfqar',
      DealerNumber: '090078601',
      Emailaddress: 'anaspirzadaiub@gmail.com',
      phoneNumber: '+92 300 11 22 33 3',
      Approvebtn: 'Approve',
      Denybtn: 'Deny',
    },
    {
      DealerID: 'Mohsin 5050',
      Dealername: 'Mohsin zulfqar',
      DealerNumber: '090078601',
      Emailaddress: 'anaspirzadaiub@gmail.com',
      phoneNumber: '+92 300 11 22 33 3',
      Approvebtn: 'Approve',
      Denybtn: 'Deny',
    },
    {
      DealerID: 'Mohsin 5050',
      Dealername: 'Mohsin zulfqar',
      DealerNumber: '090078601',
      Emailaddress: 'anaspirzadaiub@gmail.com',
      phoneNumber: '+92 300 11 22 33 3',
      Approvebtn: 'Approve',
      Denybtn: 'Deny',
    },
    {
      DealerID: 'Mohsin 5050',
      Dealername: 'Mohsin zulfqar',
      DealerNumber: '090078601',
      Emailaddress: 'anaspirzadaiub@gmail.com',
      phoneNumber: '+92 300 11 22 33 3',
      Approvebtn: 'Approve',
      Denybtn: 'Deny',
    },
    {
      DealerID: 'Mohsin 5050',
      Dealername: 'Mohsin zulfqar',
      DealerNumber: '090078601',
      Emailaddress: 'anaspirzadaiub@gmail.com',
      phoneNumber: '+92 300 11 22 33 3',
      Approvebtn: 'Approve',
      Denybtn: 'Deny',
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
        style={ { color: '#4C4C4C', fontSize: '32px', fontWeight: '500' } }
      >
        Dealer
      </p>
      <div className='bg-white p-4'>
        <Table responsive style={ headertable }>
          <thead style={ headertable }>
            <tr className='tbody,td,tfoot,th,thead,tr' style={ headertable }>
              <th className='m-3' style={ headerCellStyle1 }>
                Dealer ID
              </th>
              <th style={ headerCellStyle }>Dealership Name</th>
              <th style={ headerCellStyle }>Dealership Number</th>
              <th style={ headerCellStyle }>Email</th>
              <th style={ headerCellStyle }>Phone Number</th>
              <th style={ headerCellStyle }></th>
              <th style={ headerCellStyle }></th>
              <th style={ headerCellStyle }></th>
              <th style={ headerCellStylelast }></th>
              <th style={ headerCellStylelast }></th>
            </tr>
          </thead>
          <tbody>
            { data.map( ( item, index ) => (
              <tr key={ index } className='border-bottom '>
                <td>
                  <p
                    className=' my-0 py-1 text-nowrap '
                    style={ {
                      color: '#4E9C0B',
                      fontSize: '14px',
                      fontWeight: '400',
                    } }
                  >
                    { item.DealerID }
                  </p>
                </td>
                <td>
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    { item.Dealername }
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>{ item.DealerNumber }</p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    { item.Emailaddress }
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    { item.phoneNumber }
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    <button
                      className='border-0 p-2 text-center  rounded-3  text-white'
                      style={ { backgroundColor: '#4E9C0B', width: '96px', height: '38px' } }
                    >
                      <img src='./ic_round-done.svg' alt='' className='me-2 ' />
                      { item.Approvebtn }

                    </button>
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    <button
                      className='border-0 rounded-3 p-2 text-center text-white'
                      style={ { backgroundColor: '#FF3737', width: '96px', height: '38px' } }
                    >
                      <img src='./cross.svg' alt='' className='me-2 ' />

                      { item.Denybtn }

                    </button>
                  </p>
                </td>
                <td>
                  { ' ' }
                  <p className=' my-0 py-1 text-nowrap ' style={ tablerow }>
                    <img src='./mdi_delete.svg' alt='' />
                  </p>
                </td>
              </tr>
            ) ) }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default mainPage;
