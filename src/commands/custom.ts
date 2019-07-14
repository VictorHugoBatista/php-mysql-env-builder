import {Command} from '@oclif/command'
const inquirer = require('inquirer')
import {generateChoices} from '../choices/custom-command'
import InputData from '../DTO/input-data'
import Generator from '../generator/generator'
import GeneratorTypeCommon from '../generator/generator-types/generator-type-common'
import InputDataInterface from '../interfaces/input-data-interface'

export default class Custom extends Command {
  static description = 'generate a custom php/mysql docker environment'

  static args = [
    {
      name: 'envname',
      required: true,
      description: 'Name of the builded environment. Will be used as base to another stuffs',
    },
  ]

  async run() {
    const {args} = this.parse(Custom)
    inquirer
      .prompt(generateChoices(args.envname))
      .then((answers: InputDataInterface) => {
        (new Generator(new GeneratorTypeCommon())).generate(args.envname, new InputData(answers))
      })
  }
}
