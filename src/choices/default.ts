import {mateFieldRequired} from '../choices/choices-functions'

export const generateChoices = (baseName: string): Array<any> => {
  return [
    {
      type: 'name',
      name: 'dbname',
      message: 'Choose the database name',
      default: baseName,
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'dbpass',
      message: 'Choose the database root password',
      default: 'root',
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'vhost',
      message: 'Choose the virtualhost',
      default: `${baseName}.local`,
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'imageweb',
      message: 'Choose the web server docker image',
      default: 'lramos1994/docker-php-apache-base',
      validate: mateFieldRequired,
    },
    {
      type: 'name',
      name: 'imagedb',
      message: 'Choose the database docker image',
      default: 'mariadb',
      validate: mateFieldRequired,
    },
  ]
}
