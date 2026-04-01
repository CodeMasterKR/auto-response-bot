import 'dotenv/config'
import bot from "./bot";
import { registerCommands } from './commands';
import { registerCallbacks } from './handlers/callback.handler';
import { registerMessages } from './handlers/message.handler';

registerCommands(bot as any)
registerCallbacks(bot as any)
registerMessages(bot as any)

bot.launch()
console.log("✅ Bot ishga tushdi")

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))