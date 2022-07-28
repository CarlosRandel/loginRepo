import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
});
export const postLogin = async (email, password) => {
    const data = await api.post("/login", { email, password })
    return data;

}

