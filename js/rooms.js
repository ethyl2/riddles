const roomImages = [
    'images/room.png',
    'images/collections-room.png',
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
    'images/cat-bathroom.png',
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
    'images/other-broken-room.png',
    'images/patricks-room.png',
    'images/classroom.png',
    'images/laboratory.png',
    'images/arcade.png',
    'images/stranger-things-room.png',
    'images/elf-room.png',
    'images/artsy-room.png',
    'images/brown-room.png',
    'images/basketball-court.png',
    'images/green-room.png',
    'images/red-room.png',
    'images/blue-room.png',
    'images/purple-room.png',
]

// Fisher-Yates shuffle
function fisherYatesShuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  // swap elements array[i] and array[j]
  [array[i], array[j]] = [array[j], array[i]];
}
return array
}

