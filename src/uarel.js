/**
 * @license
 * Copyright 2014 Adrian Oprea
 * Available under MIT license <https://github.com/opreaadrian/uarel/blob/master/LICENSE>
 */

(function(exports) {
  'use strict';

  /**
   * @method _getParameterMap
   * @private
   *
   * @description Generates a JavaScript object containing all the parameters in the given search
   * string by.
   *
   * @param {String} search A string representing an URL for which the parameter hash map needs to be
   * extracted
   * @return  {Object|null} The JavaScript object representing the URL parameters and their values,
   * otherwise null (useful for result checking).
   *
   */
  function _getParameterMap(search) {
    var _searchString    = decodeURIComponent(search),
        _hasQuestionMark = _searchString.indexOf('?') > -1,
        _params          = [],
        _paramPair       = [],
        parameterMap    = null;

    if (_hasQuestionMark) {
       _searchString = _searchString.split('?')[1];
    }

    _params = _searchString.split('&');

    while(_params.length) {
      _paramPair = _params.shift().split('=');
      parameterMap[_paramPair[0]] = _paramPair[1];
    }

    return parameterMap;
  }

  exports.appendParams = function(url, hash) {
    var i = 0,
        keys = Object.keys(hash),
        len = keys.length;


    for (; i < len; i++) {
      keys[i]+= '=' + hash[keys[i]];
    }


    return url += (url.indexOf('?') > -1 ) ? '' : '?' + keys.join('&');

  };

  exports.currentHttpParameterMap = (function() {
    if (typeof window == 'undefined') {
      return null;
    }

    return _getParameterMap(window.location.search);
  })();
})(typeof exports == 'undefined' ? this.UAREL = {} : exports);

