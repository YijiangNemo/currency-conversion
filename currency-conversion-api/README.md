## Code Structure
`controller` folder responsible the operation with mysql using ORM library `Sequelize`.
As required for ActiveRecord, `Sequelize` will be 
a perfect alternative (http://ossterdam.com/2016/05/16/sequelize-activerecord-for-nodejs-orm/)
  
Use `sequelize-cli` to create and migrate with database. `models` folder is to define
the data model using sequelize with Configurator Model specify in currency.js


### Run the Project
`$ docker-compose build`
`$ docker-compose up`

use [http://localhost:5000](http://localhost:5000) to connect API server.

### Stop
`$ docker-compose down`




