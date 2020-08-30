import React from "react";
import PropTypes from 'prop-types';
import Category from './Category';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {allCategories, allServices} = this.props;
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
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
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