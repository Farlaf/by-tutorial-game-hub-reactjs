import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d357ab25e0d64c04871305ac58885362",
    },
});
