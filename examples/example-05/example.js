var pin = document.querySelector('.pin')
var svg = document.querySelector('.pin svg')
var moveAmount = -350

function horizontalBounce() {
  // The bounce animation will return to the original state
  // In this case, it will go from 0deg to -45deg to 0deg
  dynamics.animate(pin, {
    rotateZ: -45,
  }, {
    type: dynamics.bounce,
    duration: 1800,
    complete: verticalBounce
  })
}

function verticalBounce() {
  // We animate the two elements (svg, pin) independently
  dynamics.animate(svg, {
    scaleY: 0.1
  }, {
    type: dynamics.bounce,
    duration: 800,
    bounciness: 3
  })

  // Use the delay option to delay your animations
  dynamics.animate(pin, {
    translateY: -60
  }, {
    type: dynamics.forceWithGravity,
    bounciness: 0,
    duration: 500,
    delay: 150
  })

  dynamics.animate(svg, {
    scaleY: 0.8
  }, {
    type: dynamics.bounce,
    duration: 800,
    bounciness: 600,
    delay: 650,
    complete: horizontalMove
  })
}

function horizontalMove() {
  dynamics.animate(pin, {
    translateX: moveAmount
  }, {
    type: dynamics.bounce,
    duration: 1500,
    delay: 500,
    complete: horizontalBounce
  })
  moveAmount = -moveAmount;
}
