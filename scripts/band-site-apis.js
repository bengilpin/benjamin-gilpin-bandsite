const api_key = "3d55f80c-bb2b-4ddf-b49f-e9d0c361702f";

export default class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;

    try {
      const response = await axios.post(url,comment);
      return response;
    } catch (error) {
      console.error("Could not post comment", error);
    }
  }

  async getComments() {
    const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Could not load comments", error);
    }
  }

  async getShows() {
    const url = `${this.apiUrl}shows?api_key=${this.apiKey}`;

    try {
      const showResponse = await axios.get(url);
      return showResponse.data;
    } catch (error) {
      console.error("Could not load shows", error);
    }
  }
}