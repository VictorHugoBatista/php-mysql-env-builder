import InputData from '../DTO/input-data'
import GeneratorTypeInterface from '../interfaces/generator-type-interface'
const fs = require('fs')
const Git = require('nodegit')

export default class Generator {
  private readonly _generatorType: GeneratorTypeInterface

  public constructor(generatorType: GeneratorTypeInterface) {
    this._generatorType = generatorType
  }

  public generate(envname: string, config: InputData): void {
    const baseprojectgit = config.getData('baseprojectgit')
    fs.mkdirSync(envname)
    fs.mkdirSync(`${envname}/mysql`)
    if (baseprojectgit && baseprojectgit !== '') {
      Git.Clone(baseprojectgit, `${envname}/public`)
        .then(() => {
          console.log('Download ended')
          this._generatorType.afterClone()
        })
    } else {
      fs.mkdirSync(`${envname}/public`)
    }
  }
}
