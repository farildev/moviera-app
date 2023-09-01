import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';

function Basket() {
  const dispatch = useDispatch();
  const basketItem = useSelector((state) => state.basket);
  return (
    <div className='container py-4'>
      <div className="row">
        {
          basketItem.map((product , key) => (
            <div className="col-xl-4 col-lg-6 mt-4" key={key}>
              <Card detail={product} type='basket'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Basket