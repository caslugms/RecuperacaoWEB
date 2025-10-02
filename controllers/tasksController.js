const { v4: uuidv4 } = require("uuid");
const tasks = [];

function getTasks(req, res) {
  res.json(localStorage.getItem(tasks.forEach))
}


function createTask(req, res) {
  const user = db.users.find(u => u.id === req.params.id); 
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

  const { nome, prazoMaximo, descricao } = req.body; 

  const task = {
    nome,
    prazoMaximo,
    descricao: descricao || null,
  }

  localStorage.setItem(tasks.push(task))

  res.json({ message: "Tarefa criada", user }); 
}



module.exports = { getTasks, createTask};
