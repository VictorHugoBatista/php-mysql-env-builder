import {Command} from '@oclif/command'
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
    console.log(args.envname)
    inquirer
      .prompt([
        {
          type: 'name',
          name: 'dbname',
          message: 'Choose the database name',
          default: args.envname,
        },
        {
          type: 'name',
          name: 'dbpass',
          message: 'Choose the database root password',
          default: 'root',
        },
        {
          type: 'name',
          name: 'vhost',
          message: 'Choose the virtualhost',
          default: `${args.envname}.local`,
        },
        {
          type: 'name',
          name: 'imageweb',
          message: 'Choose the web server docker image',
          default: 'lramos1994/docker-php-apache-base',
        },
        {
          type: 'name',
          name: 'imagedb',
          message: 'Choose the database docker image',
          default: 'mariadb',
        },
      ])
      .then(answers => console.log(answers))
  }
}
