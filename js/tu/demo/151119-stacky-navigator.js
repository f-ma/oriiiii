;(function(window, undefined) {
  "use strict";

  function _resetMainContainer() {
    document.getElementById('main-container').classList.remove('activated');
  }

  function _resetNavigatorContainerStandby() {
    var navigatorContainers = document.getElementsByClassName('navigator-container');
    for (var i = 0; i < navigatorContainers.length; i++) {
      var navigatorContainer = navigatorContainers[i];
      navigatorContainer.classList.remove('standby');
    }
  }

  function _resetNavigatorContainerDeepIndex() {
    var navigatorContainers = document.getElementsByClassName('navigator-container');
    for (var i = 0; i < navigatorContainers.length; i++) {
      var navigatorContainer = navigatorContainers[i];
      navigatorContainer.classList.remove('one');
      navigatorContainer.classList.remove('two');
      navigatorContainer.classList.remove('three');
    }
  }

  function _resetNavigatorContainerActivated() {
    var navigatorContainers = document.getElementsByClassName('navigator-container');
    for (var i = 0; i < navigatorContainers.length; i++) {
      var navigatorContainer = navigatorContainers[i];
      navigatorContainer.classList.remove('activated');
    }
  }

  function initEventHandlers() {
    document.getElementById('main-toggle').addEventListener('click', function(event) {
      _resetNavigatorContainerActivated();
      _resetNavigatorContainerDeepIndex();
      var standbyContainerOne = document.getElementsByClassName('navigator-container standby')[0];
      var standbyContainerTwo = document.getElementById(standbyContainerOne.dataset.next);
      var standbyContainerThree = document.getElementById(standbyContainerTwo.dataset.next);;
      standbyContainerOne.classList.add('one');
      standbyContainerTwo.classList.add('two');
      standbyContainerThree.classList.add('three');
      document.getElementById('main-container').classList.toggle('activated');
    });

    var navigatorContainers = document.getElementsByClassName('navigator-container');
    for (var i = 0; i < navigatorContainers.length; i++) {
      var navigatorContainer = navigatorContainers[i];
      (function run(navigatorContainer) {
        navigatorContainer.addEventListener('click', function(event) {
          _resetMainContainer();
          _resetNavigatorContainerStandby();
          navigatorContainer.classList.add('activated');
          navigatorContainer.classList.add('standby');
        });
      })(navigatorContainer);
    }
  }

  initEventHandlers();
})(window, undefined);
