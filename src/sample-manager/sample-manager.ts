const fs = require('fs')
const path = require('path')

export default class SampleManager {
  private readonly _sampleFilesPath: string = path.join(__dirname, '..', '..', 'samples')
  private readonly _sampleFilePath: string
  private readonly _sampleFileContent: string

  public constructor(sampleFileName: string) {
    this._sampleFilePath = path.join(this._sampleFilesPath, sampleFileName)
    this._sampleFileContent = fs.readFileSync(this._sampleFilePath, 'utf8')
    console.log(this._sampleFileContent)
  }
}
