import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import Loading from "./Loading";
import { MealContext } from "../context/MealContext";
import { useParams } from "react-router-dom";

const Meals = () => {
  const { strCategory } = useParams();
  const { meals, loading, getMenuList, favorites } = useContext(MealContext);

  useEffect(() => {
    const path = `/filter.php?c=${strCategory}`;
    getMenuList(path);
  }, [strCategory, favorites]);

  return (
    <Layout>
      <section>
        <div className="category">
          {loading ? <Loading /> : meals ? meals : "no data"}
        </div>
      </section>
    </Layout>
  );
};

export default Meals;
