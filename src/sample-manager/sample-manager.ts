import InputData from '../DTO/input-data'
const fs = require('fs')
const path = require('path')

export default class SampleManager {
  private readonly _sampleFilesPath: string = path.join(__dirname, '..', '..', 'samples')
  private readonly _sampleFilePath: string
  private readonly _sampleFileName: string
  private _sampleFileContent: string

  public constructor(sampleFileName: string) {
    this._sampleFileName = sampleFileName
    this._sampleFilePath = path.join(this._sampleFilesPath, sampleFileName)
    this._sampleFileContent = fs.readFileSync(this._sampleFilePath, 'utf8')
  }

  public replaceContent(dataToReplace: InputData): SampleManager {
    for (let [fileTerm, dataToWrite] of dataToReplace.getAll()) {
      const fileTermToReplace = fileTerm.toUpperCase()
      const replaceRegex = new RegExp(fileTermToReplace, 'g')
      this._sampleFileContent = this._sampleFileContent.replace(replaceRegex, dataToWrite)
    }
    return this
  }

  public save(pathToSave: string): void {
    const filePath = path.join(pathToSave, this._sampleFileName)
    fs.writeFileSync(filePath, this._sampleFileContent, 'utf8')
  }
}
