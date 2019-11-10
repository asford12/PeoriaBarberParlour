import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import SearchPage from './containers/SearchPage.jsx';
import PayPage from './containers/PayPage.jsx';
import ProfilePage from './containers/ProfilePage.jsx';
import AppointmentsPage from './containers/AppointmentsPage.jsx';
import Auth from './modules/Auth';

const routes = {
  // base component (wrapper for the whole application)
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, SearchPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },
    {
      path: '/findstyle',
      component: SearchPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/pay',
      component: PayPage
    },
    {
      path: '/profile',
      component: ProfilePage
    },
    {
      path: '/appointments',
      component: AppointmentsPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        // change the current URL to /
        replace('/');
      }
    }
  ]
};

export default routes;
