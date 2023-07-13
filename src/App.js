import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import axios from "axios";

function App() {
  // 2. api get요청 후 받아온 데이터를 저장해두려고
  // + 활용하기 위해 useState 사용
  const [isData, setIsData] = useState(null);

  // 3. 조회한 데이터를 활용하기 위해 getData 함수에 담았다
  const getData = () => {
    // 1. 서버에 요청 중(axios)
    return (
      axios
        .get("http://cozshopping.codestates-seb.link/api/v1/products")
        //어떻게 쓸까?
        //isData에 저장
        //console.log(res)로 확인해보면 data확인 가능
        .then((res) => setIsData(res.data))
        //에러가 나면?
        .catch((err) => console.log(err))
    );
  };
  // 4. getData함수를 발동시켜라! -> useEffect!
  //수단일 뿐
  //()=>{} 활용한 이유: getData말고 다른 것도 쓰고싶을 수도 있으니까
  useEffect(() => {
    //로딩창
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainPage isData={isData} />
      <Footer />
    </div>
  );
}

export default App;
