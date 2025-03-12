import React from 'react'
import Hero from "../Components/Hero/Hero";
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import CategoriesMain from "../Components/CategoriesMain/CategoriesMain";
import LatestCollection from '../Components/LatestCollections/LatestCollection';



// Main Page

const Women = () => {
  return (
    <>
    <div>
      <Hero />
      <CategoriesMain />
    </div>
    <div>
      {/* <LatestCollection /> */}
     
      <NewsLetter />
    </div>
    </>
  )
}

export default Women
