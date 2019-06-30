import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books");
    }
}