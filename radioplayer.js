// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);
  const channelsContainer = document.getElementById("channels");
  data.channels.forEach((channel) => {
    const channelDiv = document.createElement("div");
    channelDiv.setAttribute("class", "channel");
    channelDiv.style.backgroundColor = "#" + channel.color;
    channelDiv.innerHTML = `<h3>${channel.name}</h3>
    <img src= "${channel.image}" alt= "${channel.name}" width= "100px">
    <audio controls> 
    <source src="${channel.liveaudio.url}" type="audio/mpeg"/>"
    </audio>`;
    channelsContainer.appendChild(channelDiv);
  });
}

getRadio();

// Steg 2.loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
// <source src="" type="audio/mpeg" />
// </audio>
