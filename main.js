const Discord = require('discord.js')
const Client = new Discord.Client()
const command = require('./command')

const config= require('./config.json')

Client.on('ready', () => {
    console.log('Client is ready!')

    awnsered = true;
    cAwnser = "";
    userAwnser = "";


    command(Client, 'help', message => {
        message.channel.send(`
        These are the supported commands: 
        **!help** - Displays the help menu
        **!shame <@name>** - Shames a person
        `)
    })

    if (awnsered == false && message.author == quizUser) {
        if (message.content == cAwnser) {
            message.reply("you got it right!");
        }
        else{
            message.reply("Try again!");
        }
        awnsered = true; cAwnser = ""; userAwnser = "";
    }

    command(Client, 'quiz', message => {
        number = 18;
        const random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1:
                await message.channel.send('Who Was The First Hero Thanos Fought When He Landed In Wakanda? \n :regional_indicator_a:) Bruce Banner \n :regional_indicator_b:) Captain America \n :regional_indicator_c:) Black Panther \n :regional_indicator_d:) Falcon');
                cAwnser = 'a';
                break;
            case 2:
                await message.channel.send('Which Was The Third Stone Thanos Added To His Gauntlet? \n :regional_indicator_a:) Soul stone \n :regional_indicator_b:) Time stone \n :regional_indicator_c:) Mind stone \n :regional_indicator_d:) Reality stone');
                cAwnser = 'd';
                break;
            case 3:
                await message.channel.send('What Were The First Words Uttered By Thanos In The MCU? \n :regional_indicator_a:) "Your politics bore me" \n :regional_indicator_b:) "Your demeanour is that of a pouting child" \n :regional_indicator_c:) "The only matter I do not take seriously, boy, is you" \n :regional_indicator_d:) "Return to me again empty handed, and i will bath the starways with your blood"');
                cAwnser = 'c';
                break;
            case 4:
                await message.channel.send('What Did Thanos Call The Avengers When He Saw Them In Nebula\'s Memory File? \n :regional_indicator_a:) Earth\'s mightiest heroes \n :regional_indicator_b:) Defenders of earth \n :regional_indicator_c:) Unruly wretches \n :regional_indicator_d:) Pathetic humans');
                cAwnser = 'c';
                break;
            case 5:
                await message.channel.send('Who Did Thanos Not Engage In One-On-One Combat With? \n :regional_indicator_a:) Rocket \n :regional_indicator_b:) Warmachine \n :regional_indicator_c:) Falcon \n :regional_indicator_d:) Groot');
                cAwnser = 'a';
                break;
            case 6:
                await message.channel.send('When Fighting Iron Man, Captain America, And Thor, Who Did Thanos Hit First? \n :regional_indicator_a:) Iron man \n :regional_indicator_b:) Captain America \n :regional_indicator_c:) Thor');
                cAwnser = 'a';
                break;
            case 7:
                await message.channel.send('Who Was The First Hero Shown To Be Killed By Thanos In Infinity War? \n :regional_indicator_a:) Loki \n :regional_indicator_b:) Heimdall \n :regional_indicator_c:) An unnames asgardion \n :regional_indicator_d:) Miek');
                cAwnser = 'b';
                break;
            case 8:
                await message.channel.send('How Long Was There Between Thanos\' First Snap And His Destroying Of The Stones? \n :regional_indicator_a:) 20 days \n :regional_indicator_b:) 21 days \n :regional_indicator_c:) 22 days \n :regional_indicator_d:) 23 days');
                cAwnser = 'b';
                break; 
            case 9:
                await message.channel.send('Which Of Thanos\' Hands Did Thor Cut Off? \n :regional_indicator_a:) Right \n :regional_indicator_b:) Left \n :regional_indicator_c:) None');
                cAwnser = 'b';
                break;
            case 10:
                await message.channel.send('How Many Times Did Thanos Punch The Hulk At The Beginning Of Infinity War? \n :regional_indicator_a:) 6 \n :regional_indicator_b:) 8 \n :regional_indicator_c:) 10 \n :regional_indicator_d:) 12');
                cAwnser = 'c';
                break;
            case 11:
                await message.channel.send('Which Two Stones Did Thanos Use When Doctor Strange Multiplied Himself? \n :regional_indicator_a:) Power and Space \n :regional_indicator_b:) Reality and Space \n :regional_indicator_c:) Soul and Power \n :regional_indicator_d:) Soul and Reality');
                cAwnser = 'c';
                break;
            case 12:
                await message.channel.send('What Happened When Thanos Headbutted Captain Marvel? \n :regional_indicator_a:) She flew back \n :regional_indicator_b:) He flew back \n :regional_indicator_c:) Both flew back \n :regional_indicator_d:) Nothing');
                cAwnser = 'd';
                break;
            case 13:
                await message.channel.send('Who First Greeted Thanos When He Arrived On Titan In Infinity War? \n :regional_indicator_a:) Iron man \n :regional_indicator_b:) Star lord \n :regional_indicator_c:) Doctor strange \n :regional_indicator_d:) Nebula');
                cAwnser = 'c';
                break;
            case 14:
                await message.channel.send('What Is The Name Of Thanos\' Ship? \n :regional_indicator_a:) Sanctuary \n :regional_indicator_b:) Sanctuary II \n :regional_indicator_c:) Sanctuary III \n :regional_indicator_d:) Sanctuary IV');
                cAwnser = 'b';
                break;
            case 15:
                await message.channel.send('Complete The Quote - "Your Optimism Is ..., Asgardian? \n :regional_indicator_a:) Disturbing \n :regional_indicator_b:) Pathetic \n :regional_indicator_c:) Misplaced \n :regional_indicator_d:) Useless');
                cAwnser = 'c';
                break;
            case 16:
                await message.channel.send('What Is Thanos\' Father\'s Name? \n :regional_indicator_a:) Eros \n :regional_indicator_b:) A\'Lars \n :regional_indicator_c:) Sui-San \n :regional_indicator_d:) Thane');
                cAwnser = 'b';
                break;  
            case 17:
                await message.channel.send('According To Nebula, What Did Thanos Call His Plan To Collect The Infinity Stones? \n :regional_indicator_a:) His great plan \n :regional_indicator_b:) His infinity plan \n :regional_indicator_c:) His infinty quest \n :regional_indicator_d:) His noble quest');
                cAwnser = 'a';
                break;  
            case 18:
                await message.channel.send('When Fighting Which Hero Did Thanos Command For His Army To Rain Fire? \n :regional_indicator_a:) Captain marvel \n :regional_indicator_b:) Thor \n :regional_indicator_c:) Doctor strange \n :regional_indicator_d:) Scarlet witch');
                cAwnser = 'd';
                break;     
        }
        awnsered = false;
        quizUser = message.author;
    })
    
})

Client.login(config.token)
