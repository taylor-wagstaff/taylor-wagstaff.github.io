var imageUrlCollection = new Array(
  'https://d2w9rnfcy7mm78.cloudfront.net/20135989/original_4f8b921a89b85bfd4f38f0a19263a408.png?1675178083?bc=0',
  'https://d2w9rnfcy7mm78.cloudfront.net/9711151/original_5a60a451b02be6c3ba34f907c71620f6.png?1606768190?bc=0'
) //image URL collection
var parentElement = document.getElementById('comicPages')
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
