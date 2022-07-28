import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const url = "https://glacial-sierra-36711.herokuapp.com/allproduct";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);
  return [product];
};

export default useProduct;
