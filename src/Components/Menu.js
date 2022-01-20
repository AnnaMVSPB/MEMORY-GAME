import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards';

function Menu() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards)
  function menuCard(number) {
    dispatch({
      type: 'CHOICE_QUANTITY',
      payload: number
    })
  }
  return (
    <>
      {
        cards.length
          ?
          <Cards />
          :
          <div className='cards flex'>
            <div className='menu flex' onClick={() => menuCard(20)}>20 Card</div>
            <div className='menu flex' onClick={() => menuCard(30)}>30 Card</div>
            <div className='menu flex' onClick={() => menuCard(40)}>40 Card</div>
          </div>
      }


    </>
  );
}

export default Menu;
