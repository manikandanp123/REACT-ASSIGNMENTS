// import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    // console.log(employee);
return(
  <div className="container">

    <div><img src={employee.profileImg} alt="photo" /></div>
    <div className="inner">
    <h1>{employee.name}</h1>
    <p>Location</p>
    <p className='bright'>{employee.location}</p>
    <p>Blood Group</p>
    <p className='bright'>{employee.bloodGroup}</p>
    <p>Age</p>
    <p className='bright'>{employee.age}</p>
    </div>

</div>
)
}



export default App;
