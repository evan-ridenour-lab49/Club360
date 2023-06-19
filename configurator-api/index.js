import http from 'http';
import * as htmlparser2 from "htmlparser2";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";



const port = 3000;

const app = express();
app.use(cors())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/", jsonParser, function(req, res) {
    console.log(req.body);
    var num1 = req.body.url;

    res.send("Addition - " + num1);
  });
app.post("/proxy", jsonParser, async (req, res) => {
    console.log(req.body.url);
    const apiReq = await fetch(req.body.url, { 
        headers: { 
            'x-api-key': 'f81af0ff-3f81-4597-b5a3-fd0e4c1b7a77'
        }
    });
    const json = await apiReq.json();
    const configuration = addConfiguration(json);
    const apiRes = {
        json,
        configuration
    }
    res.send(JSON.stringify(apiRes));
  });
app.post("/ui", jsonParser, async(req, res) => {

});
app.listen(port);

function addConfiguration(data) {
    const conf = {};
    if (Array.isArray(data)) {
        let arrayConf = {};
        for (let i = 0; i < 5 && i < data.length; i++) {
            arrayConf = {
                ...arrayConf,
                ...addConfiguration(data[i])
            }
        }
        return { 
            '__ARRAY__': arrayConf
        }
    } else if (typeof data === 'object') {
        const keyScores = {};
        for(let k in data) {
            const key = k.toLowerCase();
            let score = 0;
            for (let i in importance) {
                let index = key.indexOf(i);
                if (index !== -1) {
                    score += importance[i] * (1 - (key.length - i.length) / key.length);
                    break;
                }
            }
            const keyType = typeof data[k];
            if (keyType ===  'string' || keyType === 'number') {
                keyScores[k] = score;
            } else if (keyType === 'object') {
                keyScores[k] = {
                    score,
                    childItems: addConfiguration(data[k])
                }
            }
        }
        return keyScores;
    }
}
const importance = {
    'value': 10,
    'code': 2,
    'name': 5,
    'description': 2,
    'location': 3,
    'country': 3,
    'state': 3,
    'city': 3,
    'province': 3,
    'sector': 2,
    'id': 1,
    'results': 10
}

function getGraphQl() {
    fetch('http://localhost:8080/graphql', { method: 'POST', body: `{
        __schema {
              types {
                  name
                  kind
                  fields {
                          name
                          type {
                              name
                              kind
                          }
                      }
              }
          queryType {
            fields {
              name
                      type {
                          name
                          kind
                      }
            }
          }
      
              mutationType {
                  fields {
                      name
                  }
              }
        }
      }`})
      .then(res => res.json())
      .then((data) => console.log(data));
}

const getApiDocs = () => {
    fetch('https://api.acuris.com/individuals/docs/api')
        .then((res) => res.text())
        .then((html) => {

            const dom = htmlparser2.parseDocument(html);
            console.log(searchSwaggerUI(dom));
        });

}
function searchSwaggerUI(nodes) {
    let foundSwagger;
    for(let node in nodes.children) {
        //console.log(nodes.children[node]);
        if (nodes.children[node].type == 'script') {
            if (nodes.children[node].children.length == 1 && nodes.children[node].children[0].type == 'text') {
                if (nodes.children[node].children[0].data.indexOf('SwaggerUIBundle') !== -1) {
                    return nodes.children[node].children[0].data;
                }
            } 
        } else {
            foundSwagger = searchSwaggerUI(nodes.children[node]);
            if (foundSwagger) {
                return foundSwagger;
            }
        }
    } 
}
//getGraphQl();
//getApiDocs();