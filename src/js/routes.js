
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import LoginPage from '../pages/login.f7';
import DashboardPage from '../pages/dashboard.f7';

import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

function checkAuth({ to, from, resolve, reject }) {
  let check = true
  var router = this;
  var status = localStorage.getItem("status");
  if (status=="login") {
    resolve({
      component: AboutPage
    });
    // alert("sedang login");
    // router.navigate('/about/');
  } else {
    resolve({
      component: HomePage
    });
    // reject();
    // router.navigate('/about/');
  }
}
function checkPermission({ to, from, resolve, reject }) {
  let check = true
  var router = this;
  var status = localStorage.getItem("status");
  if (status=="login") {
    resolve();
  } else {
    reject();
  }
}
  
var routes = [
  {
    path: '/',
    component: HomePage,
    beforeEnter: [checkAuth],
    redirect: function ({to, resolve, reject}) {
      // if we have "user" query parameter
      var status = localStorage.getItem("status");
      // alert(status);
      if (status=="login") {
        // redirect to such url
        resolve('/dashboard/');
      }
      // // otherwise do nothing
      else { 
        reject();
        resolve('/login/'); 
      }
    }
  },
  {
    path: '/dashboard/',
    component: DashboardPage,
    
    // beforeEnter: [checkAuth],
    // beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/about/',
    component: AboutPage,
    // beforeEnter: [checkAuth],
    // beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/login/',
    component: LoginPage,
    // beforeEnter: [checkAuth],
    // beforeEnter: [checkAuth, checkPermission],
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];


// cek();

// function cek(){
//   var router = this;
//   // reject();
//   router.navigate('/about/');
// }

export default routes;