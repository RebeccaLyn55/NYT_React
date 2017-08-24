// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var NYTAPI = "need api key";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(article) {

    console.log(article);

    // Find the article
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + article + "&pretty=1&key=" + NYTAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postArticle: function(location) {
    return axios.post("/api", { article: article });
  }
};

// We export the API helper
module.exports = helper;
