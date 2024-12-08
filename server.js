//Importando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')
const mongoCsv = require('csv-parser')
const app = express()
const admin = require('./routes/admin')

//Configurações do servidor
    //paser de info jason e parser de info de form
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    //configuração do handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', 
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }))
    app.set('view engine', 'handlebars')
    app.set('views', __dirname + '/views')

    //configuração do mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/DashoardHosp').then(() => {
            console.log('Conectado ao mongoose')
        }).catch((erro) => {
            console.log(`Erro ao se conectar ao mongoose: ${erro}`)
        })

    //Configuração da pasta public (reconhecimento de arquivos estáticos)
    app.use(express.static(path.join(__dirname, 'public')))
//Rotas
    app.use('/admin', admin)

//Conexão com o servidor
const PORT = 8081
app.listen(PORT, () => {
    console.log(`Conectado ao servidor com sucesso: porta (${PORT})`)
})

