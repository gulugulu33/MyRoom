import React, { memo } from 'react'
import { useDrop } from 'react-dnd'
import { COMPONENT_TYPE, RIGHT_PANEL_TYPE } from '../../constants'
import './style.css'

interface IDrawPanelProps {
  data: any,
  setData: Function
  setRightPanelType: Function,
  setRightPanelElementId: Function
}

export default memo(function DrawPanel(props: IDrawPanelProps) {
  const {data, setData, setRightPanelType, setRightPanelElementId} = props
  
  const [,drop] = useDrop(() => ({
    accept: RIGHT_PANEL_TYPE.TEXT,
    drop: (_,monitor) => {
      const { x, y } = monitor.getClientOffset()
      const currentX = x - 310
      const currentY = y - 20

      setData([
        ...data,
        {
          id:  `text-${data.length + 1}`,
          type: 'text',
          data: 'Line of text',
          color: '#000000',
          size: '12px',
          width: '100px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`
        }
      ])
    }
  }))

  const generateContext = () => {
    const output = []
    for(const item of data) {
      if(item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(RIGHT_PANEL_TYPE.TEXT)
              setRightPanelElementId(item.id)
            }}
            style={{
              position: 'absolute',
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              // lineHeight: '18px',
              // textIndent: '10px',
              // borderRadius: '20px',
              // border: '2px solid #ae626e',
              // backgroundColor: '#dbb3b3'
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
    <div className='draw-panel' ref={drop}>
      {generateContext()}
    </div>
  )
})
