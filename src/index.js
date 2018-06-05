
let element = document.createElement('h1')

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
  element.innerHTML = 'Looks like we are in development mode!'
} else {
  element.innerHTML = 'Looks like we are in production mode!'
  console.log('Looks like we are in production mode!')
}

document.body.appendChild(element)

import Sample from './scenes/sample'

let instance = new Sample({a: 'nothing', b: 'something'})
instance.print('that thingy is pretty!')