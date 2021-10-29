import $ from 'dom7';
import Framework7 from './framework7-custom.js';

// Import F7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';


var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  
});



// cek();

// function cek(){
//   var status = localStorage.getItem("status");
//   if (status=="login") {
//      // app.dialog.alert("Berhasil Login");
    
    
//     //  $f7.router.navigate('/about/');
//      $f7.main.router.navigate('/about/');
//      // remove clear hanya sementara
//     // localStorage.removeItem("status");
//     // localstorage.clear();
//     // views.main.router.navigate('/about/');
//     // app.views.main.router.navigate('/about/');

//   } else {
//     // app.views.main.router.navigate('/home/');
//   }
// }

