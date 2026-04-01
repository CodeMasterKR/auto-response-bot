import { Context, Telegraf } from "telegraf";
import { startCommand } from "./start.command";
import { helpCommand } from "./help.command";
import { questionCommand } from "./question.command";

export const registerCommands = (bot: Telegraf<Context>) => {
  bot.command('start', startCommand)
  bot.command('help', helpCommand)
  bot.command('savol', questionCommand)
}