import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Seat from './component/Seat'
import Summary from './component/Summary'
const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/seat",
        element:<Seat/>
      },
      {
        path:"/summary",
        element:<Summary/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
