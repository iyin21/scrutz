import axios from "axios";

//import { Error } from "@/types/api";
const BASE_URL = "https://infinion-test-int-test.azurewebsites.net/api";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export default axiosInstance;