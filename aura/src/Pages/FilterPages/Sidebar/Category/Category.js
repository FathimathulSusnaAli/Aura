import "./Category.css";
import Input from "aura/src/Components/FilterPages/Input.js";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Tops & T-Shirts"
          title="Tops & T-Shirts"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dresses & Jumpsuits"
          title="Dresses & Jumpsuits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Bottoms"
          title="Bottoms"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Ethnic & Traditional Wear"
          title="Ethnic & Traditional Wear"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
