import { Context } from "telegraf";
import { mainKeyboads } from "../keybaords/main.keyboard";

export const startCommand = (ctx: Context) => {
  ctx.reply('Salom! 👋', mainKeyboads)
}