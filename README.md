Project setup:
1. git clone https://github.com/MariusGi/project3.git
2. launch xampp or other virtual server.
3. make sure .env file is setup in root directory.
4. create database by running command php bin/console doctrine:database:create
5. run command to execute a migration: php bin/console doctrine:migrations:migrate

if app is ran on localhost:
  login route: http://localhost/<project_name>/public/login
  registration route: http://localhost/<project_name>/public/register
  api route: http://localhost/<project_name>/public/api
