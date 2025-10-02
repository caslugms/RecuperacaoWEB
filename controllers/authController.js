const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const { v4: uuidv4 } = require("uuid"); 

const secret = "segredo123"; 
const users = [];

function register(req, res) {
    const { nome, senha } = req.body; 

    const hashedPassword = bcrypt.hashSync(senha, 10); 
    const newUser = { id: uuidv4(), nome, senha: hashedPassword }; 
    localStorage.setItem(users.push(newUser))

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    const token = jwt.sign({ id: user.id}, secret, { expiresIn: "1h" });
    res.json(token);
}


module.exports = { register}; 