const { events } = require('brigadier')

events.on("myevent", (brigadeEvent, project) => {
  console.log("Hello world!")
})
