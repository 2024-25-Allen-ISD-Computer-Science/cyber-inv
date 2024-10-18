export function Rating({ stars }: { stars: 0 | 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex flex-row gap-1 h-10">
      {Array(stars)
        .fill(null)
        .map((_, i) => {
          return <Star key={i} />;
        })}
    </div>
  );
}

function Star() {
  return (
    <svg className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,10 40,198 190,78 10,78 160,198" fill="yellow" />
    </svg>
  );
}
