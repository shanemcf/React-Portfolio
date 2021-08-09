// import logo from './logo.svg';
// import React from 'react';
// import './App.css';

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

// export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
render() {
return (
<div className="App">
<Header resumeData={resumeData}/>
<About resumeData={resumeData}/>
<Resume resumeData={resumeData}/>
<Portfolio resumeData={resumeData}/>
{/* <Testimonials resumeData={resumeData}/> */}
<Contact resumeData={resumeData}/>
<Footer resumeData={resumeData}/>
</div>
);
}
}
export default App;
