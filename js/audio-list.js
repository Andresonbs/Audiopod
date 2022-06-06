
// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing
let allMusic = []
var xReq = new XMLHttpRequest()
xReq.onreadystatechange = function (){
  if (this.readyState == 4 && this.status==200){
    let response = this.responseText
    let convertedResponse = JSON.parse(response)
    console.log(convertedResponse)
    for (var key in convertedResponse) {
      if (convertedResponse.hasOwnProperty(key)) {
          console.log(convertedResponse[key])
          allMusic.push( convertedResponse[key]);
      }
    }
    for (item in allMusic)
    {
      console.log(item)
    }
    console.log(allMusic)
  }
}
xReq.open("GET", "http://127.0.0.1:8080/audiobook",true)
xReq.send()
/*let allMusic = [
  {
    name: "Harley Bird - Home",
    artist: "Jordan Schor",
    img: "music-1",
    src: "music-1",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    name: "Ikson Anywhere – Ikson",
    artist: "Audio Library",
    img: "music-2",
    src: "music-2",
    info: "description 2 - this episode is about"

  },
  {
    name: "Beauz & Jvna - Crazy",
    artist: "Beauz & Jvna",
    img: "music-3",
    src: "music-3",
    info: "description 3 - this episode is about"

  },
  {
    name: "Hardwind - Want Me",
    artist: "Mike Archangelo",
    img: "music-4",
    src: "music-4",
    info: "description 4 - this episode is about"

  },
  {
    name: "Jim - Sun Goes Down",
    artist: "Jim Yosef x Roy",
    img: "music-5",
    src: "music-5",
    info: "description 5 - this episode is about"

  },
  {
    name: "Lost Sky - Vision NCS",
    artist: "NCS Release",
    img: "music-6",
    src: "music-6",
    info: "description 6 - this episode is about"

  },
  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];*/