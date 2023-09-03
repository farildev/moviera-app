import React from 'react';
import Card from '../components/Card';
import { useSelector , useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const basket = useSelector((state) => state.basket);

  return (
    <div className='container py-4'>
      <div className="row">
        {
          products.map((product , key) => (
            <div className="col-xl-4 col-lg-6 mt-4" key={key}>
              <Card detail={product} type="products"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;