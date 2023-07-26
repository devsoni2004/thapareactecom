import React from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const { id, name, image, price, category } = curElem;

  return (
   <NavLink to={"/singleProduct/${id}"}></NavLink>
  )
}

export default Products