import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrimaryContent from './Components/PrimaryContent/PrimaryContent';
import People from './Components/PeopleComponent/PeopleComponent';
import User from './Components/UserComponent/UserComponent';
import './App.scss';
function App() {

  //const [info, setInfo] = useState(null);
  var info;

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(function (response) {
      return response.json();
    }).then(function (MyInfo) {
      console.log(MyInfo);
      localStorage.setItem(JSON.stringify(MyInfo),'info');
    },)
  })

  console.log(info);
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

export default App;
