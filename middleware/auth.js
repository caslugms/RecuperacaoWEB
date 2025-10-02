const jwt = require("jsonwebtoken"); 
const secret = "segredo123"; 

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization; 
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1]; 
  try {
    const decoded = jwt.verify(token, secret); 
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
}

module.exports = authMiddleware; 
