import { Context } from "telegraf";
import { BotContext } from "../types/context.type";

export const helpCommand = (ctx: BotContext) => {
  ctx.reply('Buyruqlar:\n\n' +
    '/start — Boshlash\n' +
    '/help — Yordam')
}