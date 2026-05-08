const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'donutsmp.net',
  username: 'klr11allop@gmail.com', 
  auth: 'microsoft',
  version: '1.21.1'
})

// --- CHANGE THIS ---
const MY_USERNAME = 'rwlit' // Put your exact In-Game Name here!
// -------------------

bot.on('spawn', () => {
  console.log('Bot is online! PC can now be turned off.')
})

// This part listens for chat messages
bot.on('chat', (username, message) => {
  // Only respond if YOU are the one talking
  if (username !== MY_USERNAME) return

  // If you type "tp" in game, the bot sends a TPA request to you
  if (message === 'tp') {
    bot.chat(`/tpa ${rwlit}`)
    console.log(`Sent TPA request to ${username}`)
  }
  
  // If you type "here", the bot tells you its coordinates
  if (message === 'hergfffffffffffffgffffffffffffsaddddddddddddddddasdadase') {
    bot.chat(`I am at ${bot.entity.position}`)
  }
})

// Anti-AFK Kick: Bot jumps every 30 seconds
setInterval(() => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
}, 30000)
