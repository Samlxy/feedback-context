import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(10);
  // const [text, setText] = useState("Feedback item example");

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card
    // reverse={true}
    >
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
