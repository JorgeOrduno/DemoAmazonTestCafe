import { Selector } from "testcafe"

export default class conditions_of_use {
  constructor() {
    this.searchFieldBar = Selector("#helpsearch")
    this.echoSupportLink = Selector("a").withText("Echo Support")
    this.validateSetUpEcho = Selector("a").withText("Set Up Your Echo")
    this.validateUpdateTheWifi = Selector("a").withText("Update the Wi-Fi Settings for Your Echo Device")
    this.validateEchoDeviceCantConnectWifi = Selector("a").withText("Echo Device Can't Connect to Wi-Fi During Setup")
    this.validateAlexaVoiceProfiles = Selector("a").withText("What Are Alexa Voice")
    this.validateAskAlexa = Selector("a").withText("Ask Alexa to Tell You Why She Just Did Something")
    this.validateTurnNOtifications = Selector("a").withText(" Turn Notifications On or Off for Your Echo Devices")
  }

  async searchEcho(t, querySearch) {
    await t.click(this.searchFieldBar).typeText(this.searchFieldBar, querySearch)
    await t.pressKey("enter")
  }

  async clickEchoLink(t) {
    await t.click(this.echoSupportLink)
  }

  async validationsEchoSupport(t) {
    await t.expect(this.validateSetUpEcho.exists).ok().expect(this.validateUpdateTheWifi.exists).ok().expect(this.validateEchoDeviceCantConnectWifi.exists).ok().expect(this.validateAlexaVoiceProfiles.exists).ok().expect(this.validateAskAlexa.exists).ok().expect(this.validateTurnNOtifications.exists).ok()
  }
}
