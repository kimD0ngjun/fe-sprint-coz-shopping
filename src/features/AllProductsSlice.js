// reducer 정의 시작

import { createSlice } from "@reduxjs/toolkit";
// createSlice : reducer 만들어주고 action 생성자 함수도 알아서 만들어줌 + combineReducer 역할도 맡아줌(요부분 다시 공부)

const initialState = {
  value: [],
};
// api로 호출한 모든 데이터 담기 위함

export const AllProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    updateAllProducts: (state, action) => {
      console.log(action.payload);
      action.payload.map((el) => (el.isBookmarked = false));
      // 처음 받아오는 올 데이터들 북마크 표시 x
      // 내부적으로 immer 라이브러리 사용해서 불변성을 지켜줌 : 굳이 귀찮게 스프레드 문법 쓸 필요 없이 state에 바로 할당 가능
      state.value = action.payload;
      console.log(state.value);
    }, // 액션 타입이 updateAllProducts일 때는 이런 함수가 실행될 것이다~
    updateBookmark: (state, action) => {
      // 현재의 state.value : 홈페이지 띄운 이상, 저기에 모든 상품 데이터가 담길 것.
      // 별표를 눌렀을 때, 북마크가 되도록 설정해주는 함수(isBookmark의 value가 반대로 되도록)
      console.log(action.payload);
      const idx = state.value.findIndex((el) => el.id === action.payload);
      state.value[idx].isBookmarked = !state.value[idx].isBookmarked;
    },
  },
});

// action.payload : 리듀서 함수에 넘길 매개변수

export const { updateAllProducts, updateBookmark } = AllProductsSlice.actions;
// 저거 두 개만 빼오기(컴포넌트단에서 활용하려고)
export default AllProductsSlice.reducer;
