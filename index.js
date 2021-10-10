const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const brawlApi = require('brawl-stars-api')


var allowedOrigins = ['http://176.78.165.210',
                      'http://brawlers.kozow.com'];
app.use(cors({  
  origin: function(origin, callback){
    // allow requests with no origin     
    // (like mobile apps or curl requests)    
    if(!origin) 
      return callback(null, true);    
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +                
          'allow access from the specified Origin.';      
      return callback(new Error(msg), false);    
    }    
    return callback(null, true);  
  }
}));

const PLAYER_TAGS = {
  Manel: '#2GPPL89QY',
  Big: '#229V2CPLP',
  Gomes: '#Y2C808C9Y',
  Dico: '#URVUYO8L',
  Kanina: '#PUOOYGYQ'
}


const client = new brawlApi({
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZjOTMyZjU4LWI0MzktNDBkOC1hMzEwLTAwYmY2NGM1MWEyMSIsImlhdCI6MTYzMzc0MTA5Miwic3ViIjoiZGV2ZWxvcGVyL2E1M2RiNGYyLTM2ODktODk4Yy01ZTkxLTQ4ZDM4MWE3MTA1NCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTc2Ljc4LjE2NS4yMTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.pnLPTpqUdyxN_fvE05O8uoZWdb6BhQrf_1rUipNiCUUY2P9k0YM0Y6-N8G_nvEhDF7NDHUUqM6s_XiwNcy7y-A'
})

async function getPlayers(tags) {
  const PLAYERS = []

  for (var tag of tags) {
    const player = await getPlayer(tag)
    PLAYERS.push(player);
  }
  return PLAYERS;
}

async function getPlayer(tag) {
  let player = client
    .playerByTag(tag)
    .then(res => res)
    .catch(err => err);

  return player;
}

let players = [];

app.get('/players', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (players.length === 0) {
    players = await getPlayers(Object.values(PLAYER_TAGS))
  }
  res.json(players)

})

// }
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})