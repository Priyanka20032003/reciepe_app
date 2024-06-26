import React from 'react'
import CustomImage from './CustomImage'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
        <CustomImage imageSrc={recipe.image} pt="65%"/>
        <div className='recipe-card-info'>
            <img className='author-img' src={recipe.authorImg} alt="" />
            <p className='recipe-title'>{recipe.title}</p>
            <p className='recipe-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a className='view-btn' href="#">View Recipe</a>

        </div>

      
    </div>
  )
}

export default RecipeCard
