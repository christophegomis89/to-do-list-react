import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ToDo.css';
import {FaListAlt, FaCheckSquare,FaPlusSquare, FaTrash} from 'react-icons/fa';


class Main extends React.Component {

  render() {
    return(
      <App />
    )
  }
}
ReactDOM.render(<App/>, 
 
document.getElementById("root")
);