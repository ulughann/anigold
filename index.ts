import { Mode } from "fs";
import Module from "module";

//express + ejs
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));

const PocketBase = require('pocketbase/cjs');
const pb = new PocketBase('http://127.0.0.1:8090');

app.get('/', (req: any, res: any) => {
    res.render('home');
});

app.get('/redirect', (req: any, res: any) => {
    res.render('partials/redirect');

});
app.get('/anime/ep/:episode', async(req: any, res: any) => {
    const episode = await pb.collection('episodes').getOne(req.params.episode);
    const resultList = await pb.collection('sources').getList(1, 50, {
        filter: 'someField1 != someField2',
        sort: '-created',

    });
    
    res.render('episode',
    {
        id: req.params.episode,
        title: episode.name,
        description: episode.description || 'No description',
        videos: episode.sources || [],
    });
    console.log(episode)

});


app.get('/anime/:id', async(req: any, res: any) => {
    const record = await pb.collection('animes').getOne(req.params.id);
    res.render('anime',
    {
        id: req.params.id,
        title: record.name,
        description: record.description || 'No description',
        cover: record.cover || 'https://i.imgur.com/1Z1Z1Z1.png',
        episodelen: record.field.length || 'No episodes',
        episodes: record.field || [],
        likes: record.likes || 'No likes',
    }
    );

});



app.listen(3000, () => {
    console.log('listening on port 3000');
});

