import { Scenes } from "telegraf";
import { BotContext } from "../types/context.type";
import { registrationScene } from "./registration.scene";

export const stage = new Scenes.Stage<BotContext>([
  registrationScene
])