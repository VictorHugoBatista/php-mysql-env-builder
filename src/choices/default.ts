import {makeFieldRequired} from '../choices/choices-functions'

export const generateChoices = (baseName: string): Array<object> => {
  return [
    {
      type: 'name',
      name: 'dbname',
      message: 'Database name',
      default: baseName,
      validate: makeFieldRequired,
    },
    {
      type: 'name',
      name: 'dbpass',
      message: 'Database root password',
      default: 'root',
      validate: makeFieldRequired,
    },
    {
      type: 'name',
      name: 'vhost',
      message: 'Virtualhost',
      default: `${baseName}.local`,
      validate: makeFieldRequired,
    },
    {
      type: 'name',
      name: 'imageweb',
      message: 'Web server docker image',
      default: 'lramos1994/docker-php-apache-base',
      validate: makeFieldRequired,
    },
    {
      type: 'name',
      name: 'imagedb',
      message: 'Database docker image',
      default: 'mariadb',
      validate: makeFieldRequired,
    },
  ]
}
