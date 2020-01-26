import React from 'react';
import logo from './logo.svg';
import './App.css';


function Patient(){
  
  
}
  render() {
    return (
      <Patients patients={this.state.patients} />
    )
  }

  state = {
      patients: []
  };

  componentDidMount() {
    fetch('https://virtserver.swaggerhub.com/TactioHealth/tactio-clinician-api/1.1.5/Patient')
    .then(res => res.json())
    .then((data) => {
      this.setState({patients: data.entry})
    })
    .catch(console.log)
  }
}

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default DoctorHub