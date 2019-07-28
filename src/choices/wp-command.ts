import {makeFieldUrl} from '../choices/choices-functions'
import {generateChoices as generateChoicesDefault} from '../choices/default'

const choices = [
  {
    type: 'name',
    name: 'themerepo',
    message: 'Theme repository to be cloned (if nothing is given no theme will be cloned)',
    validate: makeFieldUrl,
  },
]

export const generateChoices = (baseName: string): Array<object> => {
  return [
    ...generateChoicesDefault(baseName),
    ...choices,
  ]
}
