export default function RenderAgePills({ agePillsObj }) {
  return Object.entries(agePillsObj).map((pillsArr) => {
    return (
      <div
        className={`age-pill ${pillsArr[1] ? "age-pill-selected" : ""}`}
        data-value={pillsArr[0]}
        key={pillsArr[0]}
      >
        {isNaN(pillsArr[0]) ? pillsArr[0] : `${pillsArr[0]}+`}
      </div>
    );
  });
}
