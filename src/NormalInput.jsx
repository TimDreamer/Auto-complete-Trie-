import React, { useCallback } from 'react'
import CoreInput from './CoreInput'

function NormalInput({ words }) {
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
      <CoreInput
        keywords={keywords}
        update={updateKeywords}
      />
    </div>
  )
}

export default NormalInput
