module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You can't use that!");
    const text = args.slice(0).join(' ');
    if (!text) return message.channel.send("Please specify what I need to say");
    await message.delete();
    message.channel.send(text);
};

exports.help = {
    name: 'say',
    category: 'General',
    description: 'Say something',
    usage: 'say <text>',
};