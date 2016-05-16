module.exports = (function() {

  'use strict';

  /* Forces www. on naked domain */

  class ForceWWWMiddleware {

    exec(controller, callback) {

      let host = controller._requestHeaders.host || '';

      if (host.split('.').length === 2) {
        controller.redirect(`www.${host}${request.url}`);
        return;
      }

      callback(null);

    }

  }

  return ForceWWWMiddleware;

})();
