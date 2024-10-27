// src/App.jsx
import { useState } from 'react';
import './App.css';
import UserForm from '../components/UserForm.jsx'; // Import the UserForm component
import backgroundImage from './assets/background.jpg'; // Adjust the path


function App() {
 const [count, setCount] = useState(0);
 const appStyle = {
   backgroundImage: `url(${backgroundImage})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   height: '100vh',
   width: '100vw',


}; 
   return (
   <>
     <div style={appStyle}>
            <h1 style={{ color: 'rgb(204, 0, 51)' }}>RU Friends</h1>
     <div className="card">
       <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
       </button>
     </div>
     
     <UserForm /> {/* Add UserForm here */}
     </div>
   </>
 );
}


export default App;
