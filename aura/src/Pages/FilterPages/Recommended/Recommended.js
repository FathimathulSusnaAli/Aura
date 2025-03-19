import Button from "aura/src/Components/FilterPages/Button.js";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Tops & T-Shirts" title=" Tops & T-Shirts" />
          <Button onClickHandler={handleClick} value="Dresses & Jumpsuits" title="Dresses & Jumpsuits" />
          <Button onClickHandler={handleClick} value="Bottoms" title="Bottoms" />
          <Button onClickHandler={handleClick} value="Ethnic & Traditional Wear" title="Ethnic & Traditional Wear" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
