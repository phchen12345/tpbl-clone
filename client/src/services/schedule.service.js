import axios from "axios";

const API_URL = "http://localhost:8080/schedule";

export const getSchedule = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getGamesByMonth = async (year, month) => {
  try {
    const res = await fetch(`http://localhost:8080/schedule/${year}/${month}`);
    const gameData = await res.json();
    return gameData;
  } catch (e) {
    console.log(e);
  }
};

export const getGamesByDay = async (year, month, day) => {
  try {
    const res = await axios.get(API_URL + `/${year}/${month}/${day}`);

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUpcomingGame = async () => {
  try {
    const res = await fetch(`http://localhost:8080/schedule/upcoming`);
    const upcomingGamesData = await res.json();
    return upcomingGamesData;
  } catch (e) {
    console.log(e);
  }
};
