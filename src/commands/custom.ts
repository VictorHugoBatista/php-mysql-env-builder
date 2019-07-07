import {Command} from '@oclif/command'

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
    console.log(args.envname)
  }
}
