import GeneratorTypeInterface from '../interfaces/generator-type-interface'

export default class GeneratorCommon implements GeneratorTypeInterface {
  public afterClone() {
    console.log('doen nothing(???)')
  }
}
