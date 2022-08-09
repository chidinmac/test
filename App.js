import React,{useState} from 'react';
import './App.css';

function App() {
  const [testing, setTesting] = useState([
    {
      names:'test1',
      age: '1',
      size:'small'
    },
    {
      names:'test2',
      age: '2',
      size:'medium'
    },
    {
      names:'test3',
      age: '3',
      size:'large'
    },
  ])
  function testfunc(){
    const update={
      ID: 456,
      size: 'SMALL'
    }
    testing.map((each)=>{
      var checkkeys = Object.keys(each);
      console.log('checkkeys: ', checkkeys);
      var updatekeys = Object.keys(update);
      console.log('updatekeys: ', updatekeys);
      for (var i = 0; i < checkkeys.length; i++) {
        for (var j = 0; j <updatekeys.length; j++) {
          console.log('checkkeys[i: ', checkkeys[i])
          console.log('update[j]: ', updatekeys[j]);
          if (checkkeys[i] ===updatekeys[j]) {

            each.checkkeys[i] = update.checkkeys[i];
          }
        }
      }
    }

    )
    {console.log(testing)}
  }
  return (
    <div className="App">
      {console.log(testing)}
      {testfunc()}
    </div>
  );
}

export default App;
