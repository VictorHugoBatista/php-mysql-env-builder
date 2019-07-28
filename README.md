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
php-mysql-env-builder/1.0.0 linux-x64 node-v10.16.0
$ mybuilder --help [COMMAND]
USAGE
  $ mybuilder COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mybuilder custom ENVNAME`](#mybuilder-custom-envname)
* [`mybuilder help [COMMAND]`](#mybuilder-help-command)
* [`mybuilder wp ENVNAME`](#mybuilder-wp-envname)

## `mybuilder custom ENVNAME`

generate a custom php/mysql docker environment

```
USAGE
  $ mybuilder custom ENVNAME

ARGUMENTS
  ENVNAME  Name of the builded environment. Will be used as base to another stuffs
```

_See code: [src/commands/custom.ts](https://github.com/VictorHugoBatista/php-mysql-env-builder/blob/v1.0.0/src/commands/custom.ts)_

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

## `mybuilder wp ENVNAME`

generate a php/mysql docker environment with an empty wordpress installation on the server root directory

```
USAGE
  $ mybuilder wp ENVNAME

ARGUMENTS
  ENVNAME  Name of the builded environment. Will be used as base to another stuffs
```

_See code: [src/commands/wp.ts](https://github.com/VictorHugoBatista/php-mysql-env-builder/blob/v1.0.0/src/commands/wp.ts)_
<!-- commandsstop -->
