import "../RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useDishes from "../../utils/useDishes";
import { Dishescard } from "../Dishescard";

export const Recommended = ({ isVisible, setVisible, title }) => {
  const { resid } = useParams();
  const [recommendedDish] = useDishes(resid);
  return (
    <div className="menu">
      <h1>{title}</h1>
      {isVisible ? (
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible &&
        recommendedDish &&
        Object.values(recommendedDish).map((item) => {
          return <Dishescard {...item.card.info} key={item.card.info.id} />;
        })}
    </div>
  );
};
