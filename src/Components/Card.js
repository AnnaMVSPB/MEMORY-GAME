import React from 'react';
import { useDispatch } from 'react-redux';

function Card({ el }) {
  const dispatch = useDispatch();
  // console.log(el.img)

  function handleClick(id) {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: id
    })

  }

  return (
    <div className='div2'>
      {
        el.st 
          ? <div className="square">{el.img} </div> 
          : <div onClick={() => handleClick(el.id)} className='sguareFalse'></div>
      }
    </div>
  );

 

}

export default Card;
