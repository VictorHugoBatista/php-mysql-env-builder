import {mateFieldRequired} from '../choices/choices-functions'

export const generateChoices = (baseName: string): Array<any> => {
  return [
    {
      type: 'name',
      name: 'dbname',
      message: 'Database name',
      default: baseName,
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'dbpass',
      message: 'Database root password',
      default: 'root',
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'vhost',
      message: 'Virtualhost',
      default: `${baseName}.local`,
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'imageweb',
      message: 'Web server docker image',
      default: 'lramos1994/docker-php-apache-base',
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'imagedb',
      message: 'Database docker image',
      default: 'mariadb',
      validate: mateFieldRequired,
    },
  ]
}
