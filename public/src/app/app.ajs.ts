if(window){
    // @ts-ignore
    const require = () => {}
}


// main
require('./app.module.ajs');

// Sections
require('./components/components.module.ajs');
require('./home/home.module.ajs');
require('./list/list.module.ajs');
require('./login/login.module.ajs');

// Controllers
require('./controllers/listCtrl.ajs');
require('./controllers/mainCtrl.ajs');
require('./controllers/userCtrl.ajs');

// Directives
require('./directives/directives.ajs');

// Services
require('./services/mainSvc.ajs');

// angular.bootstrap(document.body, ['upkeep']);

