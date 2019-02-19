//Assigning variables to dom elements
var el = document.querySelector('path')
var textEl = document.querySelector('span')
var pathOver = el.getAttribute('data-over-path')
var pathOut = el.getAttribute('d')


// Over animation
function animateOver() {
  //Animates an element to the properties with the animation options.
  //"el" is a dom element (button svg path) passed as an argument.
  //dynamics.animate(el, properties, options)
  dynamics.animate(el, {
    //bends the button path
    d: pathOver,
    //color for the over animation
    fill: "#32CD32",
  }, {
    //animation type
    type: dynamics.bounce,
    //Realistic animation properties
    elasticity: 500,
    friction: 400,
    duration: 3000,
    //completion callback
    complete: animateOut
  })

  //Animates an element to the properties with the animation options.
  //textEL is a dom element passed as an argument.
  //dynamics.animate(el, properties, options)
  dynamics.animate(textEl, {
    //size increase of buttontext
    scale: 1.25,
    //rotation animation (text) (8*)
    rotateZ: 8
  }, {
    //animation type
    type: dynamics.forceWithGravity
  })
}



// Out animation
function animateOut() {
  //Animates an element to the properties with the animation options.
  //"el" is a dom element passed as an argument.
  //dynamics.animate(el, properties, options)
  dynamics.animate(el, {
    d: pathOut,
    fill: "#20B2AA",
  }, {
    //animation type
    type: dynamics.bounce,
    //Realistic animation properties
    elasticity: 1500,
    friction: 200
  })

  //Animates an element to the properties with the animation options.
  //textEL is a dom element passed as an argument.
  //dynamics.animate(el, properties, options)
  dynamics.animate(textEl, {
    //return button text size to initial size
    scale: 1,
  }, {
    //animation type
    type: dynamics.forceWithGravity,
    //completion callback with a function
    complete: function() {
      //setTimeout replaces requestAnimationFrame beacuse it can run in a background tab in the browser
      dynamics.setTimeout(animateOver)
    }
  })
}

// (call animateOver) Start the animation loop
animateOver()
