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

  public generate(config: InputData): void {
    const baseprojectgit = config.getData('baseprojectgit')
    const envname = config.getData('envname')
    if (fs.existsSync(envname)) {
      console.log(`A file with '${envname}' name already exists!`)
      return
    }
    fs.mkdirSync(envname)
    this.generateDockerComposeFile(config, envname)
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

  private generateDockerComposeFile(completeConfig: InputData, envname: string): void {
    (new SampleManager('docker-compose.yml'))
      .replaceContent(completeConfig)
      .save(envname)
  }
}
