import {Command} from '@oclif/command'
const inquirer = require('inquirer')
import {generateChoices} from '../choices/wp-command'
import InputData from '../DTO/input-data'
import Generator from '../generator/generator'
import GeneratorTypeWp from '../generator/generator-types/generator-type-wp'
import InputDataInterface from '../interfaces/input-data-interface'

export default class Wp extends Command {
  static description = 'generate a php/mysql docker environment with an empty wordpress installation on the server root directory'

  static args = [
    {
      name: 'envname',
      required: true,
      description: 'Name of the builded environment. Will be used as base to another stuffs',
    },
  ]

  async run() {
    const {args} = this.parse(Wp)
    inquirer
      .prompt(generateChoices(args.envname))
      .then((answers: InputDataInterface) => {
        const inputData = new InputData({
          envname: args.envname,
          ...answers,
          baseprojectgit: 'https://github.com/WordPress/WordPress.git',
        });
        (new Generator(new GeneratorTypeWp())).generate(args.envname, inputData)
      })
  }
}
