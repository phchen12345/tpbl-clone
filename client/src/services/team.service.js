import axios from "axios";

const API_URL = "http://localhost:8080/team";

// 獲取所有球隊數據
export const getTeams = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
};
