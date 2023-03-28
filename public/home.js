pb.collection('animes').getFullList(50, {
    sort: '-created',
}).then((result) => {
    result.forEach((anime) => {
        document.getElementById("animes").innerHTML += `
        <div class="anime-card" onclick="location.href='/anime/${anime.id}';">
            <div class="image-layer" style="
            background-image: url('${anime.cover}');">
                <div class="stats">
                    <center>
                        <h1 class="anime-title">${anime.name}</h1>
                        <a class="subtitle" style="color: white;">${anime.field.length} bölüm | </a>
                        <a class="subtitle" style="color: white;">${anime.likes} like</a><br>
                    </center>
                </div>


            </div>

        </div> `

console.log(anime);

    });

}).
catch((err) => {
    console.log(err);
});