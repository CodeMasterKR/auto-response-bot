import { Context } from 'telegraf'
import { inlineKeyboard } from '../keybaords/inline.keyboard'
import { BotContext } from '../types/context.type'


export const questionCommand = (ctx: BotContext) => {
  ctx.reply('Davom etamizmi?', inlineKeyboard)
}
