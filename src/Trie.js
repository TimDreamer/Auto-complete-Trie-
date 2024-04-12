// N: length of words, L: length of longest word, P: length of searching prefix
// Time complexity:
// build: O(NL)
// search: O(min(L, P))

// Space complexity:
// O(NL)
class Trie {
  constructor(words) {
    this.root = new Trie.TrieNode()
    this.words = words
    const begin = window.performance.now()
    this.words.forEach((word, idx) => this.addWord(word, idx))
    const end = window.performance.now()
    console.log(`Build Trie with ${words.length} words take ${end - begin} ms.`)
  }

  static get TrieNode() {
    return (
      this._TrieNode ||
      (this._TrieNode = class TrieNode {
        constructor() {
          this.children = {}
          this.wordIndexes = []
        }
      })
    )
  }

  addWord(word, idx) {
    let cur = this.root
    for (const c of word) {
      if (!(c in cur.children)) {
        cur.children[c] = new Trie.TrieNode()
      }
      cur = cur.children[c]
      cur.wordIndexes.push(idx)
    }
  }

  search(prefix) {
    let cur = this.root
    for (const c of prefix) {
      if (!cur.children[c]) {
        return []
      }
      cur = cur.children[c]
    }
    console.log(cur.wordIndexes.length)
    return cur.wordIndexes.map((idx) => this.words[idx])
  }
}

export default Trie

// const lst = ['apple', 'banna', 'ban', 'ape', 'monkey', 'mocau', 'anil']
// console.log(Trie.TrieNode)
// const trie = new Trie(lst)
// console.log(trie)
// console.log(trie.search('ap'))
// console.log(trie.search('a'))
// console.log(trie.search('ban'))
