'use strict';
const ROLES = [
  {
    name: 'USER',
    description: 'Usuário comum'
  },
  {
    name: 'ADMIN',
    description: 'Usuário com privilégios de administrador'
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', ROLES, {ignoreDuplicates: true});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', {});
  }
};
