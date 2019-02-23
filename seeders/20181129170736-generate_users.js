'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {id: 21,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Daniel Bravo Ascencio',  dekids_coins:0, username:'Daniel Bravo', profile:'danielBravo.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 22,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Erandi Cristina López Hernández',  dekids_coins:0, username:'Erandi López', profile:'erandi.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 23,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Ángel Apodaca Madrigal',  dekids_coins:0, username:'Ángel Apodaca', profile:'angel.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 24,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Emanuel Apodaca Madrigal',  dekids_coins:0, username:'Emanuel Apodaca', profile:'emanuel.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 25,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Nicolas Quiroga',  dekids_coins:0, username:'Nicolas Quiroga', profile:'nicolas.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 26,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Gerardo Quiroga',  dekids_coins:0, username:'Gerardo Quiroga', profile:'gerardo.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 27,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Ada',  dekids_coins:0, username:'Ada', profile:'ada.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 28,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'André',  dekids_coins:0, username:'André', profile:'andre.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 29,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Berenice',  dekids_coins:0, username:'Berenice', profile:'berenice.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 30,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Diter',  dekids_coins:0, username:'Diter', profile:'diter.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 31,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Emiliano',  dekids_coins:0, username:'Emiliano', profile:'emiliano.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 32,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Leonardo',  dekids_coins:0, username:'Leonardo', profile:'leonardo.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 33,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Santiago',  dekids_coins:0, username:'Santiago', profile:'santiago.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 34,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Valeria',  dekids_coins:0, username:'Valeria', profile:'valeria.png', createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
