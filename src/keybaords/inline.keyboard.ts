import { Markup } from "telegraf";

export const inlineKeyboard = Markup.inlineKeyboard([
  [
    Markup.button.callback('✅ Ha', 'yes'),
    Markup.button.callback('❌ Yo\'q', 'no'),
  ]
])