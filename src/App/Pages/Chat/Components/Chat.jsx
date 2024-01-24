import { React, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
const Message = ({ message, time, sent }) => {
  return (
    <Row>
      <div
        className={`w-${
          sent ? '100' : '75'
        } d-flex align-items-center justify-content-${sent ? 'end' : 'start'}`}
      >
        <div>
          <img src='./PNG/UserImage.png' alt='' />
        </div>

        <div
          className={`ms-3 d-flex flex-column justify-content-start align-items-center`}
        >
          <div
            className='p-2 rounded-3 '
            style={{ backgroundColor: '#EBEBEB', width: 'auto' }}
          >
            <p
              style={{
                color: '#000000',
                fontSize: '14px',
                textWrap: 'nowrap',
                fontWeight: '400',
              }}
            >
              {message}
            </p>
          </div>
          <div>
            <p
              style={{
                color: '#777777',
                fontSize: '14px',
                textWrap: 'nowrap',
                fontWeight: '400',
              }}
            >
              {time}
            </p>
          </div>
        </div>
      </div>
    </Row>
  );
};
const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const users = [
    { id: 1, name: 'Mohsin' },
    { id: 2, name: 'Anas' },
    // Add more users as needed
  ];

  const [messages, setMessages] = useState({
    1: {
      received: [{ message: 'hello boy', time: '5 hours ago' }],
      sent: [{ message: 'i am fine how are you', time: '5 hours ago' }],
    },
    1: {
      received: [{ message: 'hello boy', time: '5 hours ago' }],
      sent: [{ message: 'i am fine how are you', time: '5 hours ago' }],
    },
    // Add more messages for other users as needed
  });

  const handleUserClick = userId => {
    setSelectedUser(userId);
  };
  const handleInputChange = e => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { message: inputMessage, time: 'Now' };

    setMessages(prevMessages => ({
      ...prevMessages,
      [selectedUser]: {
        ...prevMessages[selectedUser],
        sent: [...prevMessages[selectedUser].sent, newMessage],
      },
    }));

    setInputMessage('');
  };
  return (
    <>
      <p
        className='p-4'
        style={{ color: '#4C4C4C', fontSize: '32px', fontWeight: '500' }}
      >
        Dashboard
      </p>
      <Row className='p-4'>
        <Col
          xl={3}
          lg={3}
          md={3}
          className='bg-white'
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <Row className='p-2'>
            <div className='d-flex justify-content-between align-items-center border rounded-2 w-100 p-2'>
              <input type='search' className='w-100 bg-transparent ' />
              <img src='./searchicon.svg' alt='' />
            </div>
          </Row>
          {users.map(user => (
            <Row
              key={user.id}
              className={`d-flex justify-content-between align-item-center my-3 ${
                selectedUser === user.id ? 'bg-light' : ''
              }`}
              onClick={() => handleUserClick(user.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className='d-flex justify-content-between align-item-center my-3'>
                <div>
                  <img src='./PNG/UserImage.png' alt='' />
                </div>
                <div className='ms-2'>
                  <p
                    style={{
                      color: '#000000',
                      fontSize: '12px',
                      textWrap: 'nowrap',
                      fontWeight: '400',
                    }}
                  >
                    {user.name}
                  </p>
                  <p
                    style={{
                      color: '#777777',
                      fontSize: '12px',
                      textWrap: 'nowrap',
                    }}
                  >
                    Ok i will be there tomorrow{' '}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: '#000000',
                      fontSize: '12px',
                      fontWeight: '400',
                      textWrap: 'nowrap',
                    }}
                  >
                    02:09 PM
                  </p>
                </div>
              </div>
            </Row>
          ))}
          {/* <Row>
            <div className='d-flex justify-content-between align-item-center my-3'>
              <div>
                <img src='./PNG/UserImage.png' alt='' />
              </div>
              <div className='ms-2'>
                <p
                  style={{
                    color: '#000000',
                    fontSize: '12px',
                    textWrap: 'nowrap',
                    fontWeight: '400',
                  }}
                >
                  Mohsin
                </p>
                <p
                  style={{
                    color: '#777777',
                    fontSize: '12px',
                    textWrap: 'nowrap',
                  }}
                >
                  Ok i will be there tomorrow{' '}
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: '#000000',
                    fontSize: '12px',
                    fontWeight: '400',
                    textWrap: 'nowrap',
                  }}
                >
                  02:09 PM
                </p>
              </div>
            </div>
          </Row> */}
        </Col>
        <Col
          xl={9}
          lg={9}
          md={9}
          className='bg-white'
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <Row className='border-bottom'>
            <div className='d-flex ms-2 align-item-center my-3 w-50'>
              <div>
                <img src='./PNG/UserImage.png' alt='' />
              </div>
              <div className='ms-2'>
                <p
                  style={{
                    color: '#000000',
                    fontSize: '12px',
                    textWrap: 'nowrap',
                    fontWeight: '400',
                  }}
                >
                  Mohsin
                </p>
                <p
                  style={{
                    color: '#777777',
                    fontSize: '12px',
                    textWrap: 'nowrap',
                  }}
                >
                  Last seen at 12:30AM
                </p>
              </div>
            </div>
          </Row>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <hr
                className='flex-grow-1 mx-4'
                style={{ borderColor: '#4C4C4C' }}
              />
              <p
                style={{
                  color: '#4E9C0B',
                  fontSize: '12px',
                  fontWeight: '400',
                }}
              >
                Today 2:05 PM
              </p>
              <hr
                className='flex-grow-1 mx-4'
                style={{ borderColor: '#4C4C4C' }}
              />
            </div>
          </Row>
          <Row>
            {selectedUser && (
              <>
                {/*  Receieved Message */}
                <Row>
                  {messages[selectedUser].received.map((msg, index) => (
                    <Message
                      key={index}
                      message={msg.message}
                      time={msg.time}
                      sent={false}
                    />
                  ))}
                </Row>
                {/* Sent Message */}
                <Row>
                  {messages[selectedUser].sent.map((msg, index) => (
                    <Message
                      key={index}
                      message={msg.message}
                      time={msg.time}
                      sent={true}
                    />
                  ))}
                </Row>
              </>
            )}
          </Row>
          <Row className='p-2 '>
            <div
              className='shadow  rounded-5 d-flex justify-content-between align-items-center p-2'
              style={{ backgroundColor: '#FAFAFA' }}
            >
              <input
                type='text'
                className='w-100 bg-transparent'
                placeholder='Type a message...'
                value={inputMessage}
                onChange={handleInputChange}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              />
              <img
                src='./sendmessageicon.svg'
                alt=''
                style={{ cursor: 'pointer' }}
                onClick={handleSendMessage}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
