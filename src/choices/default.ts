export const generateChoices = (baseName: string): Array<any> => {
  return [
    {
      type: 'name',
      name: 'dbname',
      message: 'Choose the database name',
      default: baseName,
    },
    {
      type: 'name',
      name: 'dbpass',
      message: 'Choose the database root password',
      default: 'root',
    },
    {
      type: 'name',
      name: 'vhost',
      message: 'Choose the virtualhost',
      default: `${baseName}.local`,
    },
    {
      type: 'name',
      name: 'imageweb',
      message: 'Choose the web server docker image',
      default: 'lramos1994/docker-php-apache-base',
    },
    {
      type: 'name',
      name: 'imagedb',
      message: 'Choose the database docker image',
      default: 'mariadb',
    },
  ]
}
