import React, { Component, useState } from "react";
import Show from "./Show";
import { v4 } from 'uuid'

function PopMenu() {

  const [typeValue, setType] = useState("");
  const [items, setItems] = useState([]);
  console.log(items)

  const deleteItem = (e) => {
    console.log(e)
    setItems(items.filter(item => item.id !== e.id))
  }

  const handleClick = () => {
    setItems(
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
    <div className="todoListMain">
      <div className="header">
        <input
          value={typeValue}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <button onClick={handleClick} >ADD</button>
      </div>
      <Show
        items={items}
        deleteItem={deleteItem}
      />
    </div>
  );
}
export default PopMenu