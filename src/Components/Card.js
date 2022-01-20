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
    <div>
      {
        el.st
          ? <div className="rear">{el.img}</div>
          : <div onClick={() => handleClick(el)} className='facial rear'></div>
      }
    </div>
    );
}

export default Card;
