import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6812087108:AAG6PfWGk2yUeicyFoyGiyCwqEhQ6D4sgC0'
const webAppUrl = 'https://new-angular-tg-bot-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) =>{
    ctx.reply(
        'Добро пожаловать!',
        Markup.keyboard([
            Markup.button.webApp('Поддержка', `${webAppUrl}/feedback`)
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()

