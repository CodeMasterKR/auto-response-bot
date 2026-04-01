import { Telegraf } from "telegraf";
import { BotContext } from "../types/context.type";
import { startCommand } from "./start.command";
import { helpCommand } from "./help.command";
import { questionCommand } from "./question.command";
import { registerCommand } from "./register.command";

export const registerCommands = (bot: Telegraf<BotContext>) => {
  bot.command('start', (ctx) => startCommand(ctx))
  bot.command('help', (ctx) => helpCommand(ctx))
  bot.command('savol', (ctx) => questionCommand(ctx))
  bot.command('register', (ctx) => registerCommand(ctx))
}