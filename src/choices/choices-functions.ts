const isUrl = require('is-url')

export const makeFieldRequired = (input: string): boolean => input !== ''

export const makeFieldUrl = (input: string): boolean =>
  input === '' || isUrl(input)
