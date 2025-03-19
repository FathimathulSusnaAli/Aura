import { BsFillBagFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs"; // Import heart icon

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="icon-container">
  <div className="wishlist">
    <BsFillHeartFill className="wishlist-icon" />
  </div>

  <div className="bag">
    <BsFillBagFill className="bag-icon" />
  </div>
</div>

          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
