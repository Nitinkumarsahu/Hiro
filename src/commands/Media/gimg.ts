import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage,IParsedArgs } from '../../typings'
import gis from 'g-i-s'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'goimg',
            description: 'It will send 5 random images from google according to your query.',
            category: 'media',
            aliases: ['gm'],
            usage: `${client.config.prefix}goimg {query}`,
            baseXp: 10
        })
    }
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('🔎 Provide a search term')
        const googleQuery = joined.trim()


        gis(googleQuery, async (error : any, result : any) => {
            let n = result
            console.log(n)
            console.log(n.length)
           let num =  Math.floor(Math.random() * n.length) + 1
           let img = [n[num].url,n[num].url,n[num].url,n[num].url,n[num].url]


    await void this.client.sendMessage(M.from,await request.buffer(n[num].url),

MessageType.image, {quoted: M.WAMessage, mimetype : Mimetype.jpeg, caption : `*Query : ${googleQuery}*\n*URL : ${n[num].url}*`}
            )
          
  
  
  
            });
        









    }




}