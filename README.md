php-mysql-env-builder
=====================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/php-mysql-env-builder.svg)](https://npmjs.org/package/php-mysql-env-builder)
[![Downloads/week](https://img.shields.io/npm/dw/php-mysql-env-builder.svg)](https://npmjs.org/package/php-mysql-env-builder)
[![License](https://img.shields.io/npm/l/php-mysql-env-builder.svg)](https://github.com/VictorHugoBatista/php-mysql-env-builder/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g php-mysql-env-builder
$ mybuilder COMMAND
running command...
$ mybuilder (-v|--version|version)
php-mysql-env-builder/0.0.0 linux-x64 node-v10.16.0
$ mybuilder --help [COMMAND]
USAGE
  $ mybuilder COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mybuilder hello [FILE]`](#mybuilder-hello-file)
* [`mybuilder help [COMMAND]`](#mybuilder-help-command)

## `mybuilder hello [FILE]`

describe the command here

```
USAGE
  $ mybuilder hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mybuilder hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/VictorHugoBatista/php-mysql-env-builder/blob/v0.0.0/src/commands/hello.ts)_

## `mybuilder help [COMMAND]`

display help for mybuilder

```
USAGE
  $ mybuilder help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
