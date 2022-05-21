import React, { memo } from 'react'
import { COMPONENT_TYPE } from '../../constants'
import './style.css'

interface IDrawPanelProps {
  data: any,
  setRightPanelType: Function
}

export default memo(function DrawPanel(props: IDrawPanelProps) {
  const {data, setRightPanelType} = props
  
  const generateContext = () => {
    const output = []
    for(const item of data) {
      if(item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(item.type)
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              lineHeight: '18px',
              textIndent: '10px',
              borderRadius: '20px',
              border: '2px solid #ae626e',
              position: 'absolute',
              backgroundColor: '#dbb3b3'
            }}
           >
            {item.data}
          </div>
        )
      }
    }
    return output
  }

  return (
    <div className='draw-panel'>
      {generateContext()}
    </div>
  )
})
