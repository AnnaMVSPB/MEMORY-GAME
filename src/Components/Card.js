import React from 'react';
import { useDispatch } from 'react-redux';

function Card({ el }) {
  const dispatch = useDispatch();

  function handleClick(el) {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: el
    })

  }

  return (

    <div className='div2'>

      {
        el.st 
          ? <div className="square">{el.img}</div> 
          : <div onClick={() => handleClick(el)} className='sguareFalse'></div>
      }
    </div>
 
  );

 

}

export default Card;
