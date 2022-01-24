import { useState } from 'react';
import './App.css';
import Email from './component/Email';
import EmailListPanel from './component/EmailListPanel';
import LeftPanel from './component/LeftPanel';
import { EmailData } from './mockData';


function App() {

  const [ emailList, setEmailList ] = useState([]);
  const [ selectedEmail, setSelectedEmail ] = useState({});

  const handleCategoryClick = ( categoryName ) => {
     setEmailList( EmailData[ categoryName ]);
  }

  const handleEmailItemClick = ( emailId ) => {
    const filteredEmail = emailList.filter( email => email.id === emailId );
    if( filteredEmail && filteredEmail.length){
      setSelectedEmail( filteredEmail[0]);
    }
  }

  return (
    <div className="App">
      <div className='leftPanel'>
        <LeftPanel onClick={ handleCategoryClick } />
      </div>
      <div className='centerPanel'>
        <EmailListPanel emailList={ emailList } onClick={ handleEmailItemClick }/>
      </div>
      <div className='rightPanel'>
        { selectedEmail.hasOwnProperty('id') && <Email emailInfo={ selectedEmail } /> }
      </div>
    </div>
  );
}

export default App;
