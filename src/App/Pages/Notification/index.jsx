import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideNavBar/SideBar.jsx';
import NaveBar from '../../Components/Navbar/index.jsx';
import MainPage from './Components/mainPage.jsx';
export const index = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <NaveBar />
        </Row>
        <Row>
          <Col
            md={2}
            xs={2}
            className=' text-center p-0'
            style={{ backgroundColor: '#FFFFFF ', height: '200vh' }}
          >
            <SideBar activeeTab='Notification' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row className='p-5'>
              <Col md={12}>
                <Row className='mt-4 mt-md-2'>
                  <div>
                    <p
                      style={{
                        color: '#4C4C4C',
                        fontSize: '20px',
                        fontWeight: '500',
                      }}
                    >
                      Notification
                    </p>
                  </div>

                  <div className='bg-white w-100'>
                    <MainPage />
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
