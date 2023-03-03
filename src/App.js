import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Result from './components/ResultsContainer/Results';
import SearchBox from './components/SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator');

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [text, setText] = useState([]);

  const handleChange = (userText) => {
    setText(userText.length > 0 ? name(userText) : []);
    setHeaderExpanded(!userText);
  };
  return (
    <div>
      <Header headerExpanded={headerExpanded} />
      <SearchBox onInputChange={handleChange} />
      <Result suggestedNames={text} />
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       headerText: 'Name It!',
//       headerExpanded: true,
//     };
//   }

//   handleChange = (userText) => {
//     this.setState({ headerExpanded: !userText });
//   };

//   render() {
//     return (
//       <div>
//         <Header
//           headerExpanded={this.state.headerExpanded}
//           headerTitle={this.state.headerText}
//         />
//         <SearchBox onInputChange={this.handleChange} />
//       </div>
//     );
//   }
// }
