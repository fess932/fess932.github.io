(function () {
  var setupSimilar = document.querySelector('.setup-similar')
  var setupSimilarList = document.querySelector('.setup-similar-list')

  setupSimilar.classList.remove('hidden')

  var getSimilarWizards = function () {
    var similarWizards = []

    for (var i = 0; i < window.settings.AMOUNT_WIZARDS; i++) {
      var wizard = window.util.getRandomWizardPreset()
      similarWizards.push(wizard)
    }
    return similarWizards
  }

  var createWizardElem = function (wizard) {
    var elem = window.util.template.content.cloneNode(true)
    elem.querySelector('.setup-similar-label').textContent = wizard.fullName
    elem.querySelector('.wizard-coat').style.fill = wizard.coat
    elem.querySelector('.wizard-eyes').style.fill = wizard.eyes
    return elem
  }

  var renderSetup = function () {
    var wizards = getSimilarWizards()

    var fragment = document.createDocumentFragment()

    for (var i = 0; i < window.settings.AMOUNT_WIZARDS; i++) {
      fragment.appendChild(createWizardElem(wizards[i]))
    }

    setupSimilarList.appendChild(fragment)
  }
  renderSetup()
})()
