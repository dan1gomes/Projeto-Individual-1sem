Create database PolePosition;
Use PolePosition;

Create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45) not null,
email varchar (200) unique not null,
senha varchar (45) not null
);

Create table Piloto (
idPiloto int primary key auto_increment,
nome varchar (45),
equipe varchar (45)
);
Create table Equipe (
idEquipe int primary key auto_increment,
nome varchar (45)
);
Create table Votos (
id int auto_increment,
fkUsuario int,
fkPiloto int,
fkEquipe int,
primary key (id, fkUsuario),
foreign key (fkUsuario) references Usuario (idUsuario),
foreign key (fkPiloto) references Piloto (idPiloto),
foreign key (fkEquipe) references Equipe (idEquipe)
);


Insert into Piloto (nome, equipe) values 
('Max Verstappen', 'Red Bull'),
('Charles LeClerc', 'Ferrari'),
('Lando Norris', 'Mac Laren'),
('Lewis Hamilton', 'Ferrari'),
('Oscar Piastri', 'Mac Laren'),
('George Russel', 'Mercedes');

Insert into Equipe (nome) values
('Ferrari'),
('Mac Laren'),
('Red Bull'),
('Mercedes');

