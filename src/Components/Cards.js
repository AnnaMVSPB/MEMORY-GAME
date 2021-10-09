import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';

function Cards() {
  const scroll = useSelector((state) => state.Scroll)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'DOWNLOAD_PAGE',
    })
  }, [dispatch]);

  return (
    <div className='div'>
      {scroll.map((el, i) => <Card el={el} key={`Cards-${i}`} />)}
    </div>
  )
}

export default Cards;

