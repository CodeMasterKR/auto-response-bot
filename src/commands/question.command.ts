import { Context } from 'telegraf'
import { inlineKeyboard } from '../keybaords/inline.keyboard'


export const questionCommand = (ctx: Context) => {
  ctx.reply('Davom etamizmi?', inlineKeyboard)
}
