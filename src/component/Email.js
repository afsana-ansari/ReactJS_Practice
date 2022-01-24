import React from "react";

const Email=( props )=>{
    const { emailInfo } = props;
    const {id, from, to, subject, content} = emailInfo;
    return(
        <div key={ `email-${ id }`}>
         <div>{`from: ${from}`}</div>
         <div>{`to: ${to}`}</div>
         <div>{`subject: ${subject}`}</div>
         <div>{`content: ${content}`}</div>
        </div>
    );
}

export default Email;