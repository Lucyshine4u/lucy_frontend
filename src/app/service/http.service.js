(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .factory('httpService', httpService);

  /** @ngInject */
  function httpService($http, auth, httpConstants) {
    return {
      get,
      post,
      put,
      del,
    };

    function get(url, params) {
      if (params) {
        url += '?';
        Object.keys(params).forEach(key => {
          url = `${url}${key}=${params[key]}&`
        });
        url = url.substring(0, url.length);
      }
      return http({
        method: 'GET',
        url: `${httpConstants.contextPath}${url}`,
        headers: getHeader()
      });
    }

    function post(url, data) {
      return http({
        method: 'POST',
        url: `${httpConstants.contextPath}${url}`,
        headers: getHeader(),
        data
      });
    }

    function put(url, data) {
      return http({
        method: 'POST',
        url: `${httpConstants.contextPath}${url}`,
        headers: getHeader('PUT'),
        data
      });
    }

    function del(url, data) {
      return http({
        method: 'POST',
        url: `${httpConstants.contextPath}${url}`,
        headers: getHeader('DELETE'),
        data
      });
    }

    function http(request) {
        return $http(request);
    }

    function getHeader(xMethod) {
      const headers = {
        'Content-Type': httpConstants.contentType,
      };
      const authToken = auth.getToken();
      if (authToken) {
        headers['X-AUTH-TOKEN'] = authToken;
      }

      if (xMethod) {
        headers['X-HTTP-METHOD'] = xMethod;
      }
      return headers;
    }
  }
})();
