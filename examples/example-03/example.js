var dots = document.querySelectorAll('.dot')
var colors = ['#168BF2', '#00FFFF', '#55D968', '#F2C12E', '#F23054']

// Start the 3 dot animations with different delays
function animateDots() {
  for(var i=0; i<dots.length; i++) {
    dynamics.animate(dots[i], {
      translateY: -150,
      backgroundColor: colors[i]
    }, {
      type: dynamics.forceWithGravity,
      bounciness: 200,
      elasticity: 100,
      duration: 3000,
      delay: i * 150
    })
  }

  dynamics.setTimeout(animateDots, 3500)
}
