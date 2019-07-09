export default class Generator {
  private readonly _config: object

  public constructor(envname: string, config: object) {
    this._config = {
      envname,
      ...config,
    }
  }
}
