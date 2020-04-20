
import GameOld from './game';

const gameOld = new Game();

import React from 'react';
import ReactDOM from "react-dom";
import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

module.hot.accept();
