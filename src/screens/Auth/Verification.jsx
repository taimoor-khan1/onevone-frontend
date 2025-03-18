import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import loginScreenBg from '../../assets/images/login-screen-bg.png';

import userIcon from '../../assets/images/user-icon.png';
import emailIcon from '../../assets/images/email-icon.png';
import passwordIcon from '../../assets/images/password-icon.png';

import DefaultLayout from '../../components/DefaultLayout';
import GlassBox from '../../components/GlassBox';
import { Link } from 'react-router-dom';
import FullScreenBG from '../../components/FullScreenBG';

const Verification = () => {
  return (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-9'>
          <GlassBox>
            <h2 className='login-title'>Verification</h2>
            <form>
              
              <InputGroup className='mb-md-5 mb-4'>
                <InputGroup.Text>
                  <img src={emailIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control placeholder='Email Address' />
              </InputGroup>
              <InputGroup className='mb-2'>
                <InputGroup.Text>
                  <img src={passwordIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control maxLength={6} type='password' placeholder='Code' />
              </InputGroup>

              <div className='col-md-12'>
                <button type='button' className='login-btn'>
                Verification
                </button>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default Verification;
