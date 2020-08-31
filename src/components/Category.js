import React, { useState, useEffect } from 'react';
import Services from './Services';

function Category(props) {
  const {caption, id, allServices} = props;
  const [isOpen, setState] = useState();
  const [isVisible, setVisibility] = useState();

  const handleOpenSections = (shouldBeOpen) => {
    if (shouldBeOpen === id && !isOpen) {
      setState(true);
      setVisibility(null)
    } else {
      setState(false);
      setVisibility("hidden")
    }
  };

  const handleStateChange = () => {
    const data = {
      isOpen: !isOpen,
      targetId: id
    }
    props.handleCategoryClick(data);
  };

  const handleClick = () => {
    handleStateChange();
    handleOpenSections(props.shouldBeOpen);
  };

  useEffect(()=>{
    handleOpenSections(props.shouldBeOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.shouldBeOpen]);

  return (
    <div>
      <h3 onClick={()=>handleClick()}>{caption}</h3>
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