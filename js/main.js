// Step 1)
// Take your previous lab solution and copy and paste it here (the Javascript only)
// Get that working. I've removed the example song so make sure your code hasn't broken because of it.
// If you didn't finish the lab, finish it up for Step 1
// var musicPlaylist = {
  // 'results': [
  //   {
  //     'artistName': 'ABBA',
  //     'trackName': 'Dancing Queen',
  //     'artworkUrl100': 'http://www.abbafanatic.com/communities/9/004/006/295/159/images/4527007902.jpg',
  //     'previewUrl': "http://a1029.phobos.apple.com/us/r1000/051/Music4/v4/6a/76/11/6a761195-efb2-a649-ae5a-6e3f9b74f2e1/mzaf_2735411689193600746.plus.aac.p.m4a",
  //     'trackPrice': 1.29
  //   },
  //   {
  //     'artistName': 'ABBA',
  //     'trackName': 'Mamma Mia',
  //     'artworkUrl100': 'http://image.mp3.zdn.vn/covers/8/2/824ae0e48db46146ba36004f17cde258_1337240318.jpg',
  //     'previewUrl': 'http://a638.phobos.apple.com/us/r1000/032/Music/v4/f2/b9/e7/f2b9e7fb-820c-2c0f-90af-110c5d8b47f4/mzaf_4774072711931856116.plus.aac.p.m4a',
  //     'trackPrice': 0.99
  //   },
  //   {
  //     'artistName': 'ABBA',
  //     'trackName': 'The Winner Take it All',
  //     'artworkUrl100': 'http://en.academic.ru/pictures/enwiki/87/Winner_Takes_It_All.jpg',
  //     'previewUrl': 'http://a1433.phobos.apple.com/us/r1000/023/Music6/v4/92/7e/45/927e450f-2744-f8a4-3972-b04751ee309e/mzaf_189824385391134141.plus.aac.p.m4a',
  //     'trackPrice': 1.29
  //   },
  //   {
  //     'artistName': 'ABBA',
  //     'trackName': 'Take a Chance on Me',
  //     'artworkUrl100': 'https://i.scdn.co/image/e572d9826f2f90396243eeb8724e25a0ca390206',
  //     'previewUrl': 'http://a1889.phobos.apple.com/us/r1000/023/Music/v4/15/84/c1/1584c1fc-687f-88d1-001f-468b26cc6a6e/mzaf_949527388120129365.plus.aac.p.m4a',
  //     'trackPrice': 1.29
  //   }
  // ]
  //};


// Step 2)
// Delete the variable musicPlaylist
// now instead make an AJAX request to this url: "https://itunes.apple.com/search?term=abba"
// use the response JSON from that request to populate the page.

// $.getJSON("https://itunes.apple.com/search?term=abba",
// 	function(responseJSON){
// 		console.log(responseJSON);
// 		var musicPlaylist = responseJSON;

// 		for(var index=0; index < musicPlaylist["results"].length; index++){

// 		  var artistName = musicPlaylist["results"][index]["artistName"]
// 		  var trackName = musicPlaylist["results"][index]["trackName"]
// 		  console.log(trackName)
// 		  var artworkUrl100 = musicPlaylist["results"][index]["artworkUrl100"]
// 		  var previewUrl = musicPlaylist["results"][index]["previewUrl"]
// 		  var trackPrice = musicPlaylist["results"][index]["trackPrice"]

// 		  $(".song img").eq(index).attr("src", artworkUrl100);
// 		  $(".song .title").eq(index).text(trackName);
// 		  $(".song .artist_name").eq(index).text(artistName);
// 		  $(".song .track_price").eq(index).text(trackPrice);
// 		  $(".song a").eq(index).attr("href", previewUrl);

// 		}
// 	}
//);


// Step 3)
// Now the hard part. Instead of doing a request to https://itunes.apple.com/search?term=abba
// I want you to generate the URL for the AJAX request based on the text
// inside the input element on the page.
// So if I type Journey into that input and hit submit.
// it should create the url
// https://itunes.apple.com/search?term=journey
// and do an AJAX request to that URL


function artistSearch(){
	var inputValue = $("#artist-search").val();

	$.getJSON("https://itunes.apple.com/search?term=" + inputValue,
		function(responseJSON){
			var musicPlaylist = responseJSON;

			for(var index=0; index < musicPlaylist["results"].length; index++) {
				if (index === $(".song").length) {
				 	var newDiv = $("<div>").addClass("song");
				 	var img = $("<img>").attr("src", artworkUrl100);
				 	var title = $("<div>").addClass("title");
				 	var name = $("<div>").addClass("artist_name");
				 	var link = $("<a>").attr("href", previewUrl).text("Listen Here");
				 	var price = $("<div>").addClass("track_price")

				 	newDiv.append(img).append(title).append(name).append(price).append(link);
				 	$("#playlist").append(newDiv);
				} 

				var artistName = musicPlaylist["results"][index]["artistName"]
				var trackName = musicPlaylist["results"][index]["trackName"]
				var artworkUrl100 = musicPlaylist["results"][index]["artworkUrl100"]
				var previewUrl = musicPlaylist["results"][index]["previewUrl"]
				var trackPrice = musicPlaylist["results"][index]["trackPrice"]

				$(".song img").eq(index).attr("src", artworkUrl100);
				$(".song .title").eq(index).text(trackName);
				$(".song .artist_name").eq(index).text(artistName);
				$(".song .track_price").eq(index).text(trackPrice);
				$(".song a").eq(index).attr("href", previewUrl);
			}
		}
	);
}




$("#submit-button").click(artistSearch);


// Step 4)
// We get back more songs from the API than we have!
// Use our knowledge of creating HTML in Javascript to
// show all the songs properly. The first 3 songs you can skip
// so start your loop at index = 2 instead of 0.