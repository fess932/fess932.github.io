
(function () {
// ============ Main Wizard =================

  var setupPlayer = document.querySelector('.setup')
  var wizardSetup = {
    coat: setupPlayer.querySelector('.wizard-coat'),
    eyes: setupPlayer.querySelector('.wizard-eyes'),
    fireball: setupPlayer.querySelector('.setup-fireball'),
    fireballWrap: setupPlayer.querySelector('.setup-fireball-wrap')
  }

  // =============   change Wizard on click
  setupPlayer.addEventListener('click', function (clickEvt) {
    var wizardPreset = window.util.getRandomWizardPreset()

    if (clickEvt.target === wizardSetup.coat) {
      wizardSetup.coat.style.fill = wizardPreset.coat
    }

    if (clickEvt.target === wizardSetup.eyes) {
      wizardSetup.eyes.style.fill = wizardPreset.eyes
    }

    if (clickEvt.target === wizardSetup.fireball) {
      wizardSetup.fireballWrap.style.backgroundColor = wizardPreset.fireball
    }
  })

  // ================   buy fireballs ===========

  var shopElement = document.querySelector('.setup-artifacts-shop')

  var draggedItem = null

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName === 'IMG') {
      draggedItem = evt.target
      evt.dataTransfer.setData('text/plain', evt.target.alt)
      console.log(evt.dataTransfer.getData('text'))
    }
  })

  var artifactsElement = document.querySelector('.setup-artifacts')

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault()
    return false
  })

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault()

    evt.target.style.outline = ''
    evt.target.style.backgroundColor = ''

    var newItem = draggedItem.cloneNode(true)

    if (newItem.alt === evt.target.alt) {
      return
    }

    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length < 1) {
      evt.target.appendChild(newItem)
    }
  })

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length < 1) {
      evt.target.style.outline = '4px dashed red'
    }

    if (evt.target.classList.contains('setup-artifacts-cell')) {
      evt.target.style.backgroundColor = 'yellow'
    }

    evt.preventDefault()
  })

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.outline = ''
    evt.target.style.backgroundColor = ''

    evt.preventDefault()
  })

  // var makeDraggable = function () {
  //   for (var i of artifacts) {
  //     i.draggable = true
  //   }
  // }

  // makeDraggable(artifacts)
  // makeDraggable(artifacts)
})()
