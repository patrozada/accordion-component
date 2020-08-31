import React, { useState, useEffect, useRef } from 'react';
import Services from './Services';

function Category(props) {
  const {caption, id, allServices} = props;
  const [isOpen, setState] = useState();
  const [isVisible, setVisibility] = useState();
  const handlestateChange = () => {
    setState(!isOpen);
  }
  const changeClassName = () => {
    setVisibility(isOpen ? "hidden" : null)
  }
  const OpenRef = useRef("2");
  const updateRef = (currentId) => {
    OpenRef.current = currentId
  }

  console.log("is: " + OpenRef.current + " isOpen: " + isOpen + " isVisible:" + isVisible)
  useEffect(()=>{
    setState(props.id === OpenRef.current ? true : false);
    setVisibility(props.id === OpenRef.current ? null : "hidden");
    updateRef(props.id);
  }, [props.id]);

  return (
    <div>
      <h3 onClick={()=>(handlestateChange(), changeClassName())}>{caption}</h3>
      <div className={isVisible}>
        <Services
          paidServices = {allServices.filter(service => (service.serviceCategoryId === id && !service.serviceFree))}
          freeServices = {allServices.filter(service => (service.serviceCategoryId === id && service.serviceFree))}
        />
      </div>
    </div>
  )
}

export default Category;