import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Home() {
  const {toggle} = useSelector((state) => state)
  console.log(toggle);
  return (
    <div className='container'>
      Home
    </div>
  )
}

export default Home