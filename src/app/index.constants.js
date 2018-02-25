/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('httpConstants', {
      contentType: 'application/vnd.love.collector.v1+json;charset=UTF-8',
      localStoragePrefix: 'XIN_BLOG',
      contextPath: '/blog-api',
    });

})();
