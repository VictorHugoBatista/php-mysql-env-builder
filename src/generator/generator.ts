import InputData from '../interfaces/input-data'

export default class Generator {
  private readonly _config: InputData

  public constructor(envname: string, config: InputData) {
    this._config = {
      envname,
      ...config,
    }
  }

  public generate(): void {
    console.log(this._config.envname)
  }
}
