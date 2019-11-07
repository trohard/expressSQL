'use strict';
module.exports = (sequelize, DataTypes) => {
    var Leads = sequelize.define('Leads', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Leads;
}