import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

var app = {
  
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // this is important!
  onDeviceReady: function() {
      ReactDOM.render(<App />, document.getElementById('app'))
  },
};

app.initialize();