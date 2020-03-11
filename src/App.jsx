import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrimaryContent from './Components/PrimaryContent/PrimaryContent';
import People from './Components/PeopleComponent/PeopleComponent';
import User from './Components/UserComponent/UserComponent';
import './App.scss';
function App() {
  const [bool, setbool] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(function (response) {
      return response.json();
    }).then(function (MyInfo) {
      if (MyInfo !== undefined) setbool(true);
      console.log(MyInfo.Brastlewark)
      MyInfo = JSON.stringify(MyInfo.Brastlewark);
      localStorage.setItem('Myinfo',MyInfo);
    })
  },[])

  console.log(bool);
  if (bool) {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={PrimaryContent} />
          <Route path="/People" component={People} />
          <Route path="/User:id" component={User} />
        </div>
      </Router>
    );
  }
  else {
    return (
      <div>Loading</div>
    )
  }
}

export default App;
