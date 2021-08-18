import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'xp',
            description: "Displays User's Xp 🌟",
            category: 'general',
            usage: `${client.config.prefix}xp (@tag)`,
            aliases: ['exp']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        return void M.reply(await request.buffer('https://wallpapercave.com/wp/wp5532688.png'),
        MessageType.image,
                    undefined,
                    undefined,
                   `${username}'s XP: ${(await this.client.getUser(user)).Xp || 0}`))`
                   
                   
 )


    }







}                 
