import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../Components/SideNavBar/SideBar.jsx';
import NaveBar from '../../Components/Navbar/index.jsx';
export const index = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row >
          <NaveBar />
        </Row>
        <Row>
          <Col
            md={2}
            xs={2}
            className=' text-center p-0'
            style={{ backgroundColor: '#FFFFFF ', height: '200vh' }}
          >
            <SideBar activeeTab='Dealer' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Col md={8}>
                <Row className='mt-4 mt-md-2'>Dealer</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
