import { Route, Routes } from 'react-router-dom';

import { MainPage, NotFound } from '../pages';
import { ProtectedRoute } from '../routes';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<MainPage />} />

          <Route
            path='*'
            element={<NotFound link='/' height='calc(100vh - 112px)' />}
          />
        </Route>
        {/* AUTH */}
      </Routes>
    </>
  );
}

export default AppRoutes;
