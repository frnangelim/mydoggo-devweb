module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define('Pet', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.INTEGER,
        },
        type: {
            type: Sequelize.ENUM,
            values: ['DOG', 'CAT'],
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['M', 'F'],
            allowNull: false
        },
        size: {
            type: Sequelize.ENUM,
            values: ['P', 'M', 'G'],
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
        },
    });

    Pet.associate = function (models) {
        Pet.belongsTo(models.User, {foreignKey: 'userId'});
    };

    return Pet;
};
