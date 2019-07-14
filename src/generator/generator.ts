import InputData from '../DTO/input-data'
import GeneratorTypeInterface from '../interfaces/generator-type-interface'
import SampleManager from '../sample-manager/sample-manager'
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
    this.generateDockerComposeFile()
    fs.mkdirSync(`${envname}/mysql`)
    if (baseprojectgit && baseprojectgit !== '') {
      console.log('Downloading project base...')
      Git.Clone(baseprojectgit, `${envname}/public`)
        .then(() => {
          console.log('Project base downloaded')
          this._generatorType.afterClone(envname, config)
        })
    } else {
      fs.mkdirSync(`${envname}/public`)
    }
  }

  private generateDockerComposeFile(): void {
    (new SampleManager('docker-compose.yml'))
  }
}
