const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const rm = require('discord.js-reaction-menu');
const Command = require('../../Structures/Command');
const mongoose = require('mongoose');
const Character = require("../../models/character.js");

module.exports = class extends Command {
    
	constructor(...args) {
		super(...args, {
			aliases: ['char'],
			description: 'Character creation tool, used to create simple and complex character sheets.',
			category: 'Utilities'
        });
	}
    
    async run(message, args) {
        
        if(args[0] === "create"){

        message.reply("What's the name of your character?");

                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                        
                                let input = collected.first(),conent;

                                const character = new Character({

                                _id: mongoose.Types.ObjectId(),
                                name: input,
                                lastname: '0',
                                description: `0`,
                                bio: `0`,
                                personality: `0`,
                                size: `0`,
                                gender: `0`,
                                picture: `0`,
                                thumb: '0'

                                });

                            character.save()
                            .then(result => console.log(result))
                            .catch(err => console.log(err));

                            message.reply("That Character looks so nice!")

                            })
        }
        
        if(args[0] === "edit"){
            
                message.reply("Which character would you like to edit?");

                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {

                                let input = collected.first().content;

                                Character.findOne({ name: input,}, (err, bores) => {

                                message.reply("Which option would you like to edit?");

                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                        {max: 1, time: 30000}).then(selected => {

                                    const select = selected;

                                message.reply("Go ahead and input your information.");

                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                        {max: 1, time: 30000}).then(data => {

                                        bores.select = data;
                                        bores.save().then(bores => console.log(bores)).catch(err => console.log(err));
                                        message.reply("Information Updated!")

                                }) 

                        })

                    })

                })
            
        }

if(args[0] === "show"){
    
    let  [show, ...restArgs] = args;
    let  input = restArgs.join(' ');

    Character.findOne({

        name: input,

    }, (err, targeres) => {

        if(err) console.log(err);
        
        new rm.menu({
            channel: message.channel,
            userID: message.author.id,
            time: 3600000,
            pages: [
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - Info')
	            .setDescription(targeres.description)
                .setThumbnail(targeres.thumb)
	            .addField('Bio', targeres.bio)
	            .addField('Personality', targeres.personality)
	            .addField('Size', targeres.size, true)
                .addField('Gender', targeres.gender, true),
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - Measurements')
	            .setDescription(targeres.description)
                .setThumbnail(targeres.thumb)
	            .addField('Bio', targeres.bio)
	            .addField('Personality', targeres.personality)
	            .addField('Size', targeres.size, true)
                .addField('Gender', targeres.gender, true),
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - Personality and Interests')
	            .setDescription(targeres.description)
                .setThumbnail(targeres.thumb)
	            .addField('Bio', targeres.bio)
	            .addField('Personality', targeres.personality)
	            .addField('Size', targeres.size, true)
                .addField('Gender', targeres.gender, true),
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - Biography')
	            .setDescription(targeres.description)
                .setThumbnail(targeres.thumb)
	            .addField('Bio', targeres.bio)
	            .addField('Personality', targeres.personality)
	            .addField('Size', targeres.size, true)
                .addField('Gender', targeres.gender, true),
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - More Information')
	            .setDescription(targeres.description)
                .setThumbnail(targeres.thumb)
	            .addField('Bio', targeres.bio)
	            .addField('Personality', targeres.personality)
	            .addField('Size', targeres.size, true)
                .addField('Gender', targeres.gender, true),
                new MessageEmbed()
                .setColor('BLUE')
	            .setTitle(targeres.name + ' ' + targeres.lastname + ' - Picture')
	            .setDescription(targeres.description)
                .setImage(targeres.picture)
            ]
        })

        /*const characterEmbed = new Discord.MessageEmbed()
	        .setColor('BLUE')
	        .setTitle(targeres.name)
	        .setDescription(targeres.description)
            .setThumbnail(targeres.thumb)
	        .addField('Bio', targeres.bio)
	        .addField('Personality', targeres.personality)
	        .addField('Size', targeres.size, true)
            .addField('Gender', targeres.gender, true)
            
            if(targeres.picture !== "0"){
            characterEmbed.setImage(targeres.picture)
            }
            message.channel.send(characterEmbed);*/

    });

}
if(args[0] === "delete"){
    
    const doc = await Character.findOne({ name: args[1]});

// Delete the document so Mongoose won't be able to save changes
await Character.deleteOne({ name: args[1] });

doc.name = args[1];
await doc.save().then(
message.reply(`${args[1]} has been successfully deleted!`)).catch(err => console.log(err))
    

}
    }
    }