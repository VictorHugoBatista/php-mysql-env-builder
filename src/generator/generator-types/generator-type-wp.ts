import GeneratorTypeInterface from '../../interfaces/generator-type-interface'

export default class GeneratorTypeWp implements GeneratorTypeInterface {
  public afterClone(): void {
    console.log('download theme here!!!')
  }
}
