import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function PlayButton() {
  return (
    <div className="playbtn-container d-flex align-items-center justify-content-center rounded-circle p-2">
      <button className="btn p-0">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="Svg-sc-ytk21e-0 bneLcE"
          xmlns="http://www.w3.org/2000/svg"
          height="35"
        >
          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
        </svg>
      </button>
    </div>
  );
}
``;
