import React from 'react'
import Trie from './Trie'
import RecommendBlock from './RecommendBlock'

function TrieInput({ words }) {
  const trie = React.useRef(null)
  const [keywords, setKeywords] = React.useState(words.slice(0, 20))
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    if (trie.current === null) {
      trie.current = new Trie(words)
    }
  }, [words])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(() => {
            return e.target.value
          })
          setKeywords(() => {
            const begin = window.performance.now()
            const newKeywords = trie.current.search(e.target.value)
            const end = window.performance.now()
            console.log(`TrieInput Time: ${end - begin} ms`)
            return newKeywords.slice(0, 20)
          })
        }}
      />
      <RecommendBlock words={keywords} />
    </div>
  )
}

export default TrieInput
