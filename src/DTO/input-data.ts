import {InputData as InputDataInterface} from '../interfaces/input-data'

export default class InputData {
  private readonly _inputData: Map<string, string>
  private readonly _defaultData = {
    envname: '',
    dbname: '',
    dbpass: '',
    vhost: '',
    imageweb: '',
    imagedb: '',
    webroot: '',
    baseprojectgit: '',
    themerepo: '',
  }

  public constructor(inputData: InputDataInterface) {
    this._inputData = new Map({
      ...this._defaultData,
      ...(inputData as any),
    })
  }

  public getData(dataKey: any): string {
    return this._inputData.get(dataKey) || ''
  }
}
