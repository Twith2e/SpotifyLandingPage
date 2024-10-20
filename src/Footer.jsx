import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Footer() {
  return (
    <nav className="footer-container d-flex justify-content-between align-item-center px-3 py-2">
      <div className="d-flex flex-column gap-1">
        <span className="fz-14 fw-bold text-white">Preview of Spotify</span>
        <span className="fz-16 text-white">
          Sign in to get unlimited songs and podcasts with occasssional ads, No
          credit card needed
        </span>
      </div>
      <div>
        <button className="btn bg-white text-black fw-bold px-4 py-3 rounded-pill fz-16">
          Sign up free
        </button>
      </div>
    </nav>
  );
}
