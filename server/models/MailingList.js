module.exports = (sequelize, DataTypes) =>{

    const MailingList = sequelize.define("MailingList", {
        
        mail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        mail_folder_id: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        mail_folder_name: {
            type: DataTypes.STRING,
            allowNull: false
        
        }
         
    })


    MailingList.associate = (models) =>{
        MailingList.belongsTo(models.Clients,{
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });
    };
    

    return MailingList
    
}