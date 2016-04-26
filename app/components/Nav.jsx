var React = require('react');
var {Link, IndexLink} = require('react-router');

//refactor to function based view
var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Time App
            </li>
            <li>
              <Link to="/">Timer</Link>
            </li>
            <li>
              <Link to="#">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a target="_blank" href="http://www.peterflynn.net">Peter Flynn</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;