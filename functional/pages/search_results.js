import { Selector } from "testcafe"

export default class search_results {
  constructor() {
    this.validateSearchPage = Selector(".a-color-state.a-text-bold")
    this.clickOnResult = Selector("img[alt='Samsung Galaxy Note 20 256GB N980F/DS S-Pen 6.7” Triple Camera GSM LTE Factory Unlocked Smartphone (International Version)...']")
    this.wholePrice = Selector(".a-offscreen").withText("$638.00")
    this.clickOnCellPhonesCategory = Selector(".a-size-base").withText("Cell Phones")
    this.clickOnSamsungBrand = Selector(".a-size-base").withText("SAMSUNG")
    this.finalPrice = Selector("#priceblock_ourprice")
    this.clickAddCart = Selector("#add-to-cart-button")
    this.goToCart = Selector("#hlb-view-cart-announce")
    this.deleteItem = Selector("input[value='Delete']")
    this.emptyCart = Selector(".sc-your-amazon-cart-is-empty")
    this.priceCart = Selector(".a-size-medium").withText("$638.00")
  }

  async isSearchResultDisplaued(t) {
    await t.expect(this.validateSearchPage.exists).ok("The page is the correct one")
  }

  async chooseCategorySamsung(t) {
    await t.click(this.clickOnCellPhonesCategory).click(this.clickOnSamsungBrand)
  }

  async completeFlow(t) {
    await t
    const intPrice = await this.wholePrice.innerText
    await t.click(this.clickOnResult)
    const priceInDetail = await this.finalPrice.innerText
    console.log(priceInDetail)
    if (intPrice === priceInDetail) {
      await t.click(this.clickAddCart)
      await t.click(this.goToCart)
    }
    const priceCart = await this.priceCart.innerText
    if (priceCart === priceInDetail) {
      await t.click(this.deleteItem).expect(this.emptyCart.exists).ok("Cart empty")
    }
  }
}
