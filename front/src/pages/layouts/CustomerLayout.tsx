// src/components/Layout.tsx
import React, { useEffect } from 'react';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar'; // Assume you have a Navbar component
import Footer from '../../components/Footer'; // Assume you have a Footer component
import { useSelector } from 'react-redux';
import { AppState } from '@/store/store';
import { UserType } from '@/models/users';
import { checkCorrectPath } from '@/lib/users';
const CustomerLayout: React.FC = () => {

  const userType = useSelector((state: AppState) => state.userSession?.type);
  const navigate = useNavigate();
  const expectedUserType = 'customer' as UserType;
  

  useEffect(() => {
    checkCorrectPath(userType,expectedUserType, navigate);
    console.log('userType', userType)
  }
  , [userType]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CustomerLayout;