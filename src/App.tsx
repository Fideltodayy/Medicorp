import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import OrderTable from './components/OrderTable';
import { useAuth } from './contexts/AuthContext';

const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormField = lazy(() => import('./pages/Form/FormField'));
const FormAddUser = lazy(() => import('./pages/Form/FormAddUser'));
const FormAddFarmer = lazy(() => import('./pages/Form/FormAddFarmer'));
const FormAddFactory = lazy(() => import('./pages/Form/FormAddFactory'));
const Login = lazy(() => import('./pages/Form/Login'));
const TableTwo = lazy(() => import('./components/TableTwo'));
const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));
const FactoryDashboard = lazy(() => import('./pages/Dashboard/FactoryDashboard'));
const FarmerDashboard = lazy(() => import('./pages/Dashboard/FarmerDashboard'));
const SupplierDashboard = lazy(() => import('./pages/Dashboard/SupplierDashboard'));

const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const ListTable = lazy(() => import("./components/ListTable"));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);
  const {
    user, 
    isLoggedIn,
    setUser,
  } = useAuth()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (isLoggedIn) {
    return loading ? (
      <Loader />
    ) : (
      <>
          <Routes>
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route element={<DefaultLayout />}>
              <Route index element={<ECommerce />} />
              <Route
                path="/calendar"
                element={
                  <Suspense fallback={<Loader />}>
                    <Calendar />
                  </Suspense>
                }
              />
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<Loader />}>
                    <Profile />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-elements"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormElements />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-layout"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormField />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-add-user"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormAddUser />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-add-farmer"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormAddFarmer />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-add-factory"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormAddFactory />
                  </Suspense>
                }
              />
              <Route
                path="/tables/order-table"
                element={
                  <Suspense fallback={<Loader />}>
                    <OrderTable />
                  </Suspense>
                }
              />
              <Route
                path="/forms/log-in"
                element={
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/tables"
                element={
                  <Suspense fallback={<Loader />}>
                    <Tables />
                  </Suspense>
                }
              />
              <Route
                path="/tables/table-two"
                element={
                  <Suspense fallback={<Loader />}>
                    <TableTwo />
                  </Suspense>
                }
              />
              <Route
                path="/tables/listtable"
                element={
                  <Suspense fallback={<Loader />}>
                    <ListTable/>
                  </Suspense>
                }
              />
              <Route
                path="/dashboards"
                element={
                  <Suspense fallback={<Loader />}>
                    <ECommerce/>
                  </Suspense>
                }
              />
              <Route
                path="/dashboards/FactoryDashboard"
                element={
                  <Suspense fallback={<Loader />}>
                    <FactoryDashboard/>
                  </Suspense>
                }
              />
              <Route
                path="/dashboards/SupplierDashboard"
                element={
                  <Suspense fallback={<Loader />}>
                    <SupplierDashboard/>
                  </Suspense>
                }
              />
              <Route
                path="/dashboards/FarmerDashboard"
                element={
                  <Suspense fallback={<Loader />}>
                    <FarmerDashboard/>
                  </Suspense>
                }
              />
            </Route>
          </Routes>
      </>
    );
  }else{
    return(
      <Login/>
    )
  }
}

export default App;
