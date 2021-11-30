const beginningSounds = [
  { name: 'whispers', type: 'wav' },
  { name: 'laugh', type: 'wav' },
  { name: 'organ', type: 'wav' },
  { name: 'timer', type: 'wav' },
  { name: 'creep', type: 'wav' }
]

// Get user's latest audio preferences
let audio
const audioCheckboxEl = document.getElementById('allow-audio')
const allowAudio = JSON.parse(window.localStorage.getItem('audio_permission'))
if (allowAudio) {
  audioCheckboxEl.checked = true
} else {
  audioCheckboxEl.checked = false
}

audioCheckboxEl.addEventListener('change', (e) => {
  if (e.target.checked) {
      window.localStorage.setItem('audio_permission', true)
      if (audio) {
          audio.play()
      }
  } else {
      window.localStorage.setItem('audio_permission', false)
      audio.pause()
  }
})

// Function to play sound
function playSound(name, type='mp3') {
  if (audioCheckboxEl.checked) {
    if (audio) {
        audio.pause()
    }
    audio = new Audio("sounds/" + name + "." + type)
    audio.play()
  }
}
