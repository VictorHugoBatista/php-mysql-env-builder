import GeneratorTypeInterface from '../../interfaces/generator-type-interface'

export default class GeneratorTypeCommon implements GeneratorTypeInterface {
  public afterClone(): void {
    console.log('does nothing(???)')
  }
}
