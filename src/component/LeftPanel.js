import React from 'react';

const LeftPanel = ( props ) => {
  const { onClick } = props;
  return (
    <>
        <button onClick={ () => onClick('inbox') }> Inbox </button>
        <button onClick={ () => onClick('sent') }> Sent </button>
    </>
  );
}

export default LeftPanel;
