'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {id: 14,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Anthony A. Da luz Espinoza',  dekids_coins:0, username:'Anthony A.', profile:'anthony.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 15,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Aldo Mariano Tamayo Guerrero',  dekids_coins:0, username:'Aldo Tamayo', profile:'mariano.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 16,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Danna Tamara Valente Limón',  dekids_coins:0, username:'Danna Valente', profile:'danna.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 17,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Ayax Omar Valente Limón',  dekids_coins:0, username:'Ayax Valente', profile:'ayax.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 18,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Alexia Vázquez Villalpando',  dekids_coins:0, username:'Alexia Vazquez', profile:'alexia.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 19,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Christopher Adone Cetto Vaca',  dekids_coins:0, username:'Christopher Adone', profile:'christopher.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 20,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Damian Negrete Maiz',  dekids_coins:0, username:'Sofia', profile:'sofia.png', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
