import { Scenes } from "telegraf";
import { BotContext } from "../types/context.type";

export const registrationScene = new Scenes.WizardScene<BotContext>(
  'registration',
  
  // Ism so'rash
  async (ctx) => {
    await ctx.reply('Ismingizni kiriting:')
    return ctx.wizard.next()
  },

  // Telefon so'rash
  async (ctx) => {
    if(!ctx.message || !('text' in ctx.message)) {
      await ctx.reply('Iltimos matn kiriting!')
      return
    }

    ctx.wizard.state.name = ctx.message.text
    await ctx.reply('Telefon raqamingizni kiriting:')
    return ctx.wizard.next()
  },

  // Yakunlash
  async (ctx) => {
    if(!ctx.message || !('text' in ctx.message)){
      await ctx.reply('Iltimos, matn kiriting!')
      return
    }

    const name = ctx.wizard.state.name
    const phone = ctx.message.text

    await ctx.reply(
      `✅ Ro'yxatdan o'tdingiz!\n\n` +
      `Ism: ${name}\n` +
      `Telefon: ${phone}`
    )

    return ctx.scene.leave()
  }
)