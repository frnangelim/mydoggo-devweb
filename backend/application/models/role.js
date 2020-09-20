module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        name: Sequelize.STRING
    });

    Role.associate = function (models) {
        Role.belongsToMany(models.User, {through: 'UserRoles', foreignKey: 'roleId'});
    };

    return Role;
};
