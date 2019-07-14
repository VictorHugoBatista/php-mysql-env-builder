const path = require('path')

export default class SampleManager {
  private readonly _sampleFilesPath = path.join(__dirname, '..', '..', 'samples')
  private readonly _sampleFilePath: string

  public constructor(sampleFileName: string) {
    this._sampleFilePath = path.join(this._sampleFilesPath, sampleFileName)
    console.log(this._sampleFilePath)
  }
}
