import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const PreviousSearches = () => {

    const searches = [
        'pizza','burger','cookies','juice','biriyani','salad','ice cream','soup','gobi','biscuits'
    ]
  return (
    <div>
        <div className='previous-searches section'>
        <h2>Previous Searches</h2>
        <div className='previous-searches-container'>
            {
                searches.map(
                    (search,index) =>(
                        <div style={{animationDelay:index * 0.1 +'s'}} key={index} className='search-item'>{search}</div>
                    )
                )
            }

        </div>
        <div className='search-box'>
            <input type="text"  placeholder='search ....'/>
            <button className='btn'>
                <FontAwesomeIcon icon={faSearch}/>
            </button>

        </div>
      </div>
      
    </div>
  )
}

export default PreviousSearches

