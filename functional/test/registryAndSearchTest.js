import landing_page from "../pages/landing_page"
import registry_form from "../pages/registry_form"
import conditions_of_use from "../pages/conditions_of_use"
import dataFromJson from "../dataFromJson.json"
require("dotenv").config({ path: ".env" })

const axios = require("axios").default

const { BASE_URL } = process.env

fixture`Registry and Search Support Test`.page(BASE_URL)
const LandingPage = new landing_page()
const RegistryForm = new registry_form()
const ConditionsOfUse = new conditions_of_use()

async function getUser() {
  try {
    const response = await axios.get("http://dummy.restapiexample.com/api/v1/employee/1")
    const responseName = response.data.data
    console.log(responseName)
    return responseName
  } catch (error) {
    console.log(error)
  }
}

test("Registry and Search Support Tests", async (t) => {
  let user = await getUser()
  let email = user.employee_name.replace(" ", "") + "@fake.com"
  console.log(email)
  await LandingPage.clickOnSignIn(t)
  await RegistryForm.enterName(t, user.employee_name)
  await RegistryForm.enterEmail(t, email)
  await RegistryForm.clickConditions(t)
  await ConditionsOfUse.searchEcho(t, dataFromJson.echoQuery)
  await ConditionsOfUse.clickEchoLink(t)
})
