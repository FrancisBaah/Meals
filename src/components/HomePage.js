import React from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <section className="home-page">
        <h1>Home Page</h1>
        <div style={{gap: "30px", display: 'flex'}}>
          <button onClick={()=>navigate("/menu")} className="btn">Menu</button>
          <button onClick={()=>navigate("/my-favorites")} className="btn">Favorites</button>
        </div>
        <button onClick={()=>navigate("/random-meal")} className="btn">Random Meal</button>
      </section>
    </Layout>
  );
};

export default HomePage;
