const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'donutsmp.net',
  username: 'klr11allop@gmail.com', 
  auth: 'microsoft',
  version: '1.21.1'
})
bot.on('spawn', () => {
  console.log('Bot is online! PC can now be turned off.')
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 30000)
})
