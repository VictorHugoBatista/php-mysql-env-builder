import {mateFieldRequired} from '../choices/choices-functions'
import {generateChoices as generateChoicesDefault} from '../choices/default'

const choices = [
  {
    type: 'name',
    name: 'webroot',
    message: 'Server root path',
    default: '/var/www/html',
    validate: mateFieldRequired,
  },
  {
    type: 'name',
    name: 'baseprojectgit',
    message: 'Repository to be cloned on the root path (if nothing is passed the root directory will be empty)',
  },
]

export const generateChoices = (baseName: string): Array<object> => {
  return [
    ...generateChoicesDefault(baseName),
    ...choices,
  ]
}
