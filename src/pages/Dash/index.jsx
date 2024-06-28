import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { getUsaData } from "../../store/products.js";

const Dashboard = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const dispatch = useDispatch();

  const usaData = useSelector((state) => state.usaData.data);

  const isLoading = useSelector((state) => state.usaData.status);

  useEffect(() => {
    dispatch(getUsaData());
  }, []);

  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "1rem" }}>USA Population Listing</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {usaData.map((product) => (
              <li key={product.Year} style={{ marginBottom: "0.5rem" }}>
                <span style={{ marginRight: "0.5rem" }}>
                  <b>Year:</b> {product.Year}
                </span>
                <span>
                  - <b>Population</b> {product.Population}
                </span>
              </li>
            ))}
            <Counter />
          </ul>
        </div>
      )}
    </>
  );
};

export default Dashboard;
