import InputData from '../DTO/input-data'

export default interface GeneratorTypeInterface {
  afterClone(envname: string, data: InputData): void,
}
