module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('Business', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      countriesAvail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sales: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      software: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'businesses',
    });
    return Business;
  };
  