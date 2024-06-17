module.exports = (sequelize, DataTypes) =>{

    const Appointments = sequelize.define("Appointments", {
        
        app_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        app_date: {
            type: DataTypes.DATE,
            allowNull: false
        
        },

        app_address: {
            type: DataTypes.DATE,
            allowNull: false
        
        },
        
         
    })

    Appointments.associate = (models) =>
        {
            Appointments.belongsToMany(models.Employees, { through: 'EmployeeAppointmentAssignment'})
        }


    return Appointments
    
}