import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <HomePage />
    ),
  },
  {
    path: "/List",
    element: <ListPage />,
  },
]
)


function App() {
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar/>
    //   </div>
    //   <div className="content">
    //    <HomePage/>
    //   </div>
      
    // </div>

    <RouterProvider router ={router}/>
  )
}

export default App