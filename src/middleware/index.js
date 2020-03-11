function navigation() {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(function (response) {
      return response.json();
    }).then(function (MyInfo) {
      localStorage.setItem(JSON.stringify(MyInfo),'Myinfo');
      localStorage.setItem('hello','hello');
}