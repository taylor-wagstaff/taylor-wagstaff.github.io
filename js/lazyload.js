import { URL } from './url'

var imageUrlCollection = URL
console.log('url', URL)
var parentElement = document.getElementById('test')
for (var item = 0; item < imageUrlCollection.length; item++) {
  var image = document.createElement('img')
  image.id = item
  image.className = 'img'
  image.src = imageUrlCollection[item]
  parentElement.appendChild(image)
}

//////
document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages = document.querySelectorAll('img.lazy')
  var lazyloadThrottleTimeout

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout)
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src
          img.classList.remove('lazy')
        }
      })
      if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload)
        window.removeEventListener('resize', lazyload)
        window.removeEventListener('orientationChange', lazyload)
      }
    }, 20)
  }

  document.addEventListener('scroll', lazyload)
  window.addEventListener('resize', lazyload)
  window.addEventListener('orientationChange', lazyload)
})
