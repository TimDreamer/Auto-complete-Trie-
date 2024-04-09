import React from 'react'
import Trie from './Trie'
import CoreInput from './CoreInput'

function TrieInput({ words }) {
  const trie = React.useRef(null)
  const [keywords, setKeywords] = React.useState(words.slice(0, 20))

  React.useEffect(() => {
    if (trie.current === null) {
      trie.current = new Trie(words)
    }
  }, [words])

  return (
    <div>
      <CoreInput
        keywords={keywords}
        update={(prefix) =>
          setKeywords(() => {
            if (prefix.length === 0) {
              return words.slice(0, 20)
            }
            const begin = window.performance.now()
            const newKeywords = trie.current.search(prefix)
            const end = window.performance.now()
            console.log(`TrieInput Time: ${end - begin} ms`)
            return newKeywords.slice(0, 20)
          })
        }
      />
    </div>
  )
}

export default TrieInput
