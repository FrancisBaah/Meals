import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import Loading from "./Loading";
import { MealContext } from "../context/MealContext";
import { useParams } from "react-router-dom";
const path = `/random.php`;

const RandomMeal = () => {
  const { strCategory } = useParams();
  const { meals, loading, getMenuList, favorites } = useContext(MealContext);

  useEffect(() => {
    getMenuList(path);
  }, []);

  return (
    <Layout>
      <section style={{ display: "flex", flexDirection:"column", alignItems: 'center', gap: '100px' }}>
        <div className="">
          {loading ? <Loading /> : meals ? meals : "no data"}
        </div>
        <button onClick={()=>getMenuList(path)} className="btn">Generate</button>
      </section>
    </Layout>
  );
};

export default RandomMeal;
