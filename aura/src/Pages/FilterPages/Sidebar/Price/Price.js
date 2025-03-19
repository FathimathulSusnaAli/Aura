import "./Price.css";
import Input from "aura/src/Components/FilterPages/Input.js";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="price" />
          {/* <span className="checkmark"></span>All */}
        </label>

        <Input handleChange={handleChange} value={50} title="$0 - $50" name="price" />
        <Input handleChange={handleChange} value={100} title="$50 - $100" name="price" />
        <Input handleChange={handleChange} value={150} title="$100 - $150" name="price" />
        <Input handleChange={handleChange} value={200} title="Over $150" name="price" />
      </div>
    </div>
  );
};

export default Price;
