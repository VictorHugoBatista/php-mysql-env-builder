import {generateChoices as generateChoicesDefault} from '../choices/default'

const choices = [
  {
    type: 'name',
    name: 'themerepo',
    message: 'Theme repository to be cloned (if nothing is passed no theme will be cloned)',
  },
]

export const generateChoices = (baseName: string): Array<object> => {
  return [
    ...generateChoicesDefault(baseName),
    ...choices,
  ]
}
