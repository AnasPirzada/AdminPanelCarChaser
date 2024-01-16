import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SideBar = props =>
{
  const [ activeTab, setActiveTab ] = useState( props.activeeTab );
  const [ sidebarOpen, setSidebarOpen ] = useState( false );
  const [ ordersOpen, setOrdersOpen ] = useState( false );

  const handleTabClick = tab =>
  {
    setActiveTab( tab );
  };

  const toggleSidebar = () =>
  {
    setSidebarOpen( !sidebarOpen );
  };

  const toggleOrders = () =>
  {
    setOrdersOpen( !ordersOpen );
  };

  return (
    <>
      <div
        className='logo-img text-center py-4'
        style={ { backgroundColor: '#FFFFFF' } }
      >
        <img src='/logo.svg' className='mobilenone' alt='' />
        <img src='/favicon.svg' className='desktopnone' width='24px' alt='' />
      </div>

      <div className='text-center' style={ { backgroundColor: '#FFFFFF' } }>
        <Link to='/Dashboard'>
          <div
            className={ `d-flex align-items-center text-center justify-content-start sidebardiv ${ activeTab === 'Dashboard' ? 'sidebarctivetab' : ''
              }` }
            onClick={ () => handleTabClick( 'Dashboard' ) }
          >
            <p className='mb-0'>Dashboard</p>
          </div>
        </Link>
        <div
          className={ `d-flex align-items-center justify-content-start sidebardiv ${ activeTab === 'Approval' ? '' : ''
            }` }
          onClick={ () =>
          {
            handleTabClick( 'Approval' );
            toggleOrders();
          } }
        >
          <p className='my-0'>Approval</p>

          <img
            className={ `arrow ms-4 ${ ordersOpen ? 'open' : '' }` }
            src='/public/Sidebar Arrow.svg'
          />
        </div>

        { ordersOpen && (
          <div>
            <Link to='/Admin'>
              <div
                className={ `d-flex align-items-center justify-content-start sidebardiv ${ activeTab === 'Admin' ? 'sidebarctivetab' : ''
                  }` }
                onClick={ () => handleTabClick( 'Admin' ) }
              >
                <p>Admin</p>
              </div>
            </Link>
            <Link to='/Dealer'>
              <div
                className={ `d-flex align-items-center justify-content-start sidebardiv ${ activeTab === 'Dealer' ? 'sidebarctivetab' : ''
                  }` }
                onClick={ () => handleTabClick( 'Dealer' ) }
              >
                <p>Dealer</p>
              </div>
            </Link>
          </div>
        ) }

        <Link to='/Chat'>
          <div
            className={ `d-flex align-items-center justify-content-start sidebardiv ${ activeTab === 'Chat' ? 'sidebarctivetab' : ''
              }` }
            onClick={ () => handleTabClick( 'Chat' ) }
          >
            <p>Chat</p>
          </div>
        </Link>
        {/* <Link to='/Dealer'>
          <div
            className={`d-flex align-items-center justify-content-start sidebardiv ${
              activeTab === 'Dealer' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Dealer')}
          >
            <p>Dealer</p>
          </div>
        </Link> */}
        <Link to='/Notification'>
          <div
            className={ `d-flex align-items-center justify-content-start sidebardiv ${ activeTab === 'Notification' ? 'sidebarctivetab' : ''
              }` }
            onClick={ () => handleTabClick( 'Notification' ) }
          >
            <p>Notification</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
