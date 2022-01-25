import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import { v4 } from 'uuid'
// import logo from "./logo.JPG";

function App() {
  const [typeValue, setType] = useState("");
  const [menuItems, setMenuItems] = useState(items);
  const deleteItem = (e) => {
    setMenuItems(items.filter(item => item.id !== e.id))
  }
  const handleClick = () => {
    setMenuItems(
      [...items,
      {
        id: v4(),
        memo: typeValue
      }
      ]
    )
    setType('')
  }

  return (
    <main>
      <section className="menu section">
      <div className="header">
        <input
          value={typeValue}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <button onClick={handleClick} >ADD</button>
      </div>
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>Popmenu</h2>
          <div className="underline"></div>
        </div>
        <Menu 
          items={menuItems} 
          deleteItem={deleteItem}
        />
      </section>
    </main>
  );
};

export default App;
