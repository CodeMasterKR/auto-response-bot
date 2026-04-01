import { Context } from "telegraf";

export const helpCommand = (ctx: Context) => {
  ctx.reply('Buyruqlar:\n\n' +
    '/start — Boshlash\n' +
    '/help — Yordam')
}