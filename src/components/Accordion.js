import React, { useState } from "react";
import PropTypes from 'prop-types';
import Category from './Category';

const Accordion  = (props) => {
  const [shouldBeOpen, setOpen] = useState("2")
  const handleCategoryClick = (data) => {
    setOpen(data.targetId)
  };

  const {allCategories, allServices} = props;

  return (
    <div>
      Servicios disponibles
      <ul>
        {allCategories.map(category => (
          <li key={category.Id}>
            <Category
              id = {category.Id}
              caption = {category.Caption}
              allServices = {allServices}
              handleCategoryClick = {handleCategoryClick}
              shouldBeOpen = {shouldBeOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
  
}
export default Accordion;

Accordion.propTypes = {
  allCategories: PropTypes.arrayOf(PropTypes.shape({
    Caption: String,
    Id: String
  })),
  allServices: PropTypes.arrayOf(PropTypes.shape({
    serviceCaption: String,
    serviceCategory: String,
    serviceFree: Boolean,
    serviceId: String
  }))
}