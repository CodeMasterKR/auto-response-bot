import { Context } from "telegraf";
import { mainKeyboads } from "../keybaords/main.keyboard";
import { BotContext } from "../types/context.type";

export const startCommand = (ctx: BotContext) => {
  ctx.reply('Salom! 👋', mainKeyboads)
}