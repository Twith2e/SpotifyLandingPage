import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function SideBar() {
  return (
    <div className="d-flex flex-column gap-3 bg-dark-grey w-100 main-div pt-4 pb-5 rounded-3">
      <div className="d-flex align-items-center justify-content-between w-100 px-3">
        <button className="btn p-0 d-flex gap-3">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 bneLcE"
            xmlns="http://www.w3.org/2000/svg"
            fill="#b2b2b2"
            height="24"
          >
            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
          </svg>
          <span className="grey">Your Library</span>
        </button>
        <button className="btn p-0">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="Svg-sc-ytk21e-0 dYnaPI"
            xmlns="http://www.w3.org/2000/svg"
            fill="#b2b2b2"
            height="18"
          >
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
          </svg>
        </button>
      </div>
      <div className="d-flex flex-column gap-3 playlist-container overflow-scroll scroll-hidden py-3">
        <div className="d-flex align-items-start flex-column gap-1 bg-grey text-white p-3 rounded-3">
          <span className="fw-bold fz-16">Create your first playlist</span>
          <span className="fz-14">It's easy, we'll help you</span>
          <button className="btn playlist-btn bg-white text-dark rounded-pill fw-bold mt-3 fz-14">
            Create playlist
          </button>
        </div>
        <div className="d-flex align-items-start flex-column gap-1 bg-grey text-white p-3 rounded-3">
          <span className="fw-bold fz-16">
            Let's find some poadcats to follow
          </span>
          <span className="fz-14">We'll keep you updated on new episodes</span>
          <button className="btn playlist-btn bg-white text-dark rounded-pill fw-bold mt-3 fz-14">
            Browse podcasts
          </button>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 px-3">
        <div className="d-flex gap-3 flex-wrap row-gap-2">
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                Legal
              </a>
            </span>
          </div>
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                Safety & Privacy Center
              </a>
            </span>
          </div>
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                Privacy Policy
              </a>
            </span>
          </div>
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                Cookies
              </a>
            </span>
          </div>
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                About Ads
              </a>
            </span>
          </div>
          <div>
            <span className="fz-11">
              <a className="text-decoration-none grey" href="">
                Accessibility
              </a>
            </span>
          </div>
        </div>
        <div>
          <span className="fz-12">
            <a className="text-decoration-none text-white last-link" href="">
              Cookies
            </a>
          </span>
        </div>
        <div className="mt-4">
          <button className="btn py-1 px-2 border-secondary d-flex align-items-center gap-2 rounded-pill">
            <i className="fas fa-globe text-white"></i>
            <span className="fw-700 fz-14 text-white">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}
