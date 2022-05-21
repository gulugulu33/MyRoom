import React, { memo } from 'react'
import TextComponent from '../../component/textComponent'
import './style.css'

const LeftPanel = memo(() => {
  return (
    <div className='left-panel'>
      <TextComponent></TextComponent>
    </div>
  )
})

export default LeftPanel