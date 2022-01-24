import React from 'react';
import EmailItem from './EmailItem';

const EmailListPanel = ( props ) => {
  const { emailList, onClick } = props;
  return (
    <>
       {
           emailList && emailList.map( ({ id, subject, from, to, type}) => {
               const name = type === 'inbox' ? from : to;
               return <div onClick={() => onClick(id)}><EmailItem name={ name } subject={ subject } id={ id }/></div>
           })
       }
    </>
  );
}

export default EmailListPanel;
