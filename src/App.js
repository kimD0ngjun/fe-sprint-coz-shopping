import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAllProducts } from "./features/AllProductsSlice";
// 프롭스 드릴링 없이 곧바로 import
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import axios from "axios";

function App() {
  // 2. api get요청 후 받아 온 데이터를 저장해두려고
  // + 활용하기 위해 useState 사용
  // const [isData, setIsData] = useState(null); => 리덕스로 이미 구현했으니 필요 x
  const dispatch = useDispatch();

  // 3. 조회한 데이터를 활용하기 위해 getData 함수에 담았다
  const getData = () => {
    // 1. 서버에 요청 중(axios)
    return (
      axios
        .get("http://cozshopping.codestates-seb.link/api/v1/products")
        .then((res) => {
          dispatch(updateAllProducts(res.data));
          // dispatch 안에 들어가는 콜백함수 : 액션 전송을 위해서
          // setIsData(resArr); => 리덕스 툴킷 쓴 이상 얘는 필요 x
          // console.log(resArr);
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
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
