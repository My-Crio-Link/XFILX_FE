export default function RenderGenrePills({ genreObj }) {
  return Object.entries(genreObj).map((genreArr) => {
    return (
      <div
        className={`genre-pill ${genreArr[1] ? "genre-pill-selected" : ""}`}
        data-value={genreArr[0]}
        key={genreArr[0]}
      >
        {genreArr[0]}
      </div>
    );
  });
}
