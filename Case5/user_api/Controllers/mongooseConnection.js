"use strict";
exports.__esModule = true;
exports.MongooseController = void 0;
var logger_1 = require("../logger/logger");
var mongoose = require("mongoose");
var Article_1 = require("../models/Article");
mongoose.connect('mongodb://host.docker.internal:27017/Case5', { useNewUrlParser: true, useUnifiedTopology: true });
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
var MongooseController = /** @class */ (function () {
    function MongooseController() {
        var _this = this;
        this.log = new logger_1.Logger();
        try {
            mongoose.connect('mongodb://host.docker.internal:27017/Case5', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 2000
            });
            this.db = mongoose.connection;
            this.db.on('error', function () {
                _this.log.error("No puedo conectar a mongo");
            });
            this.db.once('open', function () {
                _this.log.info("Conectado a mongo");
            });
        }
        catch (e) {
            this.log.error(e);
        }
    }
    MongooseController.getInstance = function () {
        if (!this.instance) {
            this.instance = new MongooseController();
        }
        return this.instance;
    };
    MongooseController.prototype.getArticles = function () {
    };
    MongooseController.prototype.populateDB = function () {
        var _this = this;
        var nombres = ["PrismaAventura", "Bendito sea Mongoose", "Redis o Tedis? La pregunta del millón", "Al principio no me gustaba docker y ahora tampoco", "Nodemon es un regalo de Dios"];
        var texto = ["Era una oscura noche de octubre cuando decidí comenzar a investigar el oscuro misterio de prisma.io", "El internet estaba repleto de recursos sobre prisma con mysql , pero se mantenía silencioso al respetco de mongo",
            "Hasta que encontré un preview del propio prisma donde enseñaban como setear mongo junto con prisma", "Al seguir los pasos me di cuenta que me encontraba con un docker compose , yo esperaba simplemente conectar mi base de datos,pero el destino que me esperaba no era el deseado",
            "Graphql? Que es eso , para que sirve? Eran unas de las preguntas que rondaban por mi cabeza", "Un poco aturdido con tanta información , aún así decidí continuar este arduo camino", "Un subidón de alegría, logré comprender como funciona prisma desde graphql playground",
            "Armado con determinación, partí hacia nodejs , a montar los requests ", "Los inconvenientes no tardaron en aparecer, el archivo generado por prisma no se podía mover de ubicación ,ya que daría problemas de conexión",
            "Cuando me encontraba en mi momento más bajo, el profesor dijo que prisma no puede conectarse a mongo , cosa que es falso , dado que ya había logrado insertar desde graphql playground", "Ignorando este revelador hecho, me dirigí a la página de mongoose , donde comenzaría una nueva aventura computina."];
        var media = ["https://cdn.discordapp.com/avatars/243134456028856320/a80cd3192c67c8fca4c807aec26fdacd.png?size=256", "https://cdn.discordapp.com/emojis/417769730221277195.png?v=1", "https://media.discordapp.net/attachments/510588744915484683/756263074713042974/IMG-20200917-WA0004.jpg?width=677&height=677"];
        shuffle(nombres);
        var nombre = nombres[0];
        var publishers = ["Pepito Gonzales", "Pepote Gonzales", "Melvin S Ragland", "Stephen M Szymanski", "Virginia B Fowler", "Marsha T Humphrey"];
        var sections = [];
        var publisher = publishers[Math.trunc(getRandomArbitrary(0, publishers.length))];
        var Titulo = 1;
        var Subtitulo = 2;
        var Textoo = 3;
        var Imagenes = 4;
        var Videos = 5;
        for (var i = 0; i < 20; i++) {
            var tipo = getRandomArbitrary(0, 5);
            switch (Math.trunc(tipo)) {
                case 0:
                    // crea título
                    sections.push({ Title: nombres[Math.trunc(getRandomArbitrary(0, nombres.length))], ComponentType: Titulo });
                    break;
                case 1:
                    sections.push({ Subtitle: nombres[Math.trunc(getRandomArbitrary(0, nombres.length))], ComponentType: Subtitulo });
                    //crea subtitulo
                    break;
                case 2:
                    sections.push({ text: texto[Math.trunc(getRandomArbitrary(0, texto.length))], ComponentType: Textoo });
                    break;
                //crea text
                case 3:
                    sections.push({ media: media[Math.trunc(getRandomArbitrary(0, media.length))], ComponentType: Imagenes });
                    //crea media
                    break;
                case 4:
                    sections.push({ media: media[Math.trunc(getRandomArbitrary(0, media.length))], ComponentType: Videos });
                    //crea media
                    break;
            }
        }
        var htags = ["tournament", "shana", "everyone", "catalina", "granblue", "sign", "online", "tempest/granblue", "@zephyrzerrin", "fantasy", "photo", "your", "harem", "akashiya", "ナルメア", "@studio", "vampire/zetsuen", "glistened", "glory", "like", "something", "🔴live", "@bobbyd107"];
        var postDate = new Date();
        postDate.setDate(postDate.getDate() - Math.trunc(Math.random() * 700));
        var aproxHashtags = Math.trunc(Math.random() * 4 + 1) / htags.length;
        var newArticle = new Article_1["default"]({
            Hashtags: htags.filter(function (element, index, array) {
                if (Math.random() <= aproxHashtags) {
                    return true;
                }
            }),
            Name: nombre,
            Author: publisher,
            Sections: sections,
            PostTime: postDate
        });
        newArticle.save(function (err, post) {
            if (err) {
                _this.log.error(err);
            }
        });
    };
    return MongooseController;
}());
exports.MongooseController = MongooseController;
