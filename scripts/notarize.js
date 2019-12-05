require('dotenv').config()

const { existsSync } = require('fs')
const { join } = require('path')
const { notarize } = require('electron-notarize')

module.exports = async ({ appOutDir, electronPlatformName, packager }) => {
  if (electronPlatformName !== 'darwin') {
    return
  }

  const appBundleId = require('../package.json').build.appId

  const appPath = join(appOutDir, `${packager.appInfo.productFilename}.app`)

  if (!existsSync(appPath)) {
    throw new Error(`Cannot find application at ${appPath}`)
  }

  console.log(`Notarizing ${appBundleId} found at ${appPath}`)

  await notarize({
    appBundleId,
    appPath,
    appleApiKey: process.env.appleApiKey,
    appleApiIssuer: process.env.appleApiIssuer
  })

  console.log(`Notarized ${appBundleId} found at ${appPath}`)
};
