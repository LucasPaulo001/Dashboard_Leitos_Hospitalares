const express = require('express')
const app = express()
const router = express.Router()
const csv = require('csv-parser')
const fs = require('fs') //módulo interno para ler arquivos 
const Hospital = require('../models/Hospital')

//Rotas
    router.get('/home', async (req, res) => {
        const { estado } = req.query;
        try {
            const hospitais = await Hospital.find({ 'UF': req.query.estado });
            res.render('admin/home', { hospitais: hospitais });
        } catch (err) {
            console.log(err);
            res.status(500).send('Erro ao buscar hospitais');
        }
    });
    //Rota para salvamento dos dados do arquivo csv no banco de dados
    router.get('/import-csv', (req, res) => {
        /*const arquivoCSV = './data/leitos.csv'

        fs.createReadStream(arquivoCSV)
        .pipe(csv())
        .on('data', (data) => {
            const novoHospital = new Hospital(data)

            novoHospital.save().then(() => {
                console.log('Hospital salvo com sucesso!')
            }).catch((erro) => {
                console.log(`Erro ao salvar hospital: ${erro}`)
            })
        }).on('end', () => {
            console.log('Arquivo CSV processado com sucesso!');
            res.send('Dados importados com sucesso!');
        }).on('error', (err) => {
            console.log('Erro ao ler o CSV:', err);
            res.status(500).send('Erro ao processar o arquivo CSV');
        });*/
        res.send('<h1>Importação desativada temporariamente!</h1>')
    })

module.exports = router//exportando rotas para serem usadas no arquivo principal