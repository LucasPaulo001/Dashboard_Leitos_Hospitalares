//Inportando módulos
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Modelo de uso para recebimento de dados no banco de dados
const hospitalSchema = new Schema({
    COMP: { type: String, required: true },
    REGIAO: { type: String, required: true },
    UF: { type: String, required: true },
    MUNICIPIO: { type: String, required: true },
    MOTIVO_DESABILITACAO: { type: String, required: false },
    CNES: { type: String, required: true },
    NOME_ESTABELECIMENTO: { type: String, required: true },
    RAZAO_SOCIAL: { type: String, required: true },
    TP_GESTAO: { type: String, required: true },
    CO_TIPO_UNIDADE: { type: String, required: false },
    DS_TIPO_UNIDADE: { type: String, required: false },
    NATUREZA_JURIDICA: { type: String, required: true },
    DESC_NATUREZA_JURIDICA: { type: String, required: false },
    NO_LOGRADOURO: { type: String, required: true },
    NU_ENDERECO: { type: String, required: true },
    NO_COMPLEMENTO: { type: String, required: false },
    NO_BAIRRO: { type: String, required: true },
    CO_CEP: { type: String, required: true },
    NU_TELEFONE: { type: String, required: false },
    NO_EMAIL: { type: String, required: false },
    LEITOS_EXISTENTES: { type: Number, required: true },
    LEITOS_SUS: { type: Number, required: true },
    UTI_TOTAL_EXIST: { type: Number, required: true },
    UTI_TOTAL_SUS: { type: Number, required: true },
    UTI_ADULTO_EXIST: { type: Number, required: true },
    UTI_ADULTO_SUS: { type: Number, required: true },
    UTI_PEDIATRICO_EXIST: { type: Number, required: true },
    UTI_PEDIATRICO_SUS: { type: Number, required: true },
    UTI_NEONATAL_EXIST: { type: Number, required: true },
    UTI_NEONATAL_SUS: { type: Number, required: true },
    UTI_QUEIMADO_EXIST: { type: Number, required: true },
    UTI_QUEIMADO_SUS: { type: Number, required: true },
    UTI_CORONARIANA_EXIST: { type: Number, required: true },
    UTI_CORONARIANA_SUS: { type: Number, required: true },
})

const Hospital = mongoose.model("hospitalDados", hospitalSchema)
module.exports = Hospital