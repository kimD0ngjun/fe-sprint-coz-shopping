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
        .then((res) => {
          let resArr = res.data;
          resArr = resArr.map((el) => {
            return { ...el, isBookmarked: false };
          });
          setIsData(resArr);
          console.log(resArr);
          // res.data 객체에 북마크 확인 키값 추가
        })
        //객체분해할당이든 Object.assign()
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

  // 1. 객체에 BOOKMARKED : null 관련 키를 추가
  // 2. useEffect => 초기값(null) => 저장 안됨
  // 3. 저장 안되는 문제 => 로컬스토리지?

  return (
    <div className="App">
      <Header />
      <MainPage isData={isData} setIsData={setIsData} />
      <Footer />
    </div>
  );
}

export default App;
