module.exports = (sequelize, DataTypes) =>{

    const Employees = sequelize.define("Employees", {
        
        emp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
          
        emp_name: {
            type: DataTypes.STRING,
            allowNull: false
        
        },

        emp_position: {
            type: DataTypes.STRING,
            allowNull: false
        },

        emp_password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })

    return Employees
    
}