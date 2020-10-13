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
        image: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.INTEGER,
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['M', 'F']
        },
        size: {
            type: Sequelize.ENUM,
            values: ['P', 'M', 'G']
        },
        description: {
            type: Sequelize.TEXT,
        },
        phone: {
            type: Sequelize.STRING
        },
    });

    Pet.associate = function (models) {
    };

    return Pet;
};
