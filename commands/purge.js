module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this command!");
    const quantity = args.join(" ");
    if(quantity <= 100){
        if (!isNaN(quantity)){
            await message.delete();
            message.channel.bulkDelete(quantity);
            message.channel.send(`Deleted ${quantity} message(s)`);
        } else {
            message.channel.send('Please enter a number');
        }
    } else {
        message.channel.send('Please enter a value less than or = 100');
        return;
    }
};

exports.help = {
    name: 'purge',
    category: 'Moderation',
    description: 'Delete messages',
    usage: 'purge <quantity>',
};