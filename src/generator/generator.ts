import InputData from '../interfaces/input-data'
const fs = require('fs')

export default class Generator {
  private readonly _config: InputData

  public constructor(envname: string, config: InputData) {
    this._config = {
      envname,
      ...config,
    }
  }

  public generate(): void {
    fs.mkdirSync(this._config.envname)
    fs.mkdirSync(`${this._config.envname}/mysql`)
    if (this._config.baseprojectgit &&
      this._config.baseprojectgit !== '') {
      // download repo
    } else {
      fs.mkdirSync(`${this._config.envname}/public`)
    }
  }
}
