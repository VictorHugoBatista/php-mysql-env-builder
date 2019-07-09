import InputData from '../DTO/input-data'
import {InputData as InputDataInterface} from '../interfaces/input-data'
const fs = require('fs')
const Git = require('nodegit')

export default class Generator {
  private readonly _config: InputData

  public constructor(envname: string, config: InputDataInterface) {
    this._config = new InputData({
      envname,
      ...config,
    })
  }

  public generate(): void {
    const envname = this._config.getData('envname')
    const baseprojectgit = this._config.getData('baseprojectgit')
    fs.mkdirSync(envname)
    fs.mkdirSync(`${envname}/mysql`)
    if (baseprojectgit && baseprojectgit !== '') {
      Git.Clone(baseprojectgit, `${envname}/public`)
        .then(() => {
          console.log('Download ended')
        })
    } else {
      fs.mkdirSync(`${envname}/public`)
    }
  }
}
