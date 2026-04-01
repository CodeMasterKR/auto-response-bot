import { Context, Scenes } from "telegraf"

interface wizardState {
  name?: string
  phone?: string
}

export interface BotContext extends Context {
  scene: Scenes.SceneContextScene<BotContext, Scenes.WizardSessionData>
  wizard: Scenes.WizardContextWizard<BotContext> & { state: wizardState }
}