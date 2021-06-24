import landing_page from "../pages/landing_page"
import search_results from "../pages/search_results"
import { query_Search_For_Samsung_Galaxy_Note_20 } from "../constants"
import dataFromJson from "../dataFromJson.json"
require("dotenv").config({ path: ".env" })

const { BASE_URL } = process.env

fixture`Samsung Search`.page(BASE_URL)
const LandingPage = new landing_page()
const SearchResults = new search_results()

test("Samsung Search", async (t) => {
  await LandingPage.isAmazonLogoDisplayed(t)
  // await LandingPage.typeSearchQuery(t, query_Search_For_Samsung_Galaxy_Note_20.querySearch.query) This can be uncomment use instead of using the Json to do the query
  await LandingPage.typeSearchQuery(t, dataFromJson.samsungQuery)
  await SearchResults.chooseCategorySamsung(t)
  await SearchResults.completeFlow(t)
})
