const axios = require('axios');

const consultaCnpj = async (cnpj) => {
    const cnpjFormatado = cnpj.toString();

    return (await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpjFormatado.replaceAll('.', '').replaceAll('/','').replaceAll('-','')}`)).data;

}

module.exports = consultaCnpj;


