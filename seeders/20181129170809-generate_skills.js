'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [
      {id:14, name: 'Pensamiento computacional',dekids_coins: 2,createdAt: new Date(),updatedAt: new Date()},
      {id:15, name: 'Herramientas digitales',dekids_coins: 3,createdAt: new Date(),updatedAt: new Date()},
      {id:16, name: 'Logica de programacion',dekids_coins: 2,createdAt: new Date(),updatedAt: new Date()},
      {id:17, name: 'Diseño web',dekids_coins: 36,createdAt: new Date(),updatedAt: new Date()},
      {id:18, name: 'Comunicación',dekids_coins: 1,createdAt: new Date(),updatedAt: new Date()},
      {id:19, name: 'Trabajo en equipo',dekids_coins: 11,createdAt: new Date(),updatedAt: new Date()},
      {id:20, name: 'Pensamiento innovador',dekids_coins: 10, createdAt: new Date(),updatedAt: new Date()},
      {id:21, name: 'Pensamiento creativo',dekids_coins: 21, createdAt: new Date(),updatedAt: new Date()},
      {id:22, name: 'Pensamiento critico',dekids_coins: 20, createdAt: new Date(),updatedAt: new Date()},
      {id:23, name: 'Solución de problemas',dekids_coins: 1,createdAt: new Date(),updatedAt: new Date()},
      {id:24, name: 'Negociación',dekids_coins: .1,createdAt: new Date(),updatedAt: new Date()},
      {id:25, name: 'Finanzas',dekids_coins : .1 ,createdAt: new Date(),updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
