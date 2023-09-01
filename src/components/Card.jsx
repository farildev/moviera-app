import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Card({detail , type}) {
  const dispatch = useDispatch();
  const [toggle , setToggle] = useState(false);
  const basket = useSelector((state) => state.basket)
  useEffect(()=>{
    let check = basket.find((e) => e.id === detail.id)
    if(check){
      setToggle(true)
    }
    else{
      setToggle(false);
    }
  },[basket])
  const addToCard = (id) => {
    let check = basket.filter((e) => e.id === id)
    if(check.length === 0){
      dispatch({ type:"ADD" , payload : id })
    }
  }
  const removeFromCard = (id) =>{
    dispatch({type : "DEL" , payload : id})
  }
  return (
    <div className="card p-4 gap-3">
    <img className="card-img-top" style={{width : "200px", height : "auto"}} src={detail?.image} alt=""/>
    <div className="card-body">
      <h5 className="card-title">{detail?.title}</h5>
      <p className="card-text">{detail?.description}</p>
      {
        !toggle ?  (
          <button className="btn btn-primary" onClick={()=>addToCard(detail.id)}>Add</button>
        )
          :
        (<button className="btn btn-danger" onClick={() => removeFromCard(detail.id)}>Remove</button>)
      }
    </div> 
  </div>
  )
}

export default Card;