function RecommendBlock({ words }) {
  return (
    <div>
      {words.map((word) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  )
}

export default RecommendBlock
