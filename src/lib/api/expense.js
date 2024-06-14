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
//
 
export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${queryKey[1]}`)
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

export const putExpense = async (updateExpense) => {
  const {id, ...rest} = updateExpense;
  try {
    const {data} = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch(error) {
    alert('에러가 발생했습니다');
    console.log(error)
  }
}

export const deleteExpense = async (id) => {
  try {
    const {data} = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (error) {
    alert('에러가 발생했습니다');
    console.log(error);
  }
};