import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
    <>
    <div className='main-content'>
        {menuData.map((curElem) => {
            return(
                <>
                    <div className='card'>
                        <h4>{curElem.name}</h4>
                        <div className='images'>
                        <img src={curElem.image} alt='image' width="350"/>
                        </div>
                        <p>{curElem.description}</p>
                        <button type='submit'>Order Now</button>
                    </div>
                </>
            );
        })}
        </div>
    </>
  )
}

export default MenuCard
