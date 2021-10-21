//Criar CNPJ
const { Router } = require('express');
const consultaCnpj = require('../api');
const Cliente = require('../models/cliente');

const ClienteRoutes = Router();

    ClienteRoutes.get("/buscar-empresa/:cnpj", async (req, res) => {
        try {
            console.log(req.params.cnpj);
            const { cnpj, nome } = await consultaCnpj(req.params.cnpj);

            res.status(200).json({ cnpj, nome });
          } catch (error) {
              console.log(error.message);
            res.status(500).send(error);
          }
    });

    ClienteRoutes.post("/salvar-empresa/", async (req, res) => {
        try {
            const { cnpj, nome } = req.body;
            
            const newCliente = await Cliente.create({
                cnpj: cnpj,
                razao_social: nome
            });
            res.status(200).json(newCliente);
          } catch (error) {
              console.log(error.message);
            res.status(500).send(error.message);
          }
    })

    ClienteRoutes.get("/empresas", async (req, res) => {
        try {
            const todasEmpresas = await Cliente.findAll();

            res.status(200).json(todasEmpresas);
          } catch (error) {
              console.log(error.message);
            res.status(500).send(error);
          }
    });

    module.exports = { ClienteRoutes };

