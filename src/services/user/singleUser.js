import axios from "../BaseUrl";

export const getSingleUser = async (id) => {
    
  const config = {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("znz_website")).data.token
      }`,
    },
  };

  try {
    const response = await axios.get(`getUser/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
