module.exports = (sequelize, DataTypes) =>{

    const Clients = sequelize.define("Clients", {
        
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        
        },

        client_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        client_contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_password: {
            type: DataTypes.STRING,
            allowNull: false
        }        
    });

    
    Clients.associate = (models) =>{
        Clients.hasMany(models.Events,{
            onDelete: "cascade",
            onUpdate: "cascade",
        });
    };

    Clients.associate = (models) =>{
        Clients.hasMany(models.Appointments,{
            onDelete: "cascade",
            onUpdate: "cascade",
        });
    };
    
    

    return Clients
    
}