import { session, Telegraf } from 'telegraf'
import { config } from './config'
import { stage } from './scenes'
import { BotContext } from './types/context.type'

const bot = new Telegraf<BotContext>(config.BOT_TOKEN)

bot.use(session())
bot.use(stage.middleware())

export default bot