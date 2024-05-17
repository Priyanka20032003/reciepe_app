import React from 'react'


const CustomImage = ({imageSrc,pt}) => {
  return (
      <div className='custom-image' style={{ paddingTop: pt }}>
          <img src={imageSrc}></img>
      </div>
  )
}

export default CustomImage

