import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Headerstyle } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Headerstyle>
        <AppBar />
      </Headerstyle>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <ToastContainer autoClose={3000} />
    </>
  );
};
