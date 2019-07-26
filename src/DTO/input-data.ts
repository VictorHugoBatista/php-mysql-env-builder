import InputDataInterface from '../interfaces/input-data-interface'

export default class InputData {
  private readonly _inputData: Map<string, string>
  private readonly _defaultData: InputDataInterface = {
    envname: '',
    dbname: '',
    dbpass: '',
    vhost: '',
    imageweb: '',
    imagedb: '',
    webroot: '/var/www/html',
    baseprojectgit: '',
    themerepo: '',
  }

  public constructor(inputData: InputDataInterface) {
    const inputDataMap = new Map()
    const inputDataComplete = {
      ...this._defaultData,
      ...(inputData as any),
    }
    Object.keys(inputDataComplete).forEach(key => {
      inputDataMap.set(key, inputDataComplete[key])
    })
    this._inputData = inputDataMap
  }

  public getData(dataKey: any): string {
    return this._inputData.get(dataKey) || ''
  }

  public getAll(): Map<string, string> {
    return this._inputData
  }
}
