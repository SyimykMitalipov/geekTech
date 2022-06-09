import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Progress from './components/Progress/Progress';
import Table from './components/Table/Table';
import Test from './components/Test/Test';
import MuiTheme from './themes';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/Teach/SignIn';
import SignInStu from './components/SignIn/Student/SignInStu';
import { AuthContextProvider } from './context/AuthContext';
import { CssBaseline } from '@mui/material';
const App = () => {
  return (
    <div>
      <MuiTheme>
        <CssBaseline />
          <Header />
          <AuthContextProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/table" element={<Table />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/signstudent' element={<SignInStu /> } />
          </Routes>
          </AuthContextProvider>
          <Footer />
      </MuiTheme>
    </div>
  );
};

export default App;
