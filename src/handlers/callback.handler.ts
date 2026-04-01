import { Context, Telegraf } from "telegraf";

export const registerCallbacks = (bot: Telegraf<Context>) => {
  bot.action('yes', (ctx) => {
    ctx.answerCbQuery()
    ctx.reply('✅ Tanladingiz: Ha')
  })

  bot.action('no', (ctx) => {
    ctx.answerCbQuery()
    ctx.reply('❌ Tanladingiz: Yo\'q')
  })
}