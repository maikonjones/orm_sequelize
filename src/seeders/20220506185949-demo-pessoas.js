'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  
  }
};
