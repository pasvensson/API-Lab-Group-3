var el = document.querySelector('#square')


// From yellow to red
function animate1() {
  dynamics.animate(el, {
    rotateZ: 360,
    scale: 2.5,
    borderBottomColor: '#FFDF00'
  }, {
    type: dynamics.spring,
    friction: 400,
    duration: 1000,
    complete: animate2
  })
}

// From red to yellow
function animate2() {
  dynamics.animate(el, {
    rotateZ: 180,
    scale: 1.5,
   borderBottomColor: '#FF0000'
  }, {
    type: dynamics.string,
    frequency: 600,
    friction: 400,
    duration: 1000,
    anticipationSize: 350,
    anticipationStrength: 400,
   complete: animate1
  })
}
