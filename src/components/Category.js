import React from 'react';
import Services from './Services';

function Category(props) {
  const {caption, id, allServices} = props;
  return (
    <div>
      <h3>{caption}</h3>
        <Services
          paidServices = {allServices.filter(service => (service.serviceCategoryId === id && !service.serviceFree))}
          freeServices = {allServices.filter(service => (service.serviceCategoryId === id && service.serviceFree))}
        />
    </div>
  )
}

export default Category;