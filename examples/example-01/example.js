var el = document.querySelector('#triangle')


// From purple to green
function animate1() {
  dynamics.animate(el, {
    rotateZ: 360,
    scale: 2.5,
  /*  borderBottomColor: '#4FDF086'*/
  }, {
    /*type: dynamics.spring,*/
    friction: 400,
    duration: 1000,
    complete: animate2
  })
}

// From green to purple
function animate2() {
  dynamics.animate(el, {
    rotateZ: 180,
    scale: 2.5,
  /*  borderBottomColor: '#CA35F6F'*/
  }, {
  /*  type: dynamics.spring,*/
    frequency: 600,
    friction: 400,
    duration: 1000,
    anticipationSize: 350,
    anticipationStrength: 400,
   complete: animate1
  })
}
