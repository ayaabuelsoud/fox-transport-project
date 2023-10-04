import { useState, useEffect } from 'react';
import Header from './core/components/Header';
import Home from './core/components/Home';
import About from './core/components/About';
import Contact from './core/components/Contact';
import SignUp from './core/components/SignUp';
import Login from './core/components/Login';
import { Route, Routes, BrowserRouter, Redirect, withRouter } from 'react-router-dom';
import ReduxProvider from './core/providers/ReduxProvider';

const App = () => {

  return (
    <ReduxProvider>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </ReduxProvider>
  );
}

export default App;
