import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://ondc-jatah.web.app/on_search');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      ONDC-JATAH App is working fine!
    </div>
  );
}

export default App;
