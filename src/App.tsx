import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  //All user list
  const users: { name: string; id: number; guraduate: boolean; }[] = [
    { name: "gozu", id: 1, guraduate: false },
    { name: "inui", id: 2, guraduate: false },
    { name: "tsukky", id: 3, guraduate: false },
    { name: "higu", id: 4, guraduate: false },
    { name: "naoyashi", id: 5, guraduate: false },
    { name: "shusuke", id: 6, guraduate: true },
    { name: "synth", id: 7, guraduate: true },
    { name: "hamachu", id: 8, guraduate: true },
    { name: "bekku", id: 9, guraduate: true },
    { name: "akiho", id: 10, guraduate: true },
  ]
  //Undergraduate user list
  let undergraduates = users.filter((user) => user.guraduate === false);
  //Graduate user list
  let graduates = users.filter((user) => user.guraduate === true);


  let b_users: string[] = ["gozu", "inui", "tsukky", "higu", "naoyasi"]
  let m_users: string[] = ["akiho", "bekku", "shusuke", "synth", "hamachu"]
  const [group_num, setText] = useState(1);

  const fn = (arr: any, num: number) => {
    let tmpArr;
    let group = []
    let div = Math.ceil(arr.length / num)

    while (arr.length > 0) {
      tmpArr = arr.splice(0, div);
      let n = ""
      for (let i of tmpArr) {
        n = n + i.name + ","
      }
      group.push(<li>{n}</li>)
    }
    console.log(group);

    return group
  }

  function shuffle(array: any): any[] {
    let obj: any = {};

    for (let i = 0; i < array.length; i++) {

      let rand = Math.floor(Math.random() * 10000000);

      if (!obj[rand]) {
        obj[rand] = array[i];
      } else {
        i--;
      }
    }
    return Object.values(obj);
  }

  let b_group: any = [];
  let m_group: any = [];
  if (true) {
    graduates = shuffle(graduates)
    undergraduates = shuffle(undergraduates)
    b_group = fn(undergraduates, group_num)
    m_group = fn(graduates, group_num)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input
          value={group_num}
          onChange={(event) => setText(Number(event.target.value))}
        />
        <ul>{b_group}</ul>

        <ul>{m_group}</ul>


      </header>
    </div>
  );
}

export default App;
