import {Command} from '@oclif/command'
import {generateChoices} from '../choices/default';
const inquirer = require('inquirer')

export default class Custom extends Command {
  static description = 'generate a custom php/mysql docker environment'

  static examples = [
    `$ mybuilder custom
custom world from ./src/custom.ts!
`,
  ]

  static args = [
    {
      name: 'envname',
      required: true,
      description: 'Name of the builded environment. Will be used as base to another stuff',
    },
  ]

  async run() {
    const {args} = this.parse(Custom)
    inquirer
      .prompt(generateChoices(args.envname))
      .then((answers: any) => console.log(answers))
  }
}
