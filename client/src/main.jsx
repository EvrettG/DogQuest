import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Stats from './pages/Stats'
import Game from './pages/Game'
import GameMain from './pages/GameMain.jsx'
import GameStart from './pages/GameStart.jsx'
import Digging from './pages/game/Digging.jsx'
import GameStats from './pages/game/GameStats.jsx'
import Upgrades from './pages/game/Upgrades.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/stats',
        element: <Stats />
      }, {
        path: '/game',
        element: <Game />,
        children:[
          {
            index: true, // Default route when accessing /game
            element: <GameStart/>,

          },
          {
            path: '/game/main',
            element: <GameMain />,
            children:[
              {
                index: true, // Default route when accessing /game/start
                element: <Digging />,
              },
              {
                path:'/game/main/upgrades',
                element: <Upgrades/>
              },
              {
                path:'/game/main/stats',
                element: <GameStats/>
              },
            ]
          },

        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
