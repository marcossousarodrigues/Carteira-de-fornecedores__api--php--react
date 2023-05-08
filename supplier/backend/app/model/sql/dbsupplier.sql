-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Maio-2023 às 00:45
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbsupplier`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_supplier`
--

CREATE TABLE `tb_supplier` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `fantasy` varchar(100) DEFAULT NULL,
  `cnpj` varchar(20) DEFAULT NULL,
  `keypix` varchar(30) DEFAULT NULL,
  `pix` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `emailTwo` varchar(40) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `telTwo` varchar(20) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `address` varchar(10) DEFAULT NULL,
  `number` varchar(10) DEFAULT NULL,
  `complement` varchar(40) DEFAULT NULL,
  `neighborhood` varchar(90) DEFAULT NULL,
  `city` varchar(60) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `fk_user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_supplier`
--

INSERT INTO `tb_supplier` (`id`, `name`, `fantasy`, `cnpj`, `keypix`, `pix`, `email`, `emailTwo`, `tel`, `telTwo`, `cep`, `address`, `number`, `complement`, `neighborhood`, `city`, `state`, `fk_user_id`) VALUES
(1, 'Informática LTDA', 'Loja de Materiais de informatica', '72.524.478/0001-21', NULL, '72.524.478/0001-21', 'informatica@gmail.com', 'informatica.comercial@gmail', '11978788787', '11956566565', '02201-000', 'Avenida Jú', '91', 'Loja Matriz', 'Vila Gustavo', 'São Paulo', 'SP', 1),
(2, 'manutenção LTDA', 'Lojas de manutenção', '69.341.255/0001-14', NULL, '69.341.255/0001-14', 'manutencao@gmail.com.br', 'manutencao.comercial@gmail.com', '985994454', '11978788787', '02045-970', 'Rua Guajur', '81', 'Loja Matriz', 'Jardim São Paulo(Zona Norte)', 'São Paulo', 'SP', 1),
(3, 'Doceria LTDA', 'Lojas de Doces ', '93.451.602/0001-46', NULL, '93.451.602/0001-46', 'doces@gmail.com', 'doces.comercial@gmail.com', '965655656', '11978788787', '08391-712', 'Rua Paulo ', '50', 'Loja FIlial', 'Jardim Nova São Paulo(São Rafael)', 'São Paulo', 'SP', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_user`
--

INSERT INTO `tb_user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Marcos Antônio Rodrigues de Sousa', 'marcosrodrigues3546@gmail.com', '123123'),
(2, 'Mariana Silva Leite', 'mariana@gmail.com', '123123');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_supplier`
--
ALTER TABLE `tb_supplier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`fk_user_id`);

--
-- Índices para tabela `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_supplier`
--
ALTER TABLE `tb_supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
