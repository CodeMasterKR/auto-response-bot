import { Context, Telegraf } from "telegraf";

export const registerMessages = (bot: Telegraf<Context>) => {
  bot.hears('📋 Yordam', (ctx) => {
    ctx.reply('Yordam kerakmi? /help')
  })

  bot.hears('👤 Profil', (ctx) => {
    const user = ctx.from
    ctx.reply(
      `👤 Profil\n\n` +
      `Ism: ${user.first_name}\n` + 
      `Username: @${user.username ?? 'yo\'q'}\n` +
      `ID: ${user.id}`
    )
  })

  bot.hears('📞 Aloqa', (ctx) => {
    ctx.reply('📞 Aloqa: @admin')
  })
}