import React, { useState, useEffect } from 'react';
import Services from './Services';

function Category(props) {
  const {caption, id, allServices} = props;
  const [isOpen, setState] = useState();
  const [isVisible, setVisibility] = useState();
  const [chevronPosition, setPosition] = useState("category__title--chevronup");

  const handleOpenSections = (shouldBeOpen) => {
    if (shouldBeOpen === id && !isOpen) {
      setState(true);
      setVisibility(null);
      setPosition("category__title--chevrondown")
    } else {
      setState(false);
      setVisibility("hidden");
      setPosition("category__title--chevronup")
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
    <React.Fragment>
      <div className="category__header" onClick={()=>handleClick()}>
        <h3 className="category__title">{caption}</h3>
        <p className={chevronPosition}>^</p>
      </div>
      <ul className={isVisible}>
        <Services
          paidServices = {allServices.filter(service => (service.serviceCategoryId === id && !service.serviceFree))}
          freeServices = {allServices.filter(service => (service.serviceCategoryId === id && service.serviceFree))}
        />
      </ul>
    </React.Fragment>
  )
}

export default Category;