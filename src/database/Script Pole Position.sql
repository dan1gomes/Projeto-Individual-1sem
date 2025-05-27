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
id int,
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
('Gabriel', 'Bortoleto');

Insert into Equipe (nome) values
('Ferrari'),
('Mac Laren'),
('Red Bull'),
('Mercedes');

select * from Usuario;
select * from Piloto;
select * from Equipe;
select * from Votos;

 update Piloto set nome = 'Gabriel Bortoleto' where idPiloto = 6;
 update Piloto set equipe = 'Kick Sauber' where idPiloto = 6;

select (select nome from Piloto join Votos on fkPiloto = idPiloto group by fkPiloto order by count(fkPiloto) desc limit 1) as 'Piloto Mais Votado',
	   (select nome from Piloto join Votos on fkPiloto = idPiloto group by fkPiloto order by count(fkPiloto) asc limit 1) as 'Piloto Menos Votado';
       
select (select nome from Equipe join Votos on fkEquipe = idEquipe group by fkEquipe order by count(fkEquipe) desc limit 1) as 'Equipe Mais Votado',
	   (select nome from Equipe join Votos on fkEquipe = idEquipe group by fkEquipe order by count(fkEquipe) asc limit 1) as 'Equipe Menos Votado';

select nome, count(fkPiloto) from Votos join Piloto on fkPiloto = idPiloto group by fkPiloto order by fkPiloto;

select nome, count(fkEquipe) from Votos join Equipe on fkEquipe = idEquipe group by fkEquipe order by fkEquipe;