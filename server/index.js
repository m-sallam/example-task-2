const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const exampleData = require('../data/tracking.json')

app.get('/', (req, res) => {
  // TODO(Task 1): Split tracking data into trip segments for example by using the time property.

  // sort the data... it looks sorted but just to be sure
  exampleData.sort((location1, location2) => new Date(location1.time) - new Date(location2.time))
  exampleData.reverse()

  const trips = []

  // split trips by an hour, assuming there can be more than one trip per day
  const hour = 3600000 // millisecond in an hour

  // splitting location based on one hour time difference
  exampleData.forEach((location, index) => {
    if (exampleData[index - 1]) {
      if ((new Date(exampleData[index - 1].time) - new Date(location.time)) > hour) {
        trips.push([location]) // make new list of the different time locations
      } else {
        trips[trips.length - 1].push(location)
      }
    } else {
      trips.push([location]) // first location in the list
    }
  })

  res.send(trips)
})

app.get('/location/:when', (req, res) => {
  // TODO(Task 2): Return the tracking data closest to `req.params.when` from `exampleData`.
  res.send({})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
