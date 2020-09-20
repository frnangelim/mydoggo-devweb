module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    });

    User.associate = function (models) {
        User.belongsToMany(models.Role, {through: 'UserRoles', foreignKey: 'userId', as: 'roles'});
    };

    return User;
};
