import React from 'react';
import Card from '../components/Card';
import { useSelector , useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const basket = useSelector((state) => state.basket);
  console.log(basket);
  return (
    <div className='container py-4'>
      <div className="row">
        {
          products.map((product , key) => (
            <div className="col-4" key={key}>
              <Card detail={product}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;