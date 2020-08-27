import React from "react";
import PropTypes from 'prop-types';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {allCategories, allServices} = this.props;
    return (
      <div>
        This is the accordion container
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