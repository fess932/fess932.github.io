(function () {
  // ================ Close - Open =============================
  var setup = document.querySelector('.setup')
  var setupOpen = document.querySelector('.setup-open')
  var setupClose = document.querySelector('.setup-close')

  var onPopupEscPress = function (event) {
    if (event.target.tagName !== 'INPUT') {
      window.util.isEscEvent(event, closePopup)
    }
  }

  var openPopup = function (event) {
    setup.classList.remove('hidden')
    document.addEventListener('keydown', onPopupEscPress)
  }

  var closePopup = function (event) {
    setup.classList.add('hidden')
    setup.style.top = ''
    setup.style.left = ''
    document.removeEventListener('keydown', onPopupEscPress)
  }

  // --------------- Mouse open - close
  setupOpen.addEventListener('click', function (clickEvt) {
    openPopup()
  })

  setupClose.addEventListener('click', function (clickEvt) {
    closePopup()
  })

  // -------------  Enter open - close
  setupOpen.addEventListener('keydown', function (keyEvt) {
    window.util.isEnterEvent(keyEvt, openPopup)
  })

  setupClose.addEventListener('keydown', function (keyEvt) {
    window.util.isEnterEvent(keyEvt, closePopup)
  })

  // ---------------- Draggable dialog ------------------
  var dialogHandle = document.querySelector('.upload')
  var setupPlayer = document.querySelector('.setup')

  dialogHandle.addEventListener('click', function (event) {
    event.preventDefault()
  })

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault()

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    }

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault()

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      }

      setupPlayer.style.top = (setupPlayer.offsetTop - shift.y) + 'px'
      setupPlayer.style.left = (setupPlayer.offsetLeft - shift.x) + 'px'
    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault()

      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  })
})()
