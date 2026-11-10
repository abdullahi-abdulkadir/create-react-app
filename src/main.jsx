import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)






// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import { Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import BookingPage from "../pages/BookingPage";

// function Main() {
//   return (
//     <main>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/booking" element={<BookingPage />} />
//       </Routes>
//     </main>
//   );
// }

// export default Main;