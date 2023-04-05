// GET THE ROOM
// Read the randomized room index array from localStorage.
let randomizedRoomIndexes = JSON.parse(window.localStorage.getItem("rooms_in_the_dark")) || []
if (randomizedRoomIndexes.length === 0) {
  // This is either the first time we visit this page or we are out of rooms, so we must create a new randomized storage
  randomizedRoomIndexes = getRandomRoomIndexList()
}
// Set the current room from the first index in the randomized array
scene.style.backgroundImage = `url('${roomImages[randomizedRoomIndexes[0]]}')`
// Remove the current room index
randomizedRoomIndexes.splice(0, 1)
// Save new array to localStorage for next time
window.localStorage.setItem("rooms_in_the_dark", JSON.stringify(randomizedRoomIndexes))

// Function for creating a list of randomized indexes of rooms
function getRandomRoomIndexList() {
  let indexArray = [...Array(roomImages.length).keys()]
  fisherYatesShuffle(indexArray)
  return indexArray
}