import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  // debugger
  ReactDOM.render(<Root />, main);
});
