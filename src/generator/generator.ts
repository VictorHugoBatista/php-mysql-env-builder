import InputData from '../DTO/input-data'
import InputDataInterface from '../interfaces/input-data-interface'
const fs = require('fs')
const Git = require('nodegit')

export default class Generator {
  public generate(envname: string, config: InputDataInterface): void {
    const configData = new InputData(config)
    const baseprojectgit = configData.getData('baseprojectgit')
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
