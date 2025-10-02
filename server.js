const express = require("express");
const app = express();
const authRoutes = require("./routes/auth"); 
const tasksRoutes = require("./routes/tasks"); 

app.use(express.json()); 

app.use("/auth", authRoutes);
app.use("/tsks", tasksRoutes); 

const PORT = 3000; 
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)); 
