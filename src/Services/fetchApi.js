import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com"

const options = {
  headers: {
    'X-RapidAPI-Key': "f19a187e7amsh29a2e03c0445971p11e43bjsne2a97d90783d",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}