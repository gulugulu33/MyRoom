import axios from 'axios'
import React, { memo } from 'react'
import TextComponent from '../../component/textComponent'
import './style.css'

interface ILeftPanelProps {
  data: any
}

const LeftPanel = memo((props: ILeftPanelProps) => {
  const {data} = props

  return (
    <div className='left-panel'>
      <div className='component-list'>
        <TextComponent></TextComponent>
      </div>
      <button
       className='save-button'
       onClick={() => {
         axios.post('/api/save',{drawPanelDara: data})
              .then((res) => {
                console.log('res:', res)
              })
              .catch((err) => {
                console.log('err:', err);
              })
       }}
      >
        保存到后台
      </button>
    </div>
  )
})

export default LeftPanel