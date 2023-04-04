const roomImages = [
    'images/room.png',
    'images/room2.png',
    'images/bedroom.png',
    'images/bathroom.png',
    'images/kitchen.png',
    'images/music-room.png',
    'images/art-room.png',
    'images/playroom.png',
    'images/library.png',
    'images/office.png',
    'images/laundry-room.png',
    'images/conservatory.png',
    'images/nursery.png',
    'images/exercise-room.png',
    'images/pool-room.png',
    'images/dining-room.png',
    'images/cellar.png',
    'images/bunkroom.png',
    'images/game-room.png',
    'images/movie-theater.png',
    'images/tv-room.png',
    'images/tea-party-room.png',
    'images/clown-bedroom.png',
    'images/aquarium-room.png',
    'images/attic.png',
    'images/bathroom-2.png',
    'images/master-bedroom.png',
    'images/chapel-room.png',
    'images/christmas-room.png',
    'images/closet.png',
    'images/front-entrance.png',
    'images/dance-studio.png',
    'images/clock-room.png',
    'images/royal-room.png',
    'images/monster-bedroom.png',
    'images/garage.png',
    'images/birthday-party-room.png',
    'images/star-room.png',
    'images/hippie-bedroom.png',
    'images/shed.png',
    'images/art-gallery.png',
    'images/cleaning-closet.png',
    'images/mouse-closet.png',
    'images/dressing-room.png',
    'images/puzzle-room.png',
    'images/bar.png',
    'images/patio.png',
    'images/wig-room.png',
    'images/pirate-bathroom.png',
    'images/diner-room.png',
    'images/indoor-playground.png',
    'images/broken-room.png',
    'images/broken-room2.png',
    'images/patricks-room.png',
    'images/classroom.png',
    'images/laboratory.png',
    'images/arcade.png',
    'images/stranger-things.png',
    'images/elf-room.png',
    'images/almost-artsy-room.png',
    'images/brown-room.png',
]

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

// Fisher-Yates shuffle
function fisherYatesShuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  // swap elements array[i] and array[j]
  [array[i], array[j]] = [array[j], array[i]];
}
return array
}

