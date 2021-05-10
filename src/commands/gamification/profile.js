/**
 * `Lorem impsum`
  * @author Jose Garcia
  * This module contains all commands
  * related to mentors in the server.
  * */

// Handler for use the structure
// predefined for declare commands
'use strict';

const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

// For lets perform Google Spreadsheet API 
// operations
const spreadsheetHandler = require('../../spreadsheet-handler');

// Info of usable spreadsheets
const spreadsheets = require('../../json/spreadsheets');

module.exports = class ProfileCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'profile',
			aliases: ['p'],
			group: 'gamification',
			memberName: 'profile',
			description: `Shows a card with the level stats, badges
      and other useful information about a Hacker`,
		});
	}

  async run(message) {
    // Shows a embed message asking
    // for a type of mentor that the
    // member wants to be.
    const {username} = message.author;
    //const {username} = message.author;

    const profileEmbed = new MessageEmbed()
        .setTitle(`@${username}'s stats  🔥😲`)
        .setThumbnail(message.author.avatarURL())
        .setDescription(
          `Lorem impsum`
        )
        .setColor(0x539BFF)
        .addFields(
          [
            {
              name: '`Hacker type`',
              value: `[Hacker | Mentor | Community Lead]`,
              inline: true,
            },
            {
              name: '`Range`',
              value: `[ Junior | Senior ]`,
              inline: true,
            },
            {
              name: '🟣 Hacker Points 🟣',
              value: `10,300 exp`,
              inline: false,
            },
            {
              name: '👩‍💻 Hackatons enrolled 👨‍💻',
              value: `10`,
              inline: false,
            },
            {
              name: '🟡 B A D G E S 🟡',
              value: `
                💥 Full Stack
                💥 DevOPS
              `,
              inline: false,
            },
            {
              name: '🤝 C O M M U N I T I E S 🤝',
              value: `
                👩‍🌾 Agro example
                🧔 JS example
              `,
              inline: false,
            },
          ]
        )
    message.channel.send(profileEmbed)
      .then(profileFeedback => profileFeedback.delete({timeout: 60000}))
      .catch(error => message.author.send(error))
      .then(() => message.delete({timeout: 1000}))
  };
}
