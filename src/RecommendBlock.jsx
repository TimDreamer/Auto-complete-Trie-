function RecommendBlock({ words, prefix }) {
  return (
    <div>
      {words.map((word) => {
        const [highlighted, rest] = [
          word.slice(0, prefix.length),
          word.slice(prefix.length),
        ]

        return (
          <div key={word}>
            <span style={{ color: 'orange' }}>{highlighted}</span>
            <span>{rest}</span>
          </div>
        )
      })}
    </div>
  )
}

export default RecommendBlock
