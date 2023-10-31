import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export function SampleNextArrow(props) {
  return (
    <div className={`slider_right_arrow`} onClick={props.onClick}>
      <AiFillCaretRight />
    </div>
  );
}

export function SamplePrevArrow(props) {
  return (
    <div
      className={`slider_left_arrow`}
      onClick={props.onClick}
    >
      <AiFillCaretLeft  />
    </div>
  );
}
