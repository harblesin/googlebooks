import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=AIzaSyAbzlJ9jTvlCx4gkk2H3NqpY4T81H0DqDo"
    );
  }
};
