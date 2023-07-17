// store 제작 과정
import { configureStore } from "@reduxjs/toolkit";
import AllProductsSliceReducer from "./features/AllProductsSlice";
import LoadingSliceReducer from "./features/Loading";
import CurrentFilterReducer from "./features/CurrentFilter";

// 예전 store는 하나의 reducer만 확인 처리 가능
// 여러가지 reducer 처리하고 싶으면 하나로 크게 뭉쳐서 store에 전달 : combinereducer
// 이 기능을 configureStore가 원빵에 처리해줄 예정
// redux 툴킷은 액션 생성자함수를 자동으로 생성해줌(굳이 타이핑할 필요 x)

export const store = configureStore({
  reducer: {
    // reducer 하나하나 키(외부에서 useSelector로 가져올 때 사용하는 명칭)와 값(우리가 만들어서 전달시켜줄 reducer 이름)으로 삽입
    AllProducts: AllProductsSliceReducer,
    Loading: LoadingSliceReducer,
    CurrentFilter: CurrentFilterReducer,
  },
});
