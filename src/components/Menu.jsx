import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { GET_API } from "./api/GET_API";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (strCategory) => {
    console.log(strCategory);
    navigate(`/meals/${strCategory}`, { state: { strCategory } });
  };

  const getMenuList = async () => {
    setLoading(true);
    const path = "/categories.php";
    const res = await GET_API(path);
    if (res) {
      const categoryData = res.categories.map(
        ({ idCategory, strCategory, strCategoryDescription }) => (
          <div key={idCategory}>
            <h1
              onClick={() => handleCategoryClick(strCategory)}
              className="btn"
            >
              {strCategory ? strCategory : ""}
            </h1>
          </div>
        )
      );
      setCategory(categoryData);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <Layout>
      <div className="category">{loading ? <Loading /> : category}</div>
    </Layout>
  );
};

export default Menu;
