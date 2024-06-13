import axios from "axios";

const AUTH_API_HOST="https://moneyfulpublicpolicy.co.kr"; //api를 연결
//회원가입과 연결할것이기 때문에 export
//인풋에서 받아올 내용을 async ()괄호안에 넣는다
export const register = async ({id, password, nickname}) => {
 //try catch 문
  try{
  const response = await axios.post(AUTH_API_HOST + "/register", {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response.data;
} catch (error) {
  console.log(error?.response?.data?.messege);
  alert("이미 존재하는 유저입니다");
}
};

export const login = async ({id, password}) => {
  //try catch 문
   try{
   const response = await axios.post(AUTH_API_HOST + "/login?expiresIn=10m", {
     id: id,
     password: password,
   });
   //login 했을때 에세스토큰 localStorage에 저장
   localStorage.setItem("accessToken", response.data.accessToken);
   return response.data;
 } catch (error) {
   console.log(error?.response?.data?.messege);
   alert(error?.response?.data?.messege);
 }
 };

 export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if(accessToken) {
    try {
      const response = await axios.get(AUTH_API_HOST + "/user",{
        headers : {
          "Authorization": `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch (err) {
      console.log(error?.response?.data?.messege);
      alert(error?.response?.data?.messege);
    }
  }
 };