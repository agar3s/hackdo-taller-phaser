export default class Sample {
  constructor (props) {
    console.log('Sample.props', props)
  }

  print (message) {
    console.log(`printing message: ${message}`)
  }
}