import "./Breakdown.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Breakdown() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let getCategories = async () => {
      let categories = await axios.get("http://localhost:4200/categories");
      setCategories(categories.data);
    };
    getCategories();
  }, []);

  console.log(categories);
  return (
    <div className="category-container">
      <label className="breakdown">Breakdown</label>
      {categories.map((category) => (
        <div className="singleCategory">
          <div className="category">{category._id}: {category.sum}</div>
        </div>
      ))}
    </div>
  );
}

export default Breakdown;
