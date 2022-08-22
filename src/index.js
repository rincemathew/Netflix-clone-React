import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DetailedPage from './pages/DetailedPage/DetailedPage';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='details/:id' element={<DetailedPage />}/>
    <Route path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))</BrowserRouter>
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
