import React, { memo } from 'react'

interface Props {
    lableOne:string;
    lableTwo:string;
    placeholderOne:string;
    placeholderTwo:string
}
const ComponentMultiInput = ({lableOne,lableTwo,placeholderOne,placeholderTwo}:Props) => {
  return (
    <div className='row multi-input-box p-2'>
        <div className='col-3 border-right'>
            <label className='label-text'>{lableOne}</label>
            <input className='input-text' type="text" placeholder={placeholderOne}/>
        </div>
        <div className='col-9 px-2'>
            <label className='label-text'>{lableTwo}</label>
            <input className='input-text' type="text" placeholder={placeholderTwo}/>
        </div>

    </div>
  )
}

export default memo(ComponentMultiInput)