import {Command} from '@oclif/command'
const inquirer = require('inquirer')
import {generateChoices} from '../choices/custom-command'
import Generator from '../generator/generator'
import {InputData} from '../interfaces/input-data'

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
      .then((answers: InputData) => {
        (new Generator(args.envname, answers)).generate()
      })
  }
}
