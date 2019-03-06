# API-Lab-Group-3 "Team Dynamics"
## We worked with http://dynamicsjs.com

Dynamics.js has built-in tools that allow us to create physics-based animations. We have explored the possibilities of the framework by manipulating existing examples.

## What does it look like?
Example 2 shows how to animate an SVG path but you can animate any JavaScript object. Below is an example of how to animate an object:

```javascript
var o = {
  number: 10,
  color: #"FFFFF",
  string: "10deg",
  array: [ 1, 10 ]
}
dynamics.animate (o, {
  number: 20,
  color: "#000000",
  string "90deg",
  array: [ -9, 99 ]
})
```

Once you have your variable and objects down, you can set a default animation type or simply create one with the built-in parameters: friction, duration, delay and many more; following the syntax "dynamics.animate(variable, properties, options)".

Creating physics-based animations can be useful in a many areas. Not only does it make your design feel more alive, but it also grabs the users' attention and your animated object stands out from the crowd. Implementing any animation into a website makes it look more professional and the fact that it's based on physics makes it natural to look at and possibly even to interact with.

## What we explored
We investigated the usefulness of the library for use both as a prototyping tool and also for use on website.

## Try it out
In order to try it out for yourself, visit http://dynamicsjs.com and follow the instructions or download this GitHub repository and try out our examples yourself. This repository uses a version of Dynamics.js that was generated in
February 2019.

## We made this
This project was made by Patrik Svensson, Richard M., Anton Forsell and Caleb Oyegun as a way to explore a JS library. We have no plans of maintaining this repository.
