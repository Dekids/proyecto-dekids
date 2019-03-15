'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [
      {id:26, name: 'Pensamiento computacional',dekids_coins: 35,createdAt: new Date(),updatedAt: new Date()},
      {id:27, name: 'Herramientas digitales',dekids_coins: 35,createdAt: new Date(),updatedAt: new Date()},
      {id:28, name: 'Logica de programacion',dekids_coins: 30,createdAt: new Date(),updatedAt: new Date()},
      {id:29, name: 'Diseño web',dekids_coins: 45,createdAt: new Date(),updatedAt: new Date()},
      {id:30, name: 'Comunicación',dekids_coins: 70,createdAt: new Date(),updatedAt: new Date()},
      {id:31, name: 'Trabajo en equipo',dekids_coins: 70,createdAt: new Date(),updatedAt: new Date()},
      {id:32, name: 'Pensamiento innovador',dekids_coins: 70, createdAt: new Date(),updatedAt: new Date()},
      {id:33, name: 'Pensamiento creativo',dekids_coins: 70, createdAt: new Date(),updatedAt: new Date()},
      {id:34, name: 'Pensamiento critico',dekids_coins: 70, createdAt: new Date(),updatedAt: new Date()},
      {id:35, name: 'Solución de problemas',dekids_coins: 70,createdAt: new Date(),updatedAt: new Date()},
      {id:36, name: 'Negociación',dekids_coins: 70,createdAt: new Date(),updatedAt: new Date()},
      {id:37, name: 'Finanzas',dekids_coins : 70,createdAt: new Date(),updatedAt: new Date()},
      {id:38, name: 'Bonus',dekids_coins : 20,createdAt: new Date(),updatedAt: new Date()},
      {id:39, name: 'Logica de programacion',dekids_coins: 141,createdAt: new Date(),updatedAt: new Date()},
      {id:40, name: 'Herramientas digitales',dekids_coins: 61,createdAt: new Date(),updatedAt: new Date()},
      {id:41, name: 'Diseño web',dekids_coins: 1,createdAt: new Date(),updatedAt: new Date()},
      {id:42, name: 'Comunicación',dekids_coins: 4,createdAt: new Date(),updatedAt: new Date()},
      {id:43, name: 'Trabajo en equipo',dekids_coins: 4,createdAt: new Date(),updatedAt: new Date()},
      {id:44, name: 'Pensamiento innovador',dekids_coins: 4, createdAt: new Date(),updatedAt: new Date()},
      {id:45, name: 'Pensamiento creativo',dekids_coins: 4, createdAt: new Date(),updatedAt: new Date()},
      {id:46, name: 'Pensamiento critico',dekids_coins: 4, createdAt: new Date(),updatedAt: new Date()},
      {id:47, name: 'Solución de problemas',dekids_coins: 4,createdAt: new Date(),updatedAt: new Date()},
      {id:48, name: 'Negociación',dekids_coins: 0,createdAt: new Date(),updatedAt: new Date()},
      {id:49, name: 'Finanzas',dekids_coins : 0,createdAt: new Date(),updatedAt: new Date()},
      {id:50, name: 'Bonus',dekids_coins : 0,createdAt: new Date(),updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
