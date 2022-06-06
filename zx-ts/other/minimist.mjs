import minimist from 'minimist'
import chalk from 'chalk'
import semver from'semver'
import enquirer from 'enquirer'

import pkg from '../package.json'

// 获取package.json中的版本号
const currentVersion = pkg.version
console.log(pkg.version, 'currentVersion')

const preId = null

// 获取命令行参数
const argv = minimist(process.argv.slice(2))

const inc = i => semver.inc(currentVersion, i, preId)

const versionIncrements = [
    'patch',
    'minor',
    'major',
    ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : [])
  ]

  let arr = versionIncrements.map(i => `${i} (${inc(i)})`).concat(['custom'])

  let tempArray = ['major(1.0.0)','minor(0.1.0)', 'patch(0.0.4)' ]
  const { release } = await enquirer.prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: tempArray
  })

  if(release === 'custom') {
      console.log(release, 'customer')
  } else {
    const targetVersion = release.match(/\((.*)\)/)[1]
    console.log(targetVersion, 'targetVersion')
  }
