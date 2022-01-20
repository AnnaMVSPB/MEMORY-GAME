import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';

function Cards() {
  const scroll = useSelector((state) => state.cards)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'DOWNLOAD_PAGE',
    })
  }, [dispatch]);

  return (
    <>
    <div className='counter'>Колличество ваших ходов: {counter}</div>
    <div className='cards flex'>
      {scroll.map((el, i) => <Card el={el} key={`Cards-${i}`} />)}
    </div>
    </>
  )
}

export default Cards;

