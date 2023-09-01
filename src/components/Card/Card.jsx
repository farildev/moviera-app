import React from 'react';
import { useDispatch } from 'react-redux';

function Card({detail}) {
  const dispatch = useDispatch();
  const addToCard = (id) => {
    dispatch({ type:"ADD" , payload : id })
  }
  return (
    <div className="card">
    <img className="card-img-top" src={detail?.image} alt=""/>
    <div className="card-body">
      <h5 className="card-title">{detail?.title}</h5>
      <p className="card-text">{detail?.description}</p>
      <button className="btn btn-primary" onClick={()=>addToCard(detail.id)}>Add Basket</button>
    </div> 
  </div>
  )
}

export default Card;