import "./Brands.css";
import Input from "aura/src/Components/FilterPages/Input.js";

function Brands({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Brands</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="brand" />
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleChange} value="Forever 21" title="Forever 21" name="brand" />
        <Input handleChange={handleChange} value="H & M" title="H & M" name="brand" />
        <Input handleChange={handleChange} value="Zara" title="Zara" name="brand" />
        <Input handleChange={handleChange} value="Roadster" title="Roadster" name="brand" />
        <Input handleChange={handleChange} value="Levi's" title="Levi's" name="brand" />
        <Input handleChange={handleChange} value="ONLY" title="ONLY" name="brand" />
        <Input handleChange={handleChange} value="Vero Moda" title="Vero Moda" name="brand" />
        <Input handleChange={handleChange} value="Aura OG" title="Aura OG" name="brand" />
      </div>
    </div>
  );
}

export default Brands;
