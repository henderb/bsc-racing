import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

const BSCRacing = Game({
  setup: () => ({
    track: Array(14).fill(null),
    teams: Array(4).fill({ bear: null, shark: null, space: 0 })
  }),

  moves: {
    rollMove(G, ctx) {
      let teams = [...G.teams];
      let roll = ctx.random.D6();
      teams.forEach((team) => {
        let curSpace = JSON.parse(JSON.stringify(team['space']));
        team['space'] = curSpace + roll;
      });
      return { ...G, teams, roll };
    },
  },
});

const App = Client({ game: BSCRacing });

export default App;
