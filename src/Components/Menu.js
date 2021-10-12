import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards';

function Menu() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards)
  function menuCard(nomer){
    dispatch({
      type: 'CHOICE_QUANTITY',
      payload: nomer
    })
  }
  return (
    <>
    {
      cards.length ? <Cards/>
      :
      <div className='div'>
      <div className='menu' onClick={()=>menuCard(10)}>10 Card</div>
      <div  className='menu' onClick={()=>menuCard(20)}>20 Card</div>
      <div className='menu' onClick={()=>menuCard(40)}>40 Card</div>
    </div>
    }
    
   
    </>
  );
}

export default Menu;
