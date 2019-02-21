// Assigning variables to dom elements
var dots = document.querySelectorAll('.dot')
var colors = ['#168BF2', '#00FFFF', '#55D968', '#F2C12E', '#F23054']

// Start the 5 squares animations
function animateDots() {
  for(var i=0; i<dots.length; i++) {
    dynamics.animate(dots[i], {
      // Deciding the travel direction (- value is up, + is down) and distance of travel
      translateY: -150,
      backgroundColor: colors[i]
    }, {
      // Choosing type of animation
      type: dynamics.forceWithGravity,
      // Implementing realistic animation properties
      bounciness: 200,
      elasticity: 100,
      // Setting the global animation runtime to 3 seconds
      duration: 3000,
      // Adding a delay to the animation of each square
      delay: i * 150
    })
  }

  // Replacing animateDots with setTimeout
  dynamics.setTimeout(animateDots, 3500)
}
