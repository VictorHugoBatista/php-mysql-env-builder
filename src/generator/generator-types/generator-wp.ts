import GeneratorTypeInterface from '../interfaces/generator-type-interface'

export default class GeneratorWp implements GeneratorTypeInterface {
  public afterClone() {
    console.log('download theme here!!!')
  }
}
