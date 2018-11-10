var url_ = new URL(location.href);
var file = url_.searchParams.get("link");
async function Test(FilePath) {
    var result = await fetch("torrents/"+FilePath);
    if(result.ok){
        var string = await result.text();
        //console.log(string);
        var torrentId = string;

        var client = new WebTorrent()
        // Download the torrent
        client.add(torrentId, function (torrent) {

        // Torrents can contain many files. Let's use the .mp4 file
        var file = torrent.files.find(function (file) {
            return file.name.endsWith('.mp4')
        })

        // Stream the file in the browser
        file.appendTo('#output')
        })
    }
}
Test(file);