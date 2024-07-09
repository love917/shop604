import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || ""; // 또는: 둘중에 한개라도 ture가 되면 다른건 ㅎ실행 x
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  };
  //useEffect(()=>{},[])//[]이 비어있으면 component가 실행될때 한번만 실행
  //useEffect(()=>{},[변수])//[]에 변수가 있으면 component가 실행될때 한번 실행하고 변수값이 바뀔때마다 함수가 실행
  useEffect(() => {
    getProducts();
  }, [query]);//쿼리문이 바뀌면 다시 실행되도록함

  return (
    <div>
      <div className="cards">
        {productList.map((menu) => {
          return <ProductCard key={menu.id} item={menu} />;
        })}
      </div>
    </div>
  );
}

export default ProductAll;
