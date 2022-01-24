import React from 'react';

const EmailItem = ( props ) => {
  const { name, subject, id } = props;
  return (
    <div key={ `email-row-${ id }` }>
      <div>{ name }</div>
      <div>{ subject }</div>
    </div>
  );
}

export default EmailItem;
