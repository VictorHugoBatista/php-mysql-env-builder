import InputData from '../../DTO/input-data'
import GeneratorTypeInterface from '../../interfaces/generator-type-interface'
const Git = require('nodegit')

export default class GeneratorTypeWp implements GeneratorTypeInterface {
  public afterClone(envname: string, data: InputData): void {
    const themerepo = data.getData('themerepo')
    if (themerepo && themerepo !== '') {
      console.log('Downloading theme...')
      Git.Clone(themerepo, `${envname}/public/wp-content/themes/${envname}`)
        .then(() => {
          console.log('Theme downloaded')
        })
    }
  }
}
