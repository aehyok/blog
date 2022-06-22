import  fileSave from 'file-save'
import fileSaver  from 'file-saver'
import path from 'path'


const __dirname = path.resolve();


let filePath = path.join(__dirname, 'test/test.json')

console.log(filePath, 'filePath')
let json = {
    a: 'hello world',
    b: 'world',
    c: 'hello world',
    d: 'cc',
    e: 'EE'
}

fileSave(filePath)
    .write(JSON.stringify(json), 'utf8')
    .end('\n')

console.log('DONE')