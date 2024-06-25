const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const USER_TABLE = 'users';

class User extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'user',
            timestamps: true,
            hooks: {
                beforeCreate: async (user) => {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    }
}
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'email'
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '*****',
        field:'password'
    }

}

module.exports = { User, UserSchema}