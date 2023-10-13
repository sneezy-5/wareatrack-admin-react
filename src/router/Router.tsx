// import { Route, Routes } from "react-router-dom";
// import routes from "./routes";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import DashboardPage from "@/pages/DashbordPage";


// const Router = () => {
//   return (
//     <Routes>
//           <Route path={routes.home} element={<HomePage />} />
//           <Route path={routes.login} element={<LoginPage />} />
//           <Route >
//             <Route path={routes.dasboard} element={<DashboardPage />} />
//           </Route>
        
//     </Routes>
//   );
// };

// export default Router;


import Defautl from '@/layouts/Default';
import DashboardPage from '@/pages/DashbordPage';
import LoginPage from '@/pages/LoginPage';
// import { Navigate, useRoutes } from 'react-router-dom';
// layouts

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Defautl />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <DashboardPage /> },
      ],
    },
    {
      path: 'auth/login',
      element: <LoginPage />,
    },
   
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
