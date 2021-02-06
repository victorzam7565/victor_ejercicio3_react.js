import React from "react";
import ProductRow from "./ProductRow";
import ProductCategory from "./ProductCategory";
const ProductTable = ({ products }) => {
  let lastCategory = null;
  let rows = [];
  const pr =
    products === undefined
      ? products
      : products.forEach((product, index) => {
          if (product.category !== lastCategory) {
            rows.push(
              <ProductCategory category={product.category} key={product.name} />
            );
          }
          rows.push(<ProductRow key={index} {...product} />);
          lastCategory = product.category;
        });
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>En stock</th>
        </tr>
      </thead>
      <tbody>
        {rows}
        {/* {products === undefined
          ? products
          : products.map((product, index) => (
              <ProductRow key={index} {...product} />
            ))} */}
      </tbody>
    </table>
  );
};

