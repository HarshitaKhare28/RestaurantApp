import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) =>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  const uniqueList  = [
    ...new Set(Menu.map((curElem)=>{
    return curElem.category;
  }))
  ];
  
  console.log(uniqueList);
  return (
    <>
    <div className='navbar'>
      <button className='btn' onClick={() => filterItem("Breakfast")}>Breakfast</button>
      <button className='btn'onClick={() => filterItem("Lunch")}>Lunch</button>
      <button className='btn'onClick={() => filterItem("Snacks")}>Snacks</button>
      <button className='btn'onClick={() => filterItem("Dinner")}>Dinner</button>
      <button className='btn'onClick={() => setMenuData(Menu)}>All</button>
  </div>
      <MenuCard menuData={menuData}/>
     </>
  )
}

export default Restaurant
