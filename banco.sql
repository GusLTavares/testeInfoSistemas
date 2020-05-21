CREATE DATABASE teste_infosis;
USE teste_infosis;


CREATE TABLE veiculos(
  id_veiculo INTEGER NOT NULL AUTO_INCREMENT,
  placa CHAR(7) NOT NULL,
  chassi VARCHAR(20) NOT NULL,
  renavam VARCHAR(15) NOT NULL,
  modelo VARCHAR(20) NOT NULL,
  marca VARCHAR(20) NOT NULL,
  ano SMALLINT UNSIGNED NOT NULL ,
  PRIMARY KEY (id_veiculo)
);
  