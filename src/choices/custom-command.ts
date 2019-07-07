import {generateChoices as generateChoicesDefault} from '../choices/default'

const choices = [
  {
    type: 'name',
    name: 'webroot',
    message: 'Choose the server root path',
    default: '/var/www/html',
  },
  {
    type: 'name',
    name: 'baseprojectgit',
    message: 'Repository to be cloned on the root path',
  },
]

export const generateChoices = (baseName: string) => {
  return [
    ...generateChoicesDefault(baseName),
    ...choices,
  ]
}
