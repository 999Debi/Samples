import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [Data, setData] = useState({});
  const fetch = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/data`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }; // "proxy":"http://localhost:5000/"
  return (
    <div className="App">
      <button onClick={fetch}>Fetch Result</button>
      <div>{Data.msg}</div>
    </div>
  );
}

export default App;
