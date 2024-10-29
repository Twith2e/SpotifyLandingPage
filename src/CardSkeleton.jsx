function CardSkeleton() {
  return (
    <div className="d-flex flex-column gap-2 mt-3 align-items-start rounded-3 play-card">
      <div
        className="rounded-circle bg-secondary placeholder-wave"
        style={{ width: "150px", height: "150px" }}
      ></div>
      <div
        className="bg-secondary placeholder-wave rounded-pill"
        style={{ width: "150px", height: "15px" }}
      ></div>
      <div
        className="bg-secondary placeholder-wave rounded-pill"
        style={{ width: "150px", height: "15px" }}
      ></div>
    </div>
  );
}

export default CardSkeleton;
