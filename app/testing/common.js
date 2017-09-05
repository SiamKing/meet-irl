var Common = (function() {
  'use strict';

  return {
    silenceUncaughtInPromise: promise => {
      return promise.catch(err => err) && promise;
    }
  }
})();
