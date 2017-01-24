var pictures = document.querySelector('.pictures')
var template = document.querySelector('#picture-template')

var ESC_KEYCODE = 27
var ENTER_KEYCODE = 13
var AMOUNT_PHOTOS = 25

var getRandomPhotos = function (AMOUNT_PHOTOS) {
  var photos = []

  var commentTexts = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ]

  var getRandomArrElem = function (arr) {
    var randomNum = Math.floor(Math.random() * (arr.length))
    return arr[randomNum]
  }

  for (var i = 0; i < AMOUNT_PHOTOS; i++) {
    var comment = []
    comment.push(getRandomArrElem(commentTexts))
    comment.push(getRandomArrElem(commentTexts))
    var photo = {}
    photo.url = 'photos/' + (i + 1) + '.jpg'
    photo.likes = Math.floor(Math.random() * (200 - 15)) + 15
    photo.comments = comment
    photos.push(photo)
  }
  return photos
}

var createElem = function (photo) {
  var elem = template.content.cloneNode(true)
  elem.querySelector('img').src = photo.url
  elem.querySelector('.picture-likes').textContent = photo.likes
  elem.querySelector('.picture-comments').textContent = photo.comments.length
  // console.log(photo.comments.length)

  return elem
}

var renderPhotos = function (AMOUNT_PHOTOS) {
  var fragment = document.createDocumentFragment()
  for (var i = 0; i < AMOUNT_PHOTOS; i++) {
    fragment.appendChild(createElem(photos[i]))
  }

  pictures.appendChild(fragment)
}

var photos = getRandomPhotos(AMOUNT_PHOTOS)
renderPhotos(AMOUNT_PHOTOS)

// ----------------------- Events functions --------------

// own EventListener

var ownAddEventListener = function (scope, type, handler, capture) {
  scope.addEventListener(type, handler, capture)
  return function () {
    return scope.removeEventListener(type, handler, capture)
  }
}

var onEscPress = function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    closePopup()
  }
}

var openPopup = function (openElem, closeElem) {
  openElem.classList.remove('hidden')
  var deleteEsc = ownAddEventListener(elem, 'keydown', function (elem) {
    onEscPress()
  })
}

var closePopup = function (elem) {
  elem.classList.add('hidden')

  document.removeEventListener('keydown', onEscPress)
}

// ------------------------ events -----------------------

// ------------------------ gallery events ---------------
var galleryOverlay = document.querySelector('.gallery-overlay')      // фото из галереи на весь экран
var galleryClose = document.querySelector('.gallery-overlay-close') // крестик

var renderGallery = function (event, stats, img) {
  galleryOverlay.querySelector('.gallery-overlay-image').src = img
  galleryOverlay.querySelector('.likes-count').textContent = stats.querySelector('.picture-likes').textContent
  galleryOverlay.querySelector('.comments-count').textContent = stats.querySelector('.picture-comments').textContent
  openPopup(galleryOverlay)
}

var onPictureClick = function (event) {
  event.preventDefault()
  var img = event.target.src
  var stats = event.target.nextSibling.nextSibling
  if (event.target.tagName === 'IMG') {
    renderGallery(event, stats, img)
  }
}

galleryClose.addEventListener('click', function () {
  closePopup(galleryOverlay)
})

galleryClose.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup(galleryOverlay)
  }
})

pictures.addEventListener('click', onPictureClick)

pictures.addEventListener('keydown', function (event) {
  if (event.target.classList.contains('picture')) {
    if (event.keyCode === ENTER_KEYCODE) {
      var stats = event.target.querySelector('.picture-stats')
      var img = event.target.querySelector('.picture img').src

      console.log(img)
      renderGallery(event, stats, img)
    }
  }
})

// ------------------------ download photo -----------------------

var uploadSelectImage = document.querySelector('#upload-select-image')
var uploadFile = uploadSelectImage.querySelector('#upload-file')
var uploadOverlay = uploadSelectImage.querySelector('.upload-overlay')
var uploadCancel = uploadSelectImage.querySelector('.upload-form-cancel')

onEscPress = getHandleEventObj(uploadCancel)

uploadFile.addEventListener('change', function (event) {
  openPopup(uploadOverlay)
})
