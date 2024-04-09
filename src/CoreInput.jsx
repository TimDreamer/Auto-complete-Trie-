import React from 'react'
import RecommendBlock from './RecommendBlock'

function CoreInput({ keywords, update }) {
  const [text, setText] = React.useState('')

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(() => {
            return e.target.value
          })
          update && update(e.target.value)
        }}
      />
      <RecommendBlock
        words={keywords}
        prefix={text}
      />
    </div>
  )
}

export default CoreInput
