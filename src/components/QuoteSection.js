import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteSection = () => {
  return (
    <div className='section quote'>
        <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/> Food is everythiong we are. It's an extension of nationalist feeling, ethinic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.</p>
        <p className='quote-author'>Antony Bourdan</p>
      
    </div>
  )
}

export default QuoteSection
