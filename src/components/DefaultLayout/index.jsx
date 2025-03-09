import React from 'react';

const DefaultLayout = (props) => {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      {/* <div className='flex-grow-1'>
      </div> */}
      {props.children}
    </div>
  );
};

export default DefaultLayout;
