const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//GETALL
router.get('/', (req,res, next) => {

mysql.getConnection((error, conn) => {
    
    if (error) { return res.status(500).send({error: error})}
    conn.query(
        'SELECT * FROM veiculos;',
        (error, resultado, fields, next) => {
        if (error) { return res.status(500).send({error: error})}            
        return res.status(200).send({response: resultado})
        }
    )
  })
});

//POST
router.post('/', (req,res,next) => {
    
    const veiculo = {
        id_veiculo: req,body,id_veiculo,
        placa: req.body.placa,
        chassi: req.body.chassi,
        renavam: req.body.renavam,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano
    };

        mysql.getConnection((error, conn) => {
            conn.query(
                'INSERT INTO veiculos (placa, chassi, renavam, modelo, marca, ano) VALUES (?,?,?,?,?,?)',
                [req.body.placa,req.body.chassi,req.body.renavam,req.body.modelo,req.body.marca,req.body.marca,req.body.ano],
                (error,result,field) => {
                    conn.release();

                    if(error) {
                        res.status(500).send({
                            error: error,
                            response: null
                        });
                    }
                
                    res.status(201).send({
                        mensagem: 'Cadastro de veículo concluído com sucesso!'
                    });
                }
                
            )
        })
});

//GETPARAM
router.get('/:id_veiculo',(req, res, next) => {
    mysql.getConnection((error, conn) => {
    
        if (error) { return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM veiculos WHERE id_veiculo = ?;',
            [req.params.id_veiculo],
            (error, resultado, fields, next) => {
            if (error) { return res.status(500).send({error: error})}            
            return res.status(200).send({response: resultado})
            }
        )
      });
});


router.patch('/', (req,res,next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({error: error})}
        conn.query('UPDATE veiculos SET placa = ?, chassi = ?, renavam = ?, modelo = ?, marca = ?, ano = ? WHERE id_veiculo = ?'),
        [req.body.placa,req.body.chassi,req.body.renavam,req.body.modelo,req.body.marca,req.body.marca,req.body.ano,req.body.id_veiculo],

        (error,result,field) => {
            conn.release();
            if (error) { return res.status(500).send({error: error})}

            res.status(201).send({
                mensagem: 'Veículo atualizado com sucesso'
            });
        }
        });
 });


//DELETE
router.delete('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de Veículos'
    })
    
});

module.exports = router;