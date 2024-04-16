import axios from "axios";

const getCategoryList = async () => {
  try {
    const response = await axios.get('/api/category/listAll');
    return response.data.data;
  } catch (error:any) {
    console.error("Error fetching category list:", error.message);
    throw error; // Re-throw the error to handle it in the component
  }
};

export default {
  getCategoryList
};
