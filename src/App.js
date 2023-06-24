
import './App.css';
import AuthProvider from './Context/AuthProvider';
 import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/Login/SignUp/SignUp';

import DrawerContent from './Pages/test/MainLayout/Drawer/DrawerContent';
import Test from './Pages/test/Test';
import PrivateRoute from './ProtectedRoute/PrivateRoute/PrivateRoute';
import Form from './Pages/Form/Form';
// import DefaultLayout from './Pages/Dashboard/DefaultLayout';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <PrivateRoute path="/form">
              <Form/>
            </PrivateRoute>
            {/* <Route path="/dashboard">
              <DefaultLayout/>
            </Route> */}
            <PrivateRoute path="/test">
              <Test/>
            </PrivateRoute>
            <PrivateRoute path="/test2">
              <DrawerContent/>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        
      </AuthProvider>
      
    </>
  );
}

export default App;
