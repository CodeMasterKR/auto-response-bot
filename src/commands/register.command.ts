import { BotContext } from "../types/context.type";

export const registerCommand = async (ctx: BotContext) => {
  await ctx.scene.enter('registration')
}