import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./index.css";

export default function SectionHead(props) {
  return (
    <nav className="d-flex justify-content-between w-100 align-items-end">
      <a className="fz-24 fw-bold text-white hover-link" href="#">
        {props.title}
      </a>
      <a className="hover-link text-white fz-14" href="">
        See all
      </a>
    </nav>
  );
}

SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
};
