import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fooditems from './Components/Fooditems'
import 'bootstrap/dist/css/bootstrap.min.css';
import Feedback from 'react-bootstrap/esm/Feedback'
import Feedbacks from './Components/Feedbacks'
import Customers from './Components/Customers'
import Reservation from './Components/Reservation'
import Order from './Components/Order'
import Payments from './Components/Payments'

function App() {
  return (
    <div>
      <Order/>
    </div>
  );
}

export default App
