// get images from the images/ghosts directory
const ghostImages = Array.from({ length: 14 }, (_, index) => `./images/ghosts/ghost-${index + 1}.png`)
const birthdayName = new URLSearchParams(window.location.search).get('name')?.trim()
if (birthdayName) {
    const birthdayMessage = document.getElementById('birthday-message')
    birthdayMessage.textContent = `happy birthday, ${birthdayName}!`
    birthdayMessage.classList.add('visible')
  birthdayMessage.classList.remove('hidden')
}
// shuffle the ghost images so they appear in a random order
ghostImages.sort(() => Math.random() - 0.5)

// get the birthday riddles from the riddles.js file
const birthdayRiddles = riddles.filter(riddle => riddle.categories?.includes('birthday'))
// shuffle the birthday riddles so they appear in a random order
birthdayRiddles.sort(() => Math.random() - 0.5);

// populate the riddle grid with birthday riddles and ghost images
// when an image is clicked, it reveals the answer to the riddle
const riddleGrid = document.getElementById('riddle-grid')
birthdayRiddles.forEach((riddle, index) => {
    const ghostImage = ghostImages[index % ghostImages.length]
    const riddleElement = document.createElement('div')
    riddleElement.classList.add('p-4', 'flex', 'flex-col', 'items-center')
    riddleElement.innerHTML = `
        <button type="button" class="mb-4 p-0 border-8 border-yellow-200 bg-transparent hover:border-8 hover:border-yellow-500" aria-label="Reveal answer to riddle ${index + 1}" aria-controls="birthday-answer-${index + 1}" aria-expanded="false">
            <img src="${ghostImage}" alt="" draggable="false" class="block w-24 h-24 select-none lg:w-32 lg:h-32">
        </button>
        <p class="text-center text-white">${riddle.question}</p>
        <p id="birthday-answer-${index + 1}" class="text-center text-yellow-500 invisible">answer: ${riddle.article ? `${riddle.article} ` : ''}${riddle.answer[0]}</p>
    `
    const revealButton = riddleElement.querySelector('button')
    const answer = riddleElement.querySelector('p.invisible')
    revealButton.addEventListener('click', () => {
        answer.classList.toggle('invisible')
        revealButton.setAttribute('aria-expanded', String(!answer.classList.contains('invisible')))
    })
    riddleGrid.appendChild(riddleElement)
})