module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define('UserRole', {
        userId: Sequelize.STRING,
        roleId: Sequelize.STRING
    });

    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, {foreignKey: 'userId'});
        UserRole.belongsTo(models.Role, {foreignKey: 'roleId'});
    };

    return UserRole;
};
