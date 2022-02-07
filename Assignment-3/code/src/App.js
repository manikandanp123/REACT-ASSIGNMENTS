import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow={
  name:"Mainkandan P",
  employeeId:123456,
  Appointment:"9:00 (06/03/2022)",
  email:"manimass@gmail.com",
  phone:+90983873468,
  image:'https://www.w3schools.com/howto/img_avatar.png'
}
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <header>
      <div className='header-top'>
      <p><b>{arrow.name}</b></p>
      <p>{arrow.employeeId}</p>
      </div>
      <button className='btn'>print</button>
    </header>
    <section className='customer-info'>
      <p><b>Appointment On:</b> {arrow.Appointment}</p>
      <p><b>Email :</b> {arrow.email}</p>
      <p><b>Phone :</b> {arrow.phone}</p>
    </section>
    <section className='order-info'>
      <div>
        <strong>Status</strong>
        <div className='order-info-block'>In Progress</div>
      </div>
      <div>
        <strong>Door</strong>
        <div className='order-info-block'>Mark</div>
      </div>
      <div>
        <strong>Time</strong>
        <div className='order-info-block'>10:00 (28/06/2022)</div>
      </div>
      
    </section>
    <section className='product-list'>
      <img src={arrow.image} alt="photo"/>
      <div className='para'>
      <h1>All is well</h1>
      <p>ikhdsuihuaeisehviaadfdlkbjflkfsdgjlbikjsfgdljbdjbik</p>
      </div>
    </section>
    </div>
  );
}

export default App;
