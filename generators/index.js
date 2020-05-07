// import { dirs } from "./config"
const { dirs } = require("./config")


module.exports = plop => {
  dirs.map(item => plop.setGenerator(item.name, {
    description: item.desc,
    prompts: item.prompts || [],
    actions: item.actions || []
  }))
}