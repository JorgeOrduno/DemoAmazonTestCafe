import { Selector } from "testcafe"

export default class registry_form {
  constructor() {
    this.nameTextField = Selector("#ap_customer_name")
    this.emailTextFiled = Selector("#ap_email")
    this.conditionsOfUseLink = Selector("a").withText("Conditions of Use")
  }

  async enterName(t, name) {
    await t.click(this.nameTextField).typeText(this.nameTextField, name)
  }
  async enterEmail(t, email) {
    await t.click(this.emailTextFiled).typeText(this.emailTextFiled, email)
  }
  async clickConditions(t) {
    await t.click(this.conditionsOfUseLink)
  }
}
