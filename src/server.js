import http from 'node:http'

// Criar um usuário
// JSON - Javascript Object Notation
const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req
  
  if(method === 'GET' && url === '/users'){
    return res
      .setHeader('Content-type', 'application/json')  
      .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'Jhon doe',
      email: 'jonhdoe@examples.com'
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not Found')
})


server.listen(3333)
// localhost:3333


