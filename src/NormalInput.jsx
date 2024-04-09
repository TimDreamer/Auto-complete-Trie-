import React, { useCallback } from 'react'
import RecommendBlock from './RecommendBlock'

function NormalInput({ words }) {
  const [text, setText] = React.useState('')
  const [keywords, setKeywords] = React.useState(words.slice(0, 20))

  const updateKeywords = useCallback(
    (text) => {
      const newKeywords = []
      const begin = window.performance.now()
      for (const word of words) {
        if (word.startsWith(text)) {
          newKeywords.push(word)
        }
      }
      const end = window.performance.now()
      console.log(`NormalInput Time: ${end - begin} ms`)

      setKeywords(() => {
        return newKeywords.slice(0, 20)
      })
    },
    [words]
  )

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(() => {
            return e.target.value
          })
          updateKeywords(e.target.value)
        }}
      />
      <RecommendBlock words={keywords} />
    </div>
  )
}

export default NormalInput
