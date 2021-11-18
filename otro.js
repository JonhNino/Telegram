require('dotenv').config()
const { Telegraf } = require('telegraf')
const axios = require('axios')
const bot = new Telegraf(process.env.BOT_TOKEN);


bot.command('start', ctx => {
    sendStartMessage(ctx);
})
// PAra el Mensaje Principal//
function sendStartMessage (ctx) {
    const startMessage = "Hola "+ ctx.from.first_name + " "  + ctx.from.last_name + ", Bienvenid@ al Bot de Comunicaciones RSA 💪🏼"; 

    bot.telegram.sendMessage(ctx.chat.id, startMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "¿Eres Cliente de Comunicaciones  RSA?", callback_data: 'ComunicacionesRSA'}
                ],
                [
                    {text: "Nuestro website", url: "https://youtube.com"}
                ],
                [
                    {text: "Creditos", callback_data: 'credits'}
                ]
            ]
        }
    })
}
// Creditos//
bot.action('credits', ctx => {
    ctx.answerCbQuery();
    ctx.reply('Creado por Jonh Niño-Julian Saavedra-William');
})
// Action para Comunicaciones //
bot.action('ComunicacionesRSA', ctx => {
    ctx.answerCbQuery();

    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " Ya haces Parte de Nuestros Clientes?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage,{
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Si", callback_data: 'Si'}
                ],
                [
                    {text: "No, se parte de nuestros clientes Registrate aca", url: "https://youtube.com"}
                ],
                [
                    {text: "Exit", callback_data: 'Salir'}
                ]
            ]
        }
    })

})
//Soporte//
bot.action('Soporte', ctx => {
    ctx.answerCbQuery();

    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " Que tipo de soporte Necesitas?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Mi PC No enciende",callback_data: 'PC' },
                    { text: "No hay Wifi", callback_data: 'Wifi'},
                    { text: "Necesito un Tecnico",callback_data:'Tecnico' }
                ],
                [
                    { text: "Salir", callback_data: 'Salir' }
                ]
            ],
            
        }
    })

})
//WIFI//
bot.action('Wifi', ctx => {
    ctx.answerCbQuery();

    const menuMessage = " ¿"+ ctx.from.first_name + " "  + ctx.from.last_name + " El Wifi tiene todos sus botones encendidos?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup: {
            keyboard: [
                [
                    { text: "No, hay uno en rojo" },
                    { text: "El Wifi No sirve"},
                    { text: "Necesito un Tecnico" }
                ],
                [
                    { text: "Salir", callback_data: 'Salir' }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })

})
//Action Para tecnico//
bot.action('Tecnico', ctx => {
    ctx.answerCbQuery();

    const menuMessage = "¿Como te podemos ayudar?"
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Necesito un Tecnico, Urgente" },
                    { text: "Enviar Mi ubicacion" },
                ],
                [
                    { text: "Salir", callback_data: 'Salir' }
                ]
            ],
        
        }
    })

})
// Bot action por si es cliente RSA//
bot.action('Si', ctx => {
    ctx.answerCbQuery();

    const SiMessage = "¿En que te podemos ayudar " + ctx.from.first_name + " "  + ctx.from.last_name + "?."  
    bot.telegram.sendMessage(ctx.chat.id, SiMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Soporte", callback_data: 'Soporte'}
                ],
                [
                    {text: "Nuestros Productos", url: "https://youtube.com"}
                ],
                [
                    {text: "Necesito un Tecnico. Help Me!!!", callback_data: 'Tecnico'}
                ],
                [
                    {text: "Salir", callback_data: 'Salir'}
                ]
            ]
        }
    })

})
// //Action para salir//
// bot.action('Exit', ctx => {
//     ctx.answerCbQuery();

//     const ExitMessage = "¿" + ctx.from.first_name + " "  + ctx.from.last_name + " Quisieras Calificar nuestro servicio con el Bot de Comunicaciones RSA?."  
//     bot.telegram.sendMessage(ctx.chat.id, ExitMessage, {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {text: "1 ⭐️ (Pesimo)", callback_data: 'Soporte'}
//                 ],
//                 [
//                     {text: "2 ⭐️⭐️(Malo)", url: "https://youtube.com"}
//                 ],
//                 [
//                     {text: "3 ⭐️⭐️⭐️(Regular)", callback_data: 'Tecnico'}
//                 ],
//                 [
//                     {text: "4 ⭐️⭐️⭐️⭐️(Bueno)", callback_data: 'Tecnico'}
//                 ],
//                 [
//                     {text: "5 ⭐️⭐️⭐️⭐️⭐️ (Excelente)", callback_data: 'Tecnico'}
//                 ],
//                 [
//                     {text: "Salir", callback_data: 'Salir'}
//                 ]
//             ]
//         }
//     })

// })
// Escuchar para salir//
bot.action('Salir', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Gracias por utilizar nuestro servicio de chatbot ❤️ para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.hears(['Salir','SALIR','salir'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Gracias por utilizar nuestro servicio de chatbot ❤️ para Comunicaciones RSA, Recuerda que te llevamos en la base de datos y en el ❤️ 😂😂😂.", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
//Escuchar Soporte//
bot.action('PC', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Vale " + ctx.from.first_name + " "  + ctx.from.last_name + " , Primero reinicia tu laptop o revisa que llegue corriente, si no es eso quisieras que un tecnico fuera a tu lugar de residencia? (Responde: si o no). ", {
        reply_markup: {
            remove_keyboard: true
        }
    })
})
bot.hears(['no','nocas','No','NOKS','Noclas', 'no gracias','No gracias','NO GRACIAS','no Gracias','NO gracias','NO Gracias'], (ctx) => ctx.reply('Vale ' + ctx.from.first_name + " "  + ctx.from.last_name + ' Gracias por utilizar nuestro servicio de chatbot ❤️, te recordamos que vallas visitar nuestra Pagina web.  '))
bot.hears(['Si','Sisas','si','sisas','Obvio','obvio','SI','sisa mi so','sisa','Sisa','si gracias','Si gracias','SI GRACIAS','si Gracias','SI gracias','SI Gracias','Necesito un Tecnico, Urgente','Necesito un Tecnico'], (ctx) => ctx.reply('Vale ' + ctx.from.first_name + " "  + ctx.from.last_name + ' Si desea puedes enviarnos tu ubicacion, y te enviaremos un tecnico capacitado a tu lugar de residencia.'))
//WIfi escuhcar//
bot.hears(['No, hay uno en rojo',], (ctx) => ctx.reply('Vale  ' + ctx.from.first_name + " "  + ctx.from.last_name + ' intenta reiniciando el Router, no fue la solucion?, quisieras que un tecnico fuera a tu lugar de residencia? (Responde: si o no)'))
bot.hears(['El Wifi No sirve',], (ctx) => ctx.reply('Vale  ' + ctx.from.first_name + " "  + ctx.from.last_name + ' intenta reiniciando el Router, no fue la solucion?, quisieras que un tecnico fuera a tu lugar de residencia? (Responde: si o no)'))

//Envio localizacion//
bot.on('location', (ctx) => ctx.reply('Listo '+ ctx.from.first_name + " "  + ctx.from.last_name +   ' Almacenaremos tu locacion y tan pronto podamos te enviamos que dia esta programada tu visita.Gracias por utilizar nuestro servicio de chatbot ❤️, Escribe salir. '))
    

bot.launch()