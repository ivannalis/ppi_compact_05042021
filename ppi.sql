-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2021 at 12:20 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ppi`
--

-- --------------------------------------------------------

--
-- Table structure for table `kab`
--

CREATE TABLE `kab` (
  `id` int(255) NOT NULL,
  `kab` varchar(255) NOT NULL,
  `prov` varchar(255) NOT NULL,
  `neg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kab`
--

INSERT INTO `kab` (`id`, `kab`, `prov`, `neg`) VALUES
(34, 'kab ketapang', 'kalimantan barat', 'indonesia'),
(35, 'kab kubu raya', 'kalimantan barat', 'indonesia');

-- --------------------------------------------------------

--
-- Table structure for table `kat_shp`
--

CREATE TABLE `kat_shp` (
  `id` int(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL DEFAULT 'Belum ada deskripsi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kat_shp`
--

INSERT INTO `kat_shp` (`id`, `kategori`, `deskripsi`) VALUES
(86, 'Tutupan Lahan', 'Tutupan Lahan Tahunan'),
(87, 'Deforestasi', 'Deforestasi Bulanan'),
(88, 'Kawasan Hutan', 'SK733 tahun 2014');

-- --------------------------------------------------------

--
-- Table structure for table `loi`
--

CREATE TABLE `loi` (
  `id_loi` int(255) NOT NULL,
  `pengirim` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `afiliasi` varchar(255) NOT NULL,
  `web_afiliasi` varchar(255) NOT NULL,
  `jenis_afiliasi` varchar(255) NOT NULL,
  `negara` varchar(255) NOT NULL,
  `ketertarikan` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Hide',
  `tanggal` varchar(255) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loi`
--

INSERT INTO `loi` (`id_loi`, `pengirim`, `email`, `afiliasi`, `web_afiliasi`, `jenis_afiliasi`, `negara`, `ketertarikan`, `role`, `deskripsi`, `file`, `status`, `tanggal`) VALUES
(14, 'Aris', 'ars@idhtrade.org', 'Yayasan IDH Indonesia', 'idh.org', 'Government', 'ID', '_Pertumbuhan Ekonomi Berkelanjutan\r\n                                                        \r\n                                                        \r\n                                                        \r\n                                             ', 'Funding', '', NULL, '1', '2021-03-23 10:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `shp`
--

CREATE TABLE `shp` (
  `id_shp` int(255) NOT NULL,
  `nama_shp` varchar(255) NOT NULL,
  `kat_shp` varchar(255) DEFAULT NULL,
  `id_kat_shp` int(255) NOT NULL,
  `deskripsi_shp` varchar(255) DEFAULT 'None',
  `path_shp` varchar(255) DEFAULT NULL,
  `sumber_shp` varchar(255) DEFAULT NULL,
  `status_shp` int(255) NOT NULL DEFAULT 0,
  `tanggal` varchar(16) NOT NULL DEFAULT current_timestamp(),
  `type_shp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shp`
--

INSERT INTO `shp` (`id_shp`, `nama_shp`, `kat_shp`, `id_kat_shp`, `deskripsi_shp`, `path_shp`, `sumber_shp`, `status_shp`, `tanggal`, `type_shp`) VALUES
(35, 'Tutupan Lahan tahun 2019', NULL, 86, 'Data ini tidak diperoleh secara langsung.', 'public/assets/geojson/1616500806381-admin_bppt2.geojson', 'Rest Service KLHK tahun 2019', 0, '2021-03-23 16:23', 'polygon'),
(36, 'Kawasan Hutan ', NULL, 88, '', 'public/assets/geojson/1616493196378-new - Copy.geojson', 'SK733 tahun 2014', 1, '2021-03-23 16:53', 'point'),
(37, 'Deforestasi tahun 2019', NULL, 87, '', 'public/assets/geojson/1616493238525-1616148226746-admin_kkr.geojson', 'Monitoring Lapangan', 1, '2021-03-23 16:53', NULL),
(38, 'Tutupan Lahan tahun 2016', NULL, 86, '', 'public/assets/geojson/1616493283772-new - Copy.geojson', 'Rest Service KLHK tahun 2019', 1, '2021-03-23 16:54', NULL),
(39, 'Tutupan Lahan tahun 2017', NULL, 86, '', 'public/assets/geojson/1616493312091-new - Copy.geojson', '', 0, '2021-03-23 16:55', 'line'),
(40, 'Deforestasi tahun 2012', NULL, 87, '', 'public/assets/geojson/1616493360363-new.geojson', 'Monitoring Lapangan', 0, '2021-03-23 16:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `styleshp`
--

CREATE TABLE `styleshp` (
  `id_style` int(255) NOT NULL,
  `prop_shp` varchar(255) NOT NULL,
  `color_prop` varchar(255) NOT NULL,
  `id_shp` varchar(255) DEFAULT NULL,
  `label_style` varchar(255) DEFAULT NULL,
  `style_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `styleshp`
--

INSERT INTO `styleshp` (`id_style`, `prop_shp`, `color_prop`, `id_shp`, `label_style`, `style_by`) VALUES
(146, 'AMBARAWA', '#c20f0f', '35', 'Desa Ambarawa', NULL),
(147, 'BATU AMPAR', '#ada81a', '35', 'Desa Batu Ampar', NULL),
(148, 'MEDAN MAS', '#ffffff', '35', 'Desa Medan Mas', NULL),
(149, 'NIPAH PANJANG', '#7a570b', '35', 'Desa Nipah Panjang', NULL),
(150, 'PADANG TIKAR 1', '#b71010', '35', 'Desa Padang Tikar 1', NULL),
(151, 'SUNGAI BESAR', '#e69b19', '35', 'Desa Sungai Besar', NULL),
(152, 'SUNGAI JAWI', '#a91bbb', '35', 'Desa Sungai Jawi', NULL),
(153, 'TANJUNG HARAPAN', '#c6016a', '35', 'Desa Tanjung Harapan', NULL),
(154, 'TASIK MALAYA', '#b5b5b5', '35', 'Desa Tasik Malaya', NULL),
(155, 'TELUK NIBUNG', '#000000', '35', 'Desa Tuluk Nibung', NULL),
(156, 'Batu Ampar', '#db1a1a', '36', 'Kec. Batu Ampar', NULL),
(157, 'Kuala Mandor B', '#000000', '36', '', NULL),
(158, 'Kuala Mandor/B-Sungai Ambawang', '#000000', '36', '', NULL),
(159, 'Kubu', '#000000', '36', '', NULL),
(160, 'Rasau Jaya', '#000000', '36', '', NULL),
(161, 'Sungai Ambawang', '#000000', '36', '', NULL),
(162, 'Sungai Kakap', '#26b51c', '36', '', NULL),
(163, 'Sungai Raya', '#000000', '36', '', NULL),
(164, 'Teluk Pakedai', '#f8c50d', '36', '', NULL),
(165, 'Terentang', '#000000', '36', '', NULL),
(166, '146', '', '#c91313', NULL, NULL),
(167, '147', '', '#2226a0', NULL, NULL),
(168, '148', '', '#1df7b9', NULL, NULL),
(169, '149', '', '#7a570b', NULL, NULL),
(170, '150', '', '#b71010', NULL, NULL),
(171, '151', '', '#e69b19', NULL, NULL),
(172, '152', '', '#a91bbb', NULL, NULL),
(173, '153', '', '#c6016a', NULL, NULL),
(174, '154', '', '#b5b5b5', NULL, NULL),
(175, '155', '', '#000000', NULL, NULL),
(176, '146', 'ddd', '#c91313', NULL, NULL),
(177, '147', '', '#2226a0', NULL, NULL),
(178, '148', '', '#1df7b9', NULL, NULL),
(179, '149', '', '#7a570b', NULL, NULL),
(180, '150', '', '#b71010', NULL, NULL),
(181, '151', '', '#e69b19', NULL, NULL),
(182, '152', '', '#a91bbb', NULL, NULL),
(183, '153', '', '#c6016a', NULL, NULL),
(184, '154', '', '#b5b5b5', NULL, NULL),
(185, '155', '', '#000000', NULL, NULL),
(186, '146', '', '#c91313', NULL, NULL),
(187, '147', '', '#2226a0', NULL, NULL),
(188, '148', '', '#1df7b9', NULL, NULL),
(189, '149', '', '#7a570b', NULL, NULL),
(190, '150', '', '#b71010', NULL, NULL),
(191, '151', '', '#e69b19', NULL, NULL),
(192, '152', '', '#a91bbb', NULL, NULL),
(193, '153', '', '#c6016a', NULL, NULL),
(194, '154', '', '#b5b5b5', NULL, NULL),
(195, '155', '', '#000000', NULL, NULL),
(196, '146', '', '#000000', NULL, NULL),
(197, '147', '', '#2226a0', NULL, NULL),
(198, '148', '', '#1df7b9', NULL, NULL),
(199, '149', '', '#7a570b', NULL, NULL),
(200, '150', '', '#b71010', NULL, NULL),
(201, '151', '', '#e69b19', NULL, NULL),
(202, '152', '', '#a91bbb', NULL, NULL),
(203, '153', '', '#c6016a', NULL, NULL),
(204, '154', '', '#b5b5b5', NULL, NULL),
(205, '155', '', '#000000', NULL, NULL),
(206, 'Batu Ampar', '#000000', '37', NULL, NULL),
(207, 'Kuala Mandor B', '#000000', '37', NULL, NULL),
(208, 'Kuala Mandor/B-Sungai Ambawang', '#000000', '37', NULL, NULL),
(209, 'Kubu', '#000000', '37', NULL, NULL),
(210, 'Rasau Jaya', '#000000', '37', NULL, NULL),
(211, 'Sungai Ambawang', '#000000', '37', NULL, NULL),
(212, 'Sungai Kakap', '#000000', '37', NULL, NULL),
(213, 'Sungai Raya', '#000000', '37', NULL, NULL),
(214, 'Teluk Pakedai', '#000000', '37', NULL, NULL),
(215, 'Terentang', '#000000', '37', NULL, NULL),
(216, 'Batu Ampar', '#c43131', '38', NULL, 'WADMKC'),
(217, 'Kuala Mandor B', '#000000', '38', NULL, 'WADMKC'),
(218, 'Kuala Mandor/B-Sungai Ambawang', '#bf1eeb', '38', NULL, 'WADMKC'),
(219, 'Kubu', '#000000', '38', NULL, 'WADMKC'),
(220, 'Rasau Jaya', '#0b27b1', '38', NULL, 'WADMKC'),
(221, 'Sungai Ambawang', '#3bd411', '38', NULL, 'WADMKC'),
(222, 'Sungai Kakap', '#000000', '38', NULL, 'WADMKC'),
(223, 'Sungai Raya', '#adb80f', '38', NULL, 'WADMKC'),
(224, 'Teluk Pakedai', '#490d5e', '38', NULL, 'WADMKC'),
(225, 'Terentang', '#000000', '38', NULL, 'WADMKC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kab`
--
ALTER TABLE `kab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kat_shp`
--
ALTER TABLE `kat_shp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loi`
--
ALTER TABLE `loi`
  ADD PRIMARY KEY (`id_loi`);

--
-- Indexes for table `shp`
--
ALTER TABLE `shp`
  ADD PRIMARY KEY (`id_shp`);

--
-- Indexes for table `styleshp`
--
ALTER TABLE `styleshp`
  ADD PRIMARY KEY (`id_style`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kab`
--
ALTER TABLE `kab`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `kat_shp`
--
ALTER TABLE `kat_shp`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `loi`
--
ALTER TABLE `loi`
  MODIFY `id_loi` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `shp`
--
ALTER TABLE `shp`
  MODIFY `id_shp` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `styleshp`
--
ALTER TABLE `styleshp`
  MODIFY `id_style` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
