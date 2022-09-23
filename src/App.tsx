import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './layouts/layout';
import Home from './pages/home';

const Collections = React.lazy(() => import("./pages/collections"));
const Blog = React.lazy(() => import("./pages/blog"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="collections"
            element={
              <React.Suspense fallback={<>...</>}>
                <Collections />
              </React.Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <React.Suspense fallback={<>...</>}>
                <Blog />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
