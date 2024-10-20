import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Circle(props) {
  return (
    <div className="d-flex flex-column mt-3 align-items-start">
      <img
        className="rounded-3"
        height={150}
        width={150}
        src={props.src}
        alt=""
      />
      <a className="text-white fz-16" href="">
        {" "}
        {props.albumName}{" "}
      </a>
      <a className="fz-14 grey" href="">
        {" "}
        {props.artist}{" "}
      </a>
    </div>
  );
}

Circle.defaultProps = {
  profession: "Artist",
};
