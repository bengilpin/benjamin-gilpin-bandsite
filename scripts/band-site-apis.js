const axios = require('axios');

class BandSiteApi {

  

  constructor(apiKey) {
    this.apiKey = "f2191fdb-1d60-43d5-aa6b-670b5950e56e";
    this.apiUrl = "https://project-1-api.herokuapp.com/";
  }

  

  postComment(comment) {

    const url = `${this.apiUrl}comments?api_key=${apiKey}`

    return axios.post(url, comment)
      .then(response => {

      }
        )
//catch
  }

  getComments() {

    const url = `${this.apiUrl}comments?api_key=${apiKey}`

    return axios.get(url)
    .then(response => {
      const reversedComments = response.reverse();
      return reversedComments;

    })
//catch
  }
}
