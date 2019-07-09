import InputData from '../DTO/input-data'
const fs = require('fs')
const Git = require('nodegit')

export default class Generator {
  public generate(envname: string, config: InputData): void {
    const baseprojectgit = config.getData('baseprojectgit')
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
