import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
export const Login = () => {
  const [formData, setFromData] = useState({
    Email: '',
    Password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    setFromData(prev => {
      return { ...prev, [name]: value };
    });
    console.log(`Value of ${name}: ${value}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div
        className='loginbackground vh-100'
        style={{
          height: '100vh', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container className=' '>
          <Row className=' rounded-5 '>
            <Col
              md={6}
              className='d-none  d-md-flex align-item-center justify-content-center loginbackground rounded-start-5  shadow'
              style={{ height: '80vh' }}
            >
              <img
                className='login-img'
                src='./PNG/loop-cars-concept-collage 1.png'
                alt='My Image'
                style={{ objectFit: 'contain', height: 'auto' }}
              />
            </Col>
            <Col
              md={6}
              className=' d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow mobr0 mob100'
              style={{ height: '80vh' }}
            >
              {/* logo */}
              <img src='./ion_car-sport-outline.svg' alt='' />
              {/* heading */}
              <h1 className='  text-center fw-bold ' width='80%'>
                <span className='porange'>Car</span>{' '}
                <span className='pgreen'>Chaser</span>
              </h1>
              <h3
                className=' mt-2 mb-4 text-center '
                style={{ color: 'var(--primary-color)' }}
              >
                Sign In
              </h3>

              <div className='input-container rounded-5  shadow bg-light '>
                <img src='./fluent_mail-16-filled.svg' />
                <input
                  type='text'
                  name='Email'
                  value={formData.Email}
                  onChange={handleInput}
                  placeholder='Email'
                  className='bg-light'
                />
              </div>

              <div className='input-container rounded-5 mt-4  shadow bg-light '>
                <img src='./uim_lock-alt.svg' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='Password'
                  value={formData.Password}
                  onChange={handleInput}
                  placeholder='Password'
                  className='bg-light'
                />
                <div
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                >
                  <img src='./zondicons_view-show.svg' alt='' />
                </div>
              </div>

              <div className='text-end mt-2' style={{ width: '80%' }}></div>
              <Link to='/Dashboard' onClick={handleInput}>
                <button className='Signin-btn mt-3 '> Sign In </button>
              </Link>

              <p className=' mt-3'>
                I don't have an account?{' '}
                <Link to='/Dashboard' className=' text-decoration-none '>
                  {' '}
                  <span className='pgreen'>
                    {' '}
                    <b> Sign up</b>
                  </span>{' '}
                </Link>{' '}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Login;
