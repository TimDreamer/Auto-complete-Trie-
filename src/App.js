import React from 'react'
import words from './1000000ngram_freq.json'
import './App.css'
import TrieInput from './TrieInput'
import NormalInput from './NormalInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>AutoComplete</h1>
          <TrieInput words={words} />
        </div>
        <div>
          <h1>Normal</h1>
          <NormalInput words={words} />
        </div>
      </header>
    </div>
  )
}

export default App
