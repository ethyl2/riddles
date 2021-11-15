// Add more riddles here
const riddles = [
  {
      question: "What number other than 2 equals 4 when squared?",
      answer: ["-2", "negative two"]
  },
  {
      question: "What number other than 3 equals 9 when squared?",
      answer: ["-3", "negative three"]
  },
  {
      question: "What word starts with 'e' and ends with 'e', but usually has only one letter in it?",
      answer: ['envelope']
  },
  {
      question: "What's tall when it's young and short when it's old?",
      answer: ['candle']
  },
  {
      question: "What gets wet when drying?",
      answer: ['towel']
  },
  {
      question: "What's black when it's clean but white when it's dirty?",
      answer: ['chalkboard', 'blackboard']
  },
  {
      question: "Where does today come before yesterday?",
      answer: ['dictionary']
  },
  {
      question: "What lets you look right through a wall?",
      answer: ['window']
  },
  {
      question: "What goes up and down but doesn't move?",
      answer: ['staircase', 'stair', 'stairs']
  },
  {
      question: "What has one eye but can't see?",
      answer: ['needle', 'storm']
  },
  {
    question: "What two things are moving left to right, right now?",
    answer: ['eyes', 'my eyes']
  },
  {
      question: "What has many teeth but can't bite?",
      answer: ['comb']
  },
  {
      question: "What has words but never speaks?",
      answer: ['book']
  },
    {
        question: "What hurts without moving, poisons without touching, bears the truth and sometimes lies?",
        answer: ['words']
    },
  {
      question: "What has a head and a tail but no body?",
      answer: ['coin', 'nickel', 'dime', 'quarter', 'penny']
  },
  {
      question: "What is the end of everything?",
      answer: ['g']
  },
  {
    question: "What word in the dictionary is spelled wrong?",
    answer: ['wrong']
  },
  {
    question: "What word in the dictionary is always pronounced wrong?",
    answer: ['wrong']
  },
  {
      question: "What can go up a chimney down, but can't go down a chimney up?",
      answer: ['umbrella']
  },
  {
      question: "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
      answer: ['r']
  },
  {
      question: "What English word has three consecutive double letters? ",
      answer: ['bookkeeper']
  },
  {
      question: "What disappears as soon as you say its name? ",
      answer: ['silence']
  },
  {
      question: "What has a neck but no head?",
      answer: ['bottle']
  },
  {
      question: "What has to be broken before you can use it?",
      answer: ['egg']
  },
  {
      question: "What kind of room has no windows or doors?",
      answer: ['mushroom']
  },
  {
      question: "What is the richest nut?",
      answer: ['cashew']
  },
  {
      question: "What is something that the more you take, the more you leave behind?",
      answer: ['footstep' , 'footsteps']
  },
  {
      question: "What word becomes shorter if you add 2 letters to it?",
      answer: ['short']
  },
  {
    question: "What would a janitor say if he jumped out of a closet?",
    answer: ['supplies', 'supplies!']
  },
  {
    question: "What kind of sweets do geologists like best?",
    answer: ['rock candy']
  },
  {
      question: "Where can you find cities, streets, parks and shops but no people?",
      answer: ['map']
  },
  {
      question: "What can go through towns and over mountains, but never moves?",
      answer: ['road', 'street']
  },
    {
        question: "What rock group has four men who don't sing?",
        answer: ['mount rushmore', 'mt rushmore']
    },

  {
    question: "What can go through a mountain, but never moves?",
    answer: ['tunnel']
  },
  {
      question: "What has lots of holes but still can hold water?",
      answer: ['sponge']
  },
  {
      question: "What's filled with keys but can't open a lock?",
      answer: ['piano', 'keyboard']
  },
  {
      question: "What contains 26 letters but only has 3 syllables?",
      answer: ['alphabet']
  },
  {
      question: "What can have lots of eyes but can't see?",
      answer: ['potato']
  },
  {
      question: "What has branches, but no fruit, trunk or leaves?",
      answer: ['bank', 'git']
  },
  {
      question: "What has hands but can't clap?",
      answer: ['clock']
  },
    {
      question: "If you take away one hand, some will remain. What am I?",
      answer: ['handsome']
    },
  {
      question: "What shows up once in June, twice in November, but never in May?",
      answer: ['e']
  },
  {
      question: "What can be broken, even if it is never picked up or touched?",
      answer: ['promise']
  },
  {
      question: "What can run all around a backyard yet never moves?",
      answer: ['fence']
  },
    {
      question: "What is always running yet never gets tired or hot?",
      answer: ['fridge, refrigerator']
    },
  {
      question: "What kind of cup can't hold water?",
      answer: ['hiccup']
  },
  {
      question: "What kind of band doesn't play music?",
      answer: ['headband', 'rubber band', 'hair band']
  },
  {
      question: "What can fill up a room but takes up no space?",
      answer: ['light', 'sound', 'noise']
  },
  {
      question: "What runs but doesn't walk, has a mouth but doesn't talk, has a head but never weeps, and has a bed but never sleeps?",
      answer: ['river']
  },
  {
      question: "What five-letter word has one left when two are removed?",
      answer: ['stone', 'toner', 'loner', 'alone']
  },
  {
      question: "What thing ceases to exist when you share it?",
      answer: ['secret']
  },
  {
      question: "What kind of coat is always wet when you put it on?",
      answer: ['paint']
  },
  {
      question: "What makes you young?",
      answer: ['ng']
  },
  {
      question: "What looks the same upside-down?",
      answer: ['swims']
  },
  {
      question: "What kind of dress can't be worn?",
      answer: ['address']
  },
  {
      question: 'What gets more rings as it gets older?',
      answer: ['tree', 'tree trunk']
  },
  {
    question: "What has rings made or rock and ice that can't be worn?",
    answer: [ 'saturn']
  },
  {
      question: 'What is at the end of a rainbow?',
      answer: ['w']
  },
  {
      question: 'What has 3 letters and starts with gas?',
      answer: ['car']
  },
  {
      question: `What has a heart that doesn't beat?`,
      answer: ['artichoke']
  },
  {
      question: "What is something we do everyday, but backwards is something most people hate?",
      answer: ['live']
  },
  {
      question: "What only lies down once -- when it dies?",
      answer: ['tree']
  },
  {
      question: "What musical instrument doesn't tell the truth?",
      answer: ['lyre']
  },
  {
      question: "What has some remain, when you take away the whole?",
      answer: ['wholesome']
  },
  {
      question: "What five-letter word stays the same if you take away the first, third, and last letter?",
      answer: ['empty']
  },
  {
      question: "What starts off dry and light but comes out wet and heavy?",
      answer: ['teabag']
  },
  {
      question: "What has blades but isn't used for cutting?",
      answer: ['fan']
  },
  {
      question: "What is found in Saturn, Venus, Uranus, and Mars, but not Earth?",
      answer: ['s']
  },
  {
      question: "What is bought for eating but never eaten?",
      answer: ['plate', 'silverware', 'cutlery', 'utensils', 'spoon', 'fork', 'knife', 'bowl']
  },
  {
      question: "What has a tail but no wings and can fly?",
      answer: ['kite']
  },
  {
      question: "What has many needles but can't stitch?",
      answer: ['pine', 'conifer', 'pine tree']
  },
  {
      question: "What cut in half is nothing, but turned on its side is everything?",
      answer: ['eight', '8']
  },
  {
      question: "What animal is named after the animal it eats?",
      answer: ['anteater']
  },
  {
      question: "What flies when it's born, lies when it's alive, and runs when it's dead?",
      answer: ['snowflake', 'snow']
  },
  {
      question: "What is heavy forwards but not backwards?",
      answer: ['ton']
  },
  {
      question: "What tastes better than it smells?",
      answer: ['tongue']
  },
  {
      question: "What grows when it eats but dies when it drinks?",
      answer: ['fire']
  },
    {
      question: "What has a stem but not a flower, and has a foot but cannot hop?",
      answer: ['wine glass', 'goblet', 'flute']
    },
  {
      question: "What spends a lot of time on the ground but never gets dirty?",
      answer: ['shadow']
  },
  {
      question: "How many months in a year have twenty-eight days?",
      answer: ['twelve', '12']
  },
  {
      question: "What part of a chicken has the most feathers?",
      answer: ['outside']
  },
  {
      question: "What part of a cat has the most fur?",
      answer: ['outside']
  },
  {
      question: "If two is company and three a crowd, what is four and five?",
      answer: ['nine', '9']
  },
  {
      question: "What can you give a bald man that he will never part with?",
      answer: ['comb']
  },
  {
      question: "What kind of vegetable needs a plumber?",
      answer: ['leek']
  },
  {
    question: "What's the worst vegetable to have on a ship?",
    answer: ['leek']
  },
  {
      question: "What weightless thing makes a bucket lighter?",
      answer: ['hole']
  },
  {
      question: "What has only 2 words but many, many letters?",
      answer: ['post office']
  },
  {
      question: "What has only 1 word but can have many, many letters?",
      answer: ['mailbox']
  },
  {
      question: "What can you see in water that never gets wet?",
      answer: ['reflection']
  },
  {
    question: "What is a lifeguard's favorite game?",
    answer: ['pool']
  },
  {
      question: "Where can you finish a book without finishing a sentence?",
      answer: ['prison', 'jail']
  },
  {
      question: "If Apple made a house, what would be missing?",
      answer: ['windows']
  },
  {
      question: "What can't be burned in a fire or drowned in water?",
      answer: ['ice']
  },
  {
      question: "What part of a boat does a shopaholic like the most?",
      answer: ['sail', 'sale']
  },
  {
      question: "What can fly but has no wings and can cry but has no eyes?",
      answer: ['cloud']
  },
  {
      question: "What kind of flowers can be found between the nose and chin?",
      answer: ['tulips', 'two lips', '2 lips']
  },
  {
      question: "What item is considered by many to be dirty, yet few people want to live without it?",
      answer: ['toilet', 'potty']
  },
  {
      question: "What can you hold in your left hand but not your right?",
      answer: ['right elbow']
  },
  {
      question: "What can a child make that no one can see?",
      answer: ['noise', 'sound']
  },
  {
      question: "What is an insect's favorite sport?",
      answer: ['cricket']
  },
  {
      question: "What has no life, yet can die?",
      answer: ['battery']
  },
  {
      question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
      answer: ['m']
  },
  {
      question: "What’s starts out black, turns red when used, and white when you’re all through with it?",
      answer: ['charcoal', 'coal']
  },
  {
      question: "What’s the most curious letter?",
      answer: ['y']
  },
  {
      question: "What kind of cheese is made backwards?",
      answer: ['edam']
  },
  {
      question: "What has a head but no body, leaves but no branches?",
      answer: ['lettuce', 'cabbage']
  },
  {
      question: "What does December have that other months don't have?",
      answer: ['d']
  },
  {
      question: "What do you add to make one disappear?",
      answer: ['g', 'n']
  },
  {
      question: "How many cats can you put in an empty box?",
      answer: ['one', 'zero', '1', '0']
  },
  {
      question: "What can have one head, one foot, and four legs?",
      answer: ['bed']
  },
    {
      question: "What do you call a bear without an ear?",
      answer: ['b', 'bee']
    },
    {
      question: "What has hundreds of ears but can't hear a thing?",
      answer: ['cornfield']
    },
    {
        question: "What do you call a bear without teeth?",
        answer: ['gummy bear', 'gummybear', 'gummi bear', 'gummibear']
    },
    {
        question: "What do you throw out to use it, but take in when you don't want to use it?",
        answer: ['anchor']
    },
    {
        question: "Who shaves several times a day but still has a beard?",
        answer: ['barber']
    },
    {
      question: "What’s the first thing a gardener puts in their garden at the beginning of the year?",
      answer: ['foot']
    },
    {
        question: "What can you hold without ever touching it?",
        answer: ['conversation']
    },
    {
        question: "What can answer in any language?",
        answer: ['echo']
    },
    {
        question: "What speaks without a mouth?",
        answer: ['echo']
    },
    {
        question: "Many have heard me; no one has seen me. I won't speak back until spoken to. What am I?",
        answer: ['echo']
    },
    {
      question: "What falls down from great heights but is never hurt?",
      answer: ['rain']
    },
  {
      question: "What can you see twice in a week or once in a year – but not once in a million months?",
      answer: ['e']
  },
  {
      question: "Where does Friday come before Thursday?",
      answer: ['dictionary']
  },
  {
      question: "What goes up when water comes down?",
      answer: ['umbrella']
  },
  {
      question: "What kind of table can you eat?",
      answer: ['vegetable']
  },
  {
      question: "What might have feathers but never any wings?",
      answer: ['pillow']
  },
  {
    question: "What has toes but no feet or legs?",
    answer: ['tomatoes']
  },
  {
      question: "What kind of nail is a pain to hammer into wood?",
      answer: ['fingernail', 'toenail']
  },
  {
    question: "What can point in every direction but can't reach a destination by itself?",
    answer: ['finger']
  },
  {
    question: "What doesn't have flesh, feathers, scales, or bone, but have fingers & thumbs of their own?",
    answer: ['glove', 'gloves']
  },
  {
      question: "What is at the center of Earth?",
      answer: ['r']
  },
  {
      question: "What type of building has the most stories?",
      answer: ['library']
  },
  {
      question: "What word has kst in the middle, in the beginning, and at the end?",
      answer: ['inkstand']
  },
  {
      question: "What is always in front of you but cannot be seen?",
      answer: ['future']
  },
  {
      question: "What is as light as a feather but the strongest man cannot hold for long?",
      answer: ['breath']
  },
  {
    question: "What is harder to catch the faster you run?",
    answer: ['breath', 'your breath']
  },
  {
      question: "Take one out and scratch my head I am now black but once was red. What am I?",
      answer: ['match']
  },
    {
      question: "What is shorter than the rest, but when you’re happy, you raise it like it’s the best?",
      answer: ['thumb']
  },
  {
      question: "The more there is, the less you see. What am I?",
      answer: ['darkness']
  },
  {
      question: "A word I know, six letters it contains, removes one letter, and twelve remains. What am I?",
      answer: ['dozens']
  },
  {
      question: "What is it that no one wants, but no one wants to lose?",
      answer: ['lawsuit']
  },
  {
      question: "I have many faces, expressions, and emotions, and I am usually right at your fingertips. What am I?",
      answer: ['emojis']
  },
  {
      question: "What is full of holes but can be as strong as steel?",
      answer: ['chain']
  },
  {
      question: "What will always come, but never arrives today?",
      answer: ['tomorrow']
  },
  {
      question: "What has 88 teeth but never brushes them?",
      answer: ['piano']
  },
    {
      question: "What has lots of hammers but no nails?",
      answer: ['piano']
    },
    {
      question: "What gets picked at, has a small head and a long neck?",
      answer: ['guitar', 'banjo']
    },
  {
      question: "What grows up at the same time it grows down?",
      answer: ['goose', 'gosling', 'duck', 'duckling', 'bird', 'dinosaur']
  },
  {
      question: "What has three feet but can't walk?",
      answer: ['yardstick']
  },
  {
      question: "What is the center of gravity?",
      answer: ['v']
  },
  {
      question: "What letter has the most water?",
      answer: ['c']
  },
  {
      question: "What loses its head in the morning but gets it back at night?",
      answer: ['pillow']
  },
  {
      question: "What gets bigger the more you take away?",
      answer: ['hole']
  },
  {
      question: "What could a pants pocket have and still be empty?",
      answer: ['hole']
  },
  {
      question: "What can be cracked, made, told, and played?",
      answer: ['joke']
  },
  {
      question: "What 3-letter seed sounds the same if you take away two letters?",
      answer: ['pea']
  },
  {
      question: "What is lighter than air but can't be successfully lifted by a hundred people?",
      answer: ['bubble']
  },
  {
      question: "What is always around you but often forgotten, pure and clean but sometimes rotten?",
      answer: ['air']
  },
  {
      question: "What can run while standing still?",
      answer: ['hourglass', 'timer']
  },
  {
      question: "What non-living thing has fangs and like to bite?",
      answer: ['stapler']
  },
  {
      question: "What reindeer might be seen on Feb 14?",
      answer: ['cupid']
  },
  {
      question: "What kind of key doesn't open doors but might fill your stomach?",
      answer: ['turkey']
  },
  {
      question: "What's at the end of Christmas?",
      answer: ['s']
  },
  {
      question: "What gets rid of its neighbor's mistakes?",
      answer: ['eraser']
  },
  {
      question: "What shrinks each time it takes a bath?",
      answer: ['soap', 'bar of soap']
  },
  {
    question: "What can be given, or taken, but usually not moved?",
    answer: ['bath', 'shower', 'advice']
  },
  {
      question: "What is round on both sides and high in the middle?",
      answer: ['ohio', 'onto', 'oleo', 'outgo', 'ovolo', 'ortho', 'outdo', 'outro', 'overdo', 'ossobuco', 'ocotillo', 'obbligato']
  },
  {
      question: "What takes off its clothes when you put on your clothes?",
      answer: ['hanger']
  },
  {
      question: "What is born in the ocean but disappears when it falls back into water?",
      answer: ['salt']
  },
  {
      question: "What is gentle enough to soothe skin, light enough to fly in the sky, yet strong enough to crack rocks?",
      answer: ['water']
  },
  {
    question: "What washes up on tiny beaches?",
    answer: ['microwaves']
  },
  {
      question: "What can turn everything around but can't move?",
      answer: ['mirror']
  },
  {
    question: "What makes two people out of one?",
    answer: ['mirror']
  },
  {
    question: "What is somebody if you look in its face, but is nobody if you look at its back?",
    answer: ['mirror']
  },
  {
      question: "What causes damage yet is used by small children?",
      answer: ['scissors']
  },
    {
        question: "Poke your fingers in my eyes and I will open wide my jaws. What am I?",
        answer: ['scissors']
    },
  {
      question: "If there are four apples and you take away three, how many do you have?",
      answer: ['three', '3']
  },
  {
      question: "What should you do with a dead chemist?",
      answer: ['barium']
  },
  {
      question: "What's the best name for a lawyer?",
      answer: ['sue']
  },
  {
      question: "On what type of road does a ghost linger?",
      answer: ['dead end']
  },
  {
      question: "What is a body with a leg, an arm, and a head, but looks naked and bare?",
      answer: ['skeleton']
  },
    {
      question: "What is a skeleton's favorite musical instrument?",
      answer: ['trombone']
    },
    {
      question: "What do skeletons buy at grocery stores?",
      answer: ['spare ribs']
    },
  {
    question: "What kind of monster loves to disco?",
    answer: ['boogieman']
  },
  {
    question: "What can you use to fix a jack-o-lantern?",
    answer: ['pumpkin patch']
  },
  {
      question: "What is round and violent?",
      answer: ['vicious circle']
  },
  {
      question: "What do you find in the middle of nowhere?",
      answer: ['h']
  },
  {
      question: "How long is the answer to this question?",
      answer: ['how long']
  },
    {
        question: "What do you call 2 witches who live together?",
        answer: ['broommates']
    },
    {
      question: "What does a witch use to tell the time?",
      answer: ['witch watch', 'witchwatch']
    },
    {
      question: "What do take away to make a witch itch?",
      answer: ['w']
    },
    {
      question: "What do you call a nervous witch?",
      answer: ['twitch']
    },
    {
      question: "What do witches call for in hotel rooms?",
      answer: ['broom service']
    },
    {
      question: "What do birds give out on Halloween?",
      answer: ['tweets', 'tweet']
    },
  {
      question: "What type of dance event do cows attend?",
      answer: ['meatball']
  },
  {
    question: "How do you spell 'cow' with 13 letters?",
    answer: ['see o double you', 'seeodoubleyou']
  },
  {
    question: "What type of person scares Snap, Crackle, & Pop?",
    answer: ['cereal killer']
  },
  {
      question: "With what does the sky pay its bills?",
      answer: ['raincheck']
  },
  {
    question: "What has no feet, hands, or wings, yet climbs to the sky?",
    answer: ['smoke']
  },
  {
      question: "What do you call a broken can opener?",
      answer: ["can't opener", 'cannot opener']
  },
  {
      question: "What do elves do after school?",
      answer: ['gnomework']
  },
  {
      question: "What is cheese that doesn't belong to you?",
      answer: ['nacho cheese']
  },
  {
      question: "What is a cow that picks on other cows?",
      answer: ['bully']
  },
  {
      question: "How do you put an astronaut baby to sleep?",
      answer: ['rocket']
  },
  {
      question: "What kind of tree fits in your hand?",
      answer: ['palm tree', 'palm']
  },
  {
      question: "Where do vans go when it gets hot?",
      answer: ['carpool']
  },
  {
      question: "What do you use as bait to catch a school of fish?",
      answer: ['bookworm']
  },
  {
      question: "What do ghosts put on their bagels?",
      answer: ['scream cheese']
  },
    {
      question: "Where do young ghosts go during the day?",
      answer: ['dayscare']
    },
  {
      question: "What room do ghosts avoid?",
      answer: ['living room']
  },
  {
      question: "What type of key opens a banana?",
      answer: ['monkey']
  },
  {
      question: "What's the strongest creature in the sea?",
      answer: ['mussel']
  },
  {
      question: "What do snowmen eat for breakfast?",
      answer: ['snowflakes', 'frosted flakes']
  },
  {
    question: "What do you call a snowman in the summer?",
    answer: ['puddle', 'water']
  },
  {
    question: "What do you get when you cross a snowman & a vampire?",
    answer: ['frostbite']
  },
  {
    question: "When a band plays in a thunderstorm, who's most likely to get hit by lightning?",
    answer: ['conductor']
  },
  {
    question: "What is a balloon's least favorite type of music?",
    answer: ['pop']
  },
  {
    question: "What is a mummy's favorite type of music?",
    answer: ['wrap']
  },
  {
    question: "What is a wrapped but is not a gift?",
    answer: ['mummy']
  },
  {
    question: "What do you call a piano-playing goat?",
    answer: ['billy joel']
  },
  {
    question: "What's the most musical part of a fish'?",
    answer: ['scales', 'scale']
  },
  {
    question: "What do you call a musical pickle?",
    answer: ['piccolo']
  },
  {
      question: "Where do ghosts, mummies, & zombies like to swim?",
      answer: ['dead sea', 'the dead sea', 'erie', 'lake erie']
    },
  {
      question: "Who works when they play, and play when they work?",
      answer: ['musician', 'musicians', 'athletes', 'athlete', 'baseball player', 'baseball players', 'soccer player', 'soccer players', 'player', 'players']
    },
  {
    question: "What is a rabbit's favorite type of music?",
    answer: ['hip hop']
  },
  {
      question: "What do nuts say when they sneeze?",
      answer: ['cashew']
  },
  {
      question: "What does a shark eat with peanut butter?",
      answer: ['jellyfish']
  },
  {
      question: "What do you call a fairy who needs a bath?",
      answer: ['stinkerbell']
  },
  {
    question: "What kind of ship has 2 mates but no captain?",
    answer: ['relationship', 'friendship']
  },
  {
    question: "What kind of river can you cross without a boat or bridge, & without getting wet?",
    answer: ['frozen', 'frozen river', 'river that is frozen', 'river that\'s frozen']
  },
  {
    question: "You go at red and stop at green. What am I?",
    answer: ['watermelon']
  },
  {
    question: "What is higher without a head?",
    answer: ['pillow']
  },
  {
    question: "What is easy to life but hard to throw?",
    answer: ['feather', 'paper', 'leaf']
  },
  {
    question: "What is the one thing that everyone can agree is between heaven and earth?",
    answer: ['and']
  },
  {
      question: "What never stays full for long, has a dark side, and is rarely visited?",
      answer: ['moon']
  },
  {
    question: "If you drop a yellow hat in the Red Sea, what does it become?",
    answer: ['wet']
  },
  {
    question: "What color is the wind?",
    answer: ['blew']
  },
  {
    question: "What do you answer, though it doesn't ask you questions?",
    answer: ['telephone', 'phone']
  },
  {
    question: "If fish lived on land, in which country would they reside?",
    answer: ['finland']
  },
  {
    question: "What is full during the day but empty at night?",
    answer: ['shoes']
  },
  {
    question: "What has a tongue, and though it cannot walk, it's known to get around?",
    answer: ['shoe']
  },
  {
    question: "What might Sir Lancelot wear to bed?",
    answer: ['knight gown', 'knightgown']
  },
  {
    question: "What is the oldest tree named?",
    answer: ['elder']
  },
  {
    question: "What does a stone become when you put it in water?",
    answer: ['whetstone']
  },
  {
    question: "What type of drum can't be played?",
    answer: ['eardrum', 'conundrum']
  },
  {
    question: "What name has six letters, but if you take a letter away, it becomes seven?",
    answer: ['steven']
  }
]
