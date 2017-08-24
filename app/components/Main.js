// Include React
var React = require("react");

// Here we include all of the sub-components
var Saved = require("./children/Saved");
var Search = require("./children/Search");


// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Search</h2>
            <p className="text-center">
              <em>Search a New York Times Article!.</em>
            </p>
          </div>

          <div className="col-md-6">

           {this.props.Search}

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;