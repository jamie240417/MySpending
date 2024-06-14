import axios from "axios";
 
const JSON_SERVER_HOST = "http://localhost:5000";
 
export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`)
    return response.data;
  } catch(error) {
    alert("에러");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return response.data;
  } catch(error) {
    alert('에러가 발생했습니다');
    console.log(error)

  }
};