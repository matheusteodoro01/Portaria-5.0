const { Model, DataTypes } = require('sequelize');


class Registration extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            rg: DataTypes.INTEGER,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            phone: DataTypes.INTEGER,
            company: DataTypes.STRING,
        }, { sequelize }
        )
    }


}

module.exports = Registration