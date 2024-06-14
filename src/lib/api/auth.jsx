import axios from "axios";

const AUTH_API_HOST="https://moneyfulpublicpolicy.co.kr"; 
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

 //프로필
 export const updateProfile = async(formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if(accessToken){
    try {
      const response = await axios.patch(
        AUTH_API_HOST + "/profile", 
      formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      alert(`프로필 변경이 완료되었습니다`);
      return response.data;
    } catch (err) {
      alert (`에러가 발생했습니다`);
    }
  }
 }