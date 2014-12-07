'use strict';
require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

//services
require('./mmm_services/mmm_service')(mmmApp);

//controllers
require('./mmm_controller/mmm_controller')(mmmApp);
