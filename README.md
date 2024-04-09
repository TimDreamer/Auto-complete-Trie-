# Implement simple autocomplete system using Trie

## Notes

1. In order to compare performance between our implementation and linear scan, we get all the matched strings only slice them before rendering.
2. We prepare four datasets (1,000,000, 100,000, 50,000, 1,000) and use the largest one as default.
3. When we use default dataset, we can see that Trie is 10x faster than linear scan.

## Complexity

N: length of the words, L: length of the longest word, P: length of the searching prefix

### Time Complexity

#### build: O(NL)

If you want to do sorting in the beginning, this will take O(NlogN).

#### search: O(min(L, P))

Whenever we search the end of L or P, we return immediately. By the way, we need to go through word indexes, but if we only show/need 10 or 20 keywords at the same time, this takes O(1).

### Space complexity

#### O(NL)

Someone may argue about this, but if you think about the worst case, all strings don't have common prefix, we have to create TrieNode for each character for each string, which consume O(NL) space. On the contrast, if some strings have common prefix, that means they share some TreeNodes, but we also store word indexes in TreeNodes to make search time O(min(L, P)), so we still consume O(NL) space.
