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
        answer: ['chalkboard']
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
        answer: ['staircase']
    },
    {
        question: "What has one eye but can't see?",
        answer: ['needle']
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
        answer: ['footstep']
    },
    {
        question: "What word becomes shorter if you add 2 letters to it?",
        answer: ['short']
    },
    {
        question: "Where can you find cities, streets, parks and shops but no people?",
        answer: ['map']
    },
    {
        question: "What can go through towns and over mountains, but never moves?",
        answer: ['road']
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
        question: "What shows up once in June, twice in November, but never in May?",
        answer: ['e']
    },
    {
        question: "What can be broken, even if it is never picked up or touched?",
        answer: ['promise']
    },
    {
        question: "What run all around a backyard yet never move?",
        answer: ['fence']
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
        answer: ['light']
    },
    {
        question: "What runs but doesn't walk, has a mouth but doesn't talk, has a head but never weeps, and has a bed but never sleeps?",
        answer: ['river']
    },
    {
        question: "What five-letter word has one left when two are removed?",
        answer: ['stone']
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
        question: "What is something we do everyday, but backwards is something most people hate?",
        answer: ['live']
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
        answer: ['plate', 'silverware', 'cutlery', 'utensils']
    },
    {
        question: "What has a tail but no wings and can fly?",
        answer: ['kite']
    },
    {
        question: "What has many needles but can't stitch?",
        answer: ['pine']
    },
    {
        question: "What cut in half is nothing, but turned on its side is everything?",
        answer: ['eight']
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
        question: "What spends a lot of time on the ground but never gets dirty?",
        answer: ['shadow']
    },
    {
        question: "How many months in a year have twenty-eight days?",
        answer: ['twelve']
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
        answer: ['nine']
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
        question: "What weightless thing makes a bucket lighter?",
        answer: ['hole']
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
        question: "What can fly but has no wings and can cry but has no eyes?",
        answer: ['cloud']
    },
    {
        question: "What can a child make that no one can see?",
        answer: ['noise']
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
        answer: ['lettuce']
    },
    {
        question: "What does December have that other months don't have?",
        answer: ['d']
    },
    {
        question: "What do you add to make one disappear?",
        answer: ['g']
    },
    {
        question: "How many cats can you put in an empty box?",
        answer: ['one']
    },
    {
        question: "What can have one head, one foot, and four legs?",
        answer: ['bed']
    },
    {
        question: "What do you call a bear without an ear?",
        answer: ['b']
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
        question: "What kind of nail is a pain to hammer into wood?",
        answer: ['fingernail']
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
        answer: ['Inkstand']
    },
    {
        question: "Is always in front of you but cannot be seen?",
        answer: ['Future']
    },
    {
        question: "What is as light as a feather but the strongest man cannot hold for long?",
        answer: ['Breath']
    },
    {
        question: "Take one out and scratch my head I am now black but once was red. What am I ?",
        answer: ['Match']
    },
     {
        question: "It’s shorter than the rest, but when you’re happy, you raise it like it’s the best. What is it?",
        answer: ['Thumb']
    },
    {
        question: "The more there is, the less you see. What am I?",
        answer: ['Darkness']
    },
    {
        question: "A word I know, six letters it contains, removes one letter, and twelve remains. What am I?",
        answer: ['Dozens']
    },
    {
        question: "What is it that no one wants, but no one wants to lose?",
        answer: ['lawsuit']
    },
    {
        question: "I have many faces, expressions, and emotions, and I am usually right at your fingertips. What am I?",
        answer: ['Emojis']
    },
    {
        question: "I’m full of holes but strong as steel. What am I?",
        answer: ['Chain']
    },

]
