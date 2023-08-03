import "./Card.css";

const Card = (props) => {
  const classes = "expense-Container " + props.className;
  return (
  <div className={classes}>
    {props.children};
  </div>
  );
};

export default Card;
