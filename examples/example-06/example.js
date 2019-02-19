
var nav = document.querySelector('nav')
var items = document.querySelectorAll('li')

function show() {
  // Animate the popover
  dynamics.animate(nav, {
    opacity: 1,
    scale: 1
  }, {
    type: dynamics.spring,
    frequency: 200,
    friction: 270,
    duration: 800
  })

  // Animate each line individually
  for(var i=0; i<items.length; i++) {
    var item = items[i]
    // Define initial properties
    dynamics.css(item, {
      opacity: 0,
      translateY: 20
    })

    // Animate to final properties
    dynamics.animate(item, {
      opacity: 1,
      translateY: 0
    }, {
      type: dynamics.spring,
      frequency: 300,
      friction: 435,
      duration: 1000,
      delay: 100 + i * 40
    })
  }

  dynamics.setTimeout(hide, 2000)
}

function hide() {
  // Animate the popover
  dynamics.animate(nav, {
    opacity: 0,
    scale: .1
  }, {
    type: dynamics.easeInOut,
    duration: 300,
    friction: 100
  })

  dynamics.setTimeout(show, 1000)
}

show()
