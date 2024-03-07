import React from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './blog';
import { Route, Routes } from 'react-router-dom'; // Import Routes

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div style={{color:"white"}}>404 Not Found</div>
    },
    {
        path:"/blog",
        element: <Blog />
    }
]);

function main() {
  return (
    <RouterProvider router={router}>
      <Routes>{/* Wrap routes with Routes */}
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </RouterProvider>
  )
}

export default main;
