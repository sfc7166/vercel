//node 1

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('server started');
//     res.end('<h1>nodeJS</h1>');
// })

// server.listen(8080);

// const { application, json } = require('express');
// const http = require('http');

// const data = { age: 5 };

// const server = http.createServer((req, res) => {
//     console.log('server started');
//     res.setHeader('Dummy', 'Dummy Value');
//     res.setHeader('content-Type', 'object');
//     res.end(JSON.stringify(data));
// })

// server.listen(8080);

// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// // const data = fs.readFileSync('data.json', 'utf-8');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log('server started');
//     res.setHeader('Dummy', 'DummyValue');
//     res.setHeader('content-type', 'application/json');
//     res.end(index);
// })

// server.listen(8080);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log('server started');
//     res.end('nodeJS');
// })

// server.listen(8080);

// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = fs.readFileSync('data.json', 'utf-8');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     // console.log('server started');
//     res.setHeader('Content-Type', 'application/json');
//     res.end(data);
// })


//node 2


// server.listen(8080);

// const http = require('http');
// const fs = require('fs');


// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const iphone = data.iphone;

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case ('/'):
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;
//         case ('/api'):
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             break;
//         case ('/product/iphone'):
//             res.setHeader('Content-Type', 'text/html');
//             let modifiedIndex = index.replace('**coding**', iphone.model)
//                 .replace('**5G**', iphone.chip.type)
//                 .replace('**99**', iphone.camera.rear.telephoto);
//             res.end(modifiedIndex);
//         default:
//             res.writeHead(404);
//             res.end(data);

//     }

//     console.log('server started');
// })

// server.listen(8080);


// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = fs.readFileSync('data.json', 'utf-8');
// // const data2 = data;

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case '/index':
//             res.setHeader('Content-type', 'text/html');
//             res.end(index);
//             break;
//         case '/data':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(data);
//             break;
//         case '/indexdata':
//             res.setHeader('Content-Type', 'application/json');
//             let modifiedData = index.replace('+5G+',)
//                 .replace('+100+',)
//                 .replace('+coding+',);
//             res.end(modifiedData);
//             break;
//         default:
//             res.writeHead(404);
//             res.end();
//     }
// })

// server.listen(8080);

// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     if (req.url.startsWith('/product')) {
//         const id = req.url.split('/')[2]
//         const product = products.find(p => p.id === (+id))
//         console.log(product)
//         res.setHeader('Content-Type', 'text/html');
//         let modifiedIndex = index.replace('**title**', product.title)
//             .replace('**url**', product.thumbnail)
//             .replace('**price**', product.price)
//             .replace('**rating**', product.rating)
//         res.end(modifiedIndex);
//         return;
//     }

//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             break;

//         default:
//             res.writeHead(404);
//             res.end();
//     }

//     console.log('server started  ');
// });

// server.listen(8080);

// const http = require('http');
// const fs = require('fs');

// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     if (req.url.startsWith('/product')) {
//         const id = req.url.split('/')[2]
//         const product = products.find(p => p.id === (+id));
//         console.log(product);
//         res.setHeader('Content-Type', 'text/html');
//         let modifiedIndex = index.replace('**title**', product.title)
//             .replace('**url**', product.thumbnail)
//             .replace('**price**', product.price)
//             .replace('**rating**', product.rating);
//         res.end(modifiedIndex);
//         return;
//     }
//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             break;
//         default:
//             res.writeHead(404);
//             res.end();
//     }
//     console.log('server started');
// })

// server.listen(8080);

//node 3

// const express = require('express');
// const server = express();
// // const data = require('./data.json');
// // const products = data.products;

// // server.get('/', (req, res) => {
// //     res.json(products);
// // })

// server.get('/', (req, res) => {
//     res.json({ type: 'GET' })
// })
// server.post('/', (req, res) => {
//     res.json({ type: 'POST' })
// })
// server.put('/', (req, res) => {
//     res.json({ type: 'PUT' })
// })
// server.delete('/', (req, res) => {
//     res.json({ type: 'DELETE' })
// })
// server.patch('/', (req, res) => {
//     res.json({ type: 'PATCH' })
// })

// server.listen(8080);

// const express = require('express');
// const server = express();

// server.use('/', (req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
//     // next();
// })

// server.get('/', (req, res) => {
//     res.json({ method: 'GET1' });
// })
// server.post('/', (req, res) => {
//     res.json({ method: 'GET2' });
// })
// server.get('/', (req, res) => {
//     res.json({ type: 'GET3' });
// })
// server.delete('/', (req, res) => {
//     res.json({ type: 'DELETE' });
// })
// server.patch('/', (req, res) => {
//     res.json({ type: 'PATCH' });
// })

// server.listen(8080, () => {
//     console.log('server started');
// })


// const express = require('express')
// const server = express()

// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
//     next()
// })

// const auth = (req, res, next) => {
//     console.log(req.query)
//     if (req.query.password === '1234') {
//         next()
//     } else {
//         res.sendStatus(401)
//     }
// }

// server.get('/', auth, (req, res) => {
//     res.json({ type: 'GET' })
// })
// server.post('/', auth, (req, res) => {
//     res.json({ type: 'POST' })
// })
// server.put('/', auth, (req, res) => {
//     res.json({ type: 'PUT' })
// })
// server.patch('/', auth, (req, res) => {
//     res.json({ type: 'PATCH' })
// })
// server.delete('/', auth, (req, res) => {
//     res.json({ type: 'DELETE' })
// })

// server.listen(8080, () => {
//     console.log('server started')
// })



//node 4

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const server = express()
const path = require('path')
const productRouter = require('./Routes/product')
const userRouter = require('./Routes/user')
console.log('env', process.env.DB_PASSWORD)



//db connection
main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('database connected')
}



//bodyParser
server.use(cors())
server.use(express.json())
server.use(express.urlencoded())
server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


server.listen(process.env.PORT, () => {
    console.log('server started')
})
