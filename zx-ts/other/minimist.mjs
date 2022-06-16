import minimist from 'minimist'
import chalk from 'chalk'
import semver from'semver'
import enquirer from 'enquirer'
import { execa } from 'execa'
import {$} from 'zx'
import pkg from '../package.json'

// 获取package.json中的版本号
const currentVersion = pkg.version
console.log(pkg.version, 'currentVersion')

await $`echo -e "开始编译项目：${currentVersion} " `
const minimistTest = () => {
    console.log('-------minimistTest--------')
    const [a, b] = process.argv.slice(2)
    console.log(a, b , 'aa-bb')
    console.log(process.argv.slice(2), 'process')
    const argv = minimist(process.argv.slice(2))

    console.log(argv, '打印参数列表')
}

const semverTest = () => {
    console.log('-------semverTest--------')
    //验证版本号
    console.log(semver.valid('0.0.3'), 'valid验证版本号')   // 0.0.3 ✔
    console.log(semver.valid('0.0.3-beta.1'), 'valid验证版本号')   // 0.0.3-beta.1 ✔
    console.log(semver.valid('0.0.3.44'),'验证版本号0.0.3.44')  // null ❌

    // 获取先行版本号后的标识和版本号
    console.log(semver.prerelease('0.0.3-beta.1'), 'prerelease1')  // beta  1 ✔
    console.log(semver.prerelease('1.0.0-alpha+001'), 'prerelease2')  // alpha ❌
    console.log(semver.prerelease('1.0.0-beta+exp.sha.5114f85'), 'prerelease3')   // beta❌
    console.log(semver.prerelease('1.0.0+b11111'), 'prerelease4')  // null  错误❌

    // 现有版本号为0.0.3,通过inc获取新的版本号
    console.log(semver.inc(currentVersion, 'major'), 'inc-major')  // 1.0.0
    console.log(semver.inc(currentVersion, 'minor'), 'inc-minor')  // 0.1.0
    console.log(semver.inc(currentVersion, 'patch'), 'inc-patch')  // 0.0.4
}  

const chalkTest = () => {
    console.log('-------chalkTest--------')
    const log = console.log
    // 字体背景颜色设置
    log(chalk.bgGreen('chalk打印设置') )

    // 字体颜色设置
    log(chalk.blue('Hello') + ' World' + chalk.red('!'))

    // 自定义颜色
    const custom = chalk.hex('#F03A17')
    const bgCustom = chalk.bgHex('#FFFFFF')
    log(custom('customer'))
    log(bgCustom('bgCustom'))
}

const enquirerTest = async() => {
    console.log('-------minimistTest--------')
    let tempArray = ['major(1.0.0)','minor(0.1.0)', 'patch(0.0.4)', "customer" ]
    const { release } = await enquirer.prompt({
        type: 'select',
        name: 'release',
        message: 'Select release type',
        choices: tempArray
    })

    if(release === 'customer') {
        console.log(release, 'customer')
    } else {
        const targetVersion = release.match(/\((.*)\)/)[1]
        console.log(targetVersion, 'targetVersion')
    }
}

const execaTest = async() => {
    console.log('--------execaTest------------')
    const arr = ['aaa', 'bbbb']
    const { stdout } = await execa('echo', arr)
    console.log(stdout, 'stdout')
    await $`echo -e  ${arr}  google/zx仓库`
}
minimistTest()
chalkTest()
semverTest()
await execaTest()
enquirerTest()
 
