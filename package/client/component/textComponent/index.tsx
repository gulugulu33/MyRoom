import React, { memo } from 'react'
import { useDrag } from 'react-dnd'
import { COMPONENT_TYPE } from '../../constants'
import './style.css'

export default memo(function TextComponent() {
  const [, drag] = useDrag(() => ({
    type: 'text'
    // collect: (monitor) => ({
    //   isDragging: !!monitor.isDragging()
    // })
  }))
  return (
    <div className='text-component' ref={drag}>
      文字组件
    </div>
  )
})
