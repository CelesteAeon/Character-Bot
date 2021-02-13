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

            let  [type, ...restArgs] = args;
            let  input = restArgs.join(' ');

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

}
        if(args[0] === "set"){
    
    if(args[2] === "name"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, bores) => {

            if(err) console.log(err);

            bores.name = input;
            bores.save().then(bores => console.log(bores)).catch(err => console.log(err));
            message.reply("Name Updated!");

        })

    }
    if(args[2] === "lastname"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, yores) => {

            if(err) console.log(err);

            yores.lastname = input;
            yores.save().then(yores => console.log(yores)).catch(err => console.log(err));
            message.reply("Last Name Added!");

        })

    }

    if(args[2] === "description"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, bores) => {

            if(err) console.log(err);

            bores.description = input;
            bores.save().then(bores => console.log(bores)).catch(err => console.log(err));
            message.reply("Description Added!");

        })

    }
    if(args[2] === "bio"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, bres) => {

            if(err) console.log(err);

            bres.bio = input;
            bres.save().then(bres => console.log(bres)).catch(err => console.log(err));
            message.reply("Bio Added!");

        })

    }
    if(args[2] === "personality"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, res) => {

            if(err) console.log(err);

            res.personality = input;
            res.save().then(res => console.log(res)).catch(err => console.log(err));
            message.reply("Personality Added!");

        })

    }
    if(args[2] === "size"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, sires) => {

            if(err) console.log(err);

            sires.size = input;
            sires.save().then(sires => console.log(sires)).catch(err => console.log(err));
            message.reply("Size Added!");

        })

    }
    if(args[2] === "gender"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');

        Character.findOne({

            name: name,

        }, (err, pores) => {

            if(err) console.log(err);

            pores.gender = input;
            pores.save().then(pores => console.log(pores)).catch(err => console.log(err));
            message.reply("Gender Added!");

        })

    }
    if(args[2] === "picture"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');
        let attached = message.attachments.first().url;
        Character.findOne({

            name: name,

        }, (err, dores) => {

            if(err) console.log(err);

            dores.picture = attached;
            dores.save().then(dores => console.log(dores)).catch(err => console.log(err));
            message.reply("Picture Added!");

        })

    }
    if(args[2] === "thumb"){

        let  [type, name, what, ...restArgs] = args;
        let  input = restArgs.join(' ');
        let attached = message.attachments.first().url;
        Character.findOne({

            name: name,

        }, (err, zores) => {

            if(err) console.log(err);

            zores.thumb = attached;
            zores.save().then(zores => console.log(zores)).catch(err => console.log(err));
            message.reply("Thumbnail Added!");

        })

    }

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