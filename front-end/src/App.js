import './App.css';
import UserInput from './components/UserInput';
import { React, Component } from 'react';

class App extends Component {
  render() { 
    return (  
        <div className="container">
          <div className="row">
            <div className="col-12">
              <UserInput/>
            </div>
          </div>
        </div>

    );
  }
}
 

export default App;
