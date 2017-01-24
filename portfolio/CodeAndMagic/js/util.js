(function () {
  var getRandomArrElem = function (arr) {
    var randomNum = Math.floor(Math.random() * (arr.length))
    return arr[randomNum]
  }

  /// посмотреть нужно ли генерить массив тут несколько раз или один раз

  window.util = {
    isEscEvent: function (event, action) {
      if (event.keyCode === window.settings.ESC_KEYCODE) {
        action()
      }
    },

    isEnterEvent: function (event, action) {
      if (event.keyCode === window.settings.ENTER_KEYCODE) {
        action()
      }
    },

    getRandomWizardPreset: function () {
      var wizard = {
        coat: getRandomArrElem(window.settings.wizard.eyesColors),
        eyes: getRandomArrElem(window.settings.wizard.coatColors),
        fireball: getRandomArrElem(window.settings.wizard.fireballColors),
        name: getRandomArrElem(window.settings.wizard.names),
        surename: getRandomArrElem(window.settings.wizard.surenames)
      }

      wizard.fullName = wizard.name + ' ' + wizard.surename

      return wizard
    },
    template: document.querySelector('#similar-wizard-template')
  }
}())
