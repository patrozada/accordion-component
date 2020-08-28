import React from 'react';

function Category(props) {
  const {caption, id} = props;
  return (
    <p >{caption}</p>
  )
}

export default Category;