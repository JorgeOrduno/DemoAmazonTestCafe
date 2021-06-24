import { Selector } from "testcafe"

export default class landing_page {
  constructor() {
    this.searchTextField = Selector("#twotabsearchtextbox")
    this.amazonLogo = Selector("#nav-logo-sprites")
    this.searchButton = Selector("#nav-search-submit-button")
    this.signInAccount = Selector("#nav-link-accountList")
    this.newCustomer = Selector("a").withText("Start here.")
  }

  async clickOnSignIn(t) {
    await t.hover(this.signInAccount).click(this.newCustomer)
  }

  async isAmazonLogoDisplayed(t) {
    await t.expect(this.amazonLogo.exists).ok("Success")
  }

  async typeSearchQuery(t, querySearch) {
    await t.click(this.searchTextField).typeText(this.searchTextField, querySearch).click(this.searchButton)
  }
}
