import './App.css';
import Auth from './components/auth/Auth'
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import MovieIndex from './components/movies/MovieIndex';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  console.log('App:', sessionToken);

  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }


  /* 
  # useEffect()
  - Allows us to perform side effects in functional components.
  - Accepts two arguments
    -function
    -dependency
      -optional
      -Can denote a specific event to trigger
    
    EXAMPLES:
    useEffect(() => {
      Runs on every render
    });

    useEffect(() => {
      Runs only on the first render
    }, []);

    useEffect(() => {
        Runs on first render
        Runs any time any dependency changes
    }, [state]);
  */

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Auth updateToken={updateToken}/>}
        />
        <Route
          path="/movie"
          element={<MovieIndex token={sessionToken}/>}
        />
      </Routes>
      
    </div>
  );
}

export default App;
