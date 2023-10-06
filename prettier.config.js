const path = require('path')

const configPath = path.join(__dirname, './packages/eslint-config-custom/prettier')
const baseConfig = require(configPath)

module.exports = baseConfig
