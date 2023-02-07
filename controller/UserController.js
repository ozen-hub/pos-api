const UserSchema = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const register = (request, response) => {
    UserSchema.findOne({email: request.body.email}).then(exists => {
        if (exists == null) {
            bcrypt.hash(request.body.password, 10, function (err, hash) {
                const dto = new UserSchema({
                    name: request.body.name,
                    email: request.body.email,
                    password: hash
                });
                dto.save().then(async result => {
                    const token = jwt.sign({
                        name: result.name,
                        email: result.email
                    }, process.env.SECRET);
                    let responseUserData = {
                        userEmail: result.email,
                        token: token,
                        status: 201,
                        message: 'success!'
                    }


                    let transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: 'education.seekerscloud@gmail.com', // generated ethereal user
                            pass: 'szsoymbylfoozjlq', // generated ethereal password
                        },
                    });

                    await transporter.sendMail({
                        from: '"Fred Foo 👻" <foo@example.com>', // sender address
                        to: request.body.email, // list of receivers
                        subject: "Hello ✔", // Subject line
                        text: "Hello world?", // plain text body
                        html: "​<div title=\"aviso\" class=\"aviso\" style=\"max-width:638px; background:#A8A296; color: white !important; padding:10px; font-size:1.2em; background: #a8a296; background: -moz-linear-gradient(top,  #a8a296 0%, #66625b 100%); background: -webkit-linear-gradient(top,  #a8a296 0%,#66625b 100%); background: linear-gradient(to bottom,  #a8a296 0%,#66625b 100%); filter: progid:DXImageTransform.Microsoft.gradient( startC​​olorstr='#a8a296', endColorstr='#66625b',GradientType=0 );\">\n" +
                            "\t<div style=\"width:100%: padding:10px;\">\n" +
                            "\t\t<img width=\"100%\" src=\"https://2.bp.blogspot.com/-AbfwQzbXDiI/VquZwPfo90I/AAAAAAAAWCU/Pp1fJd5ml4s/s1600/hybris.jpg\">\n" +
                            "\t</div>\n" +
                            "\t<div>\n" +
                            "\t\t<p style=\"font-weight:bold\">Chaqueta corporativa con las siguientes características:</p>\n" +
                            "\t\t<ul>\n" +
                            "\t\t\t<li>Chaqueta <strong>multifuncional.</strong></li>\n" +
                            "\t\t\t<li>Manga <strong>separable.</strong></li>\n" +
                            "\t\t\t<li>Bolsillos <strong>tipo cargo.</strong></li>\n" +
                            "\t\t\t<li><strong>Bordado</strong> según identidad de su empresa.</li>\n" +
                            "\t\t\t<li>Tela marca <strong>Lafayette </strong>(Impermeable e inteligentes).</li>\n" +
                            "\t\t\t<li>Chaqueta hechas en <strong>jean o dril.</strong></li>\n" +
                            "\t\t\t<li>Direfentes <strong>tallas</strong> (xs, s, m, l, xl, xxl).</li>\n" +
                            "\t\t\t<li>Chaqueta <strong>unisex.</strong></li>\n" +
                            "\t\t\t<li>En <strong>colores</strong> asignados por su marca.</li>\n" +
                            "\t\t\t<li><strong>Linea reflectiva</strong> para seguridad en obra.</li>\n" +
                            "\t\t\t<li>Hecho  en <strong>Colombia.</strong></li>\n" +
                            "\t\t</ul>\n" +
                            "\t</div>\n" +
                            "\t<div class=\"recuadro\" style=\"border:1px solid gray; background: #E4C75B; background: #e4c75b;\n" +
                            "background: -moz-linear-gradient(-45deg,  #e4c75b 0%, #ffe793 47%, #e2b50f 100%);\n" +
                            "background: -webkit-linear-gradient(-45deg,  #e4c75b 0%,#ffe793 47%,#e2b50f 100%);\n" +
                            "background: linear-gradient(135deg,  #e4c75b 0%,#ffe793 47%,#e2b50f 100%);\n" +
                            "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4c75b', endColorstr='#e2b50f',GradientType=1 );\n" +
                            "\">\n" +
                            "\t    <div style=\"background:black; width:100%; padding:3px 0; text-align:center; background: #4c4c4c;\n" +
                            "background: -moz-linear-gradient(-45deg,  #4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 50%, #000000 53%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%);\n" +
                            "background: -webkit-linear-gradient(-45deg,  #4c4c4c 0%,#595959 12%,#666666 25%,#474747 39%,#2c2c2c 50%,#000000 53%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);\n" +
                            "background: linear-gradient(135deg,  #4c4c4c 0%,#595959 12%,#666666 25%,#474747 39%,#2c2c2c 50%,#000000 53%,#2b2b2b 76%,#1c1c1c 91%,#131313 100%);\n" +
                            "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=1 );\n" +
                            "\">\n" +
                            "\t    \t<img style=\"margin:0 auto; display:block\" width=\"150px\" src=\"https://static.elespectador.com/archivos/dotacionesblog/logo-dotaciones.gif\">\n" +
                            "\t    \t<div  style=\"padding:0 10px\">\n" +
                            "\t    \t<p>Empresa dedicada a la <strong>creación y confección</strong> de prendas para el trabajo según la necesidad de cada actividad <strong>comercial o industrial</strong> que desempeñe el ente económico.</p>\n" +
                            "\t    \t<p>Contacto: Liliana Patricia Guerrero S.\n" +
                            "\t    \t<br>Tels.: 318 7560443 - 318 6046760\n" +
                            "\t    \t<br>Calle 68A Sur No. 79B-36\n" +
                            "\t    \t<br>Bogotá - Colombia\n" +
                            "\t    \t<br>2016</p>\n" +
                            "\t    \t</div>\n" +
                            "\t    </div>\n" +
                            "\t\t<p style=\"padding: 0 10px; color:black\">Conozca más sobre <a style=\"color: #205EA0\" href=\"http://dotacionesguerrero.blogspot.com.co/2016/01/blog-post.html\">La chaqueta Hybris</a></p>\n" +
                            "\t\t<p style=\"padding: 0 10px; color:black\">Conozca nuestra página <a style=\"color: #205EA0\" href=\"http://dotacionesguerrero.blogspot.com.co/\">dotacionesguerrero.blogspot.com</a></p>\n" +
                            "\t\t<p style=\"padding: 0 10px; color:black\">Comentarios o inquietudes no dude en contactarnos respondiendo este correo <a style=\"color: #205EA0\" href=\"mailto:dotacionesguerrero@gmail.com\">o haciendo clic.</a></p>\n" +
                            "\t</div>\n" +
                            "</div>\n" +
                            "\n", // html body
                    });

                    response.status(201).json(responseUserData);
                }).catch(error => {
                    response.status(500).json(error);
                })
            });
        } else {
            response.status(409).json({'message': 'Already exists'});
        }
    })
}
const login = (req, resp) => {
    UserSchema.findOne({email: req.body.email}).then(exists => {
        if (exists != null) {
            bcrypt.compare(req.body.password, exists.password, function (err, result) {
                if (err) {
                    resp.status(403).json({'message': 'Forbidden'});
                }
                if (result) {
                    const token = jwt.sign({
                        name: exists.name,
                        email: exists.email
                    }, process.env.SECRET);
                    let responseUserData = {
                        userEmail: exists.email,
                        token: token,
                        status: 200,
                        message: 'success!'
                    }
                    resp.status(200).json(responseUserData);
                } else {
                    resp.status(401).json({'message': 'UnAutherized'});
                }
            });
        } else {
            resp.status(404).json({'message': 'Not Found'});
        }
    })
}
module.exports = {register, login}