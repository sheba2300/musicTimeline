
function moveLeft()
{
	walker.src = "moves/" + characters[idx];
	walker.style.transform= "scale(-.5,.5)";
  xPosition = xPosition - 1;
	walker.style.left = xPosition + "%";
  if(idx >= characters.length-1)
  {
    idx = 0;
  }
  else
  {
    idx++;
  }

}
function check()
{

	if(xPosition>3&&xPosition<20&&yPosition>35&&yPosition<48)
	{
		window.location = "1960s.html";
	}
	else
	{
		if(xPosition>22&&xPosition<32&&yPosition>65&&yPosition<80)
		{
			window.location = "1970s.html";
		}
		else {
			if(xPosition>35&&xPosition<50&&yPosition>30&&yPosition<40)
			{
				window.location = "1980s.html";

			}
			else {
				if(xPosition>55&&xPosition<75&&yPosition>65&&yPosition<85)
				{
					window.location = "1990s.html";
				}
				else {
					if(xPosition>65&&xPosition<75&&yPosition>0&&yPosition<20)
					{
						window.location = "2000s.html";

					}
					else{
						if(xPosition>78&&xPosition<90&&yPosition>35&&yPosition<45)
						{
							window.location = "present.html";

						}
					}
				}
			}
		}
	}
}
function moveRight()
{
	walker.src = "moves/" + characters[idx];
	walker.style.transform= "scale(.5,.5)";
  xPosition = xPosition + 1;
	walker.style.left = xPosition + "%";
  walker.style.transform = "scaleX(.5,.5)";
  if(idx >= characters.length-1)
  {
    idx = 0;
  }
  else
  {
    idx++;
  }

}
function moveUp()
{
	walker.src = "moves/" + characters[idx];
	walker.style.transform= "scale(.5,.5)";
  yPosition = yPosition - 1;
	walker.style.top = yPosition + "%";
  if(idx >= characters.length-1)
  {
    idx = 0;
  }
  else
  {
    idx++;
  }

}
function moveDown()
{
	walker.src = "moves/" + characters[idx];
	//walker.style.transform= "scale(.5,.5)";
  yPosition = yPosition + 1;
	walker.style.top = yPosition + "%";
  if(idx >= characters.length-1)
  {
    idx = 0;
  }
  else
  {
    idx++;
  }

}

function findKey()
{
  letter = event.key;
  if (letter=="w" || letter == "W")
{
    		moveUp();
				check();

  }

  if (letter=="s" || letter == "S")
   {

     moveDown();
		 check();

  }

  if (letter=="a" || letter == "A")
   {
     moveLeft();
		 check();


  }

  if (letter=="d" || letter == "D")
   {
     moveRight();
		 check();

  }
}

function getArtists(decade)
{
		myArtists = [];
    legends = iconicArtist.split("/");
		for(x=0;x<legends.length;x++)
		{
		myArtists.push(legends[x].split(";"));
		}
		return(myArtists[decade]);
}
function getPop(decade)
{
	finalPlaylist=[];
	popList = popPlaylist.split(";");

	for(x=0;x<popList.length;x++)
	{
		finalPlaylist.push(popList[decade].split(","));
	}
	return(finalPlaylist[decade]);
}

function getSoul(decade)
{
	finalPlaylist=[];
	soulList = soulPlaylist.split(";");

	for(x=0;x<soulList.length;x++)
	{
		finalPlaylist.push(soulList[decade].split(","));
	}
	return(finalPlaylist[decade]);
}
function getRock(decade)
{
	finalPlaylist=[];
	rockList = rockPlaylist.split(";");
	for(x=0;x<rockList.length;x++)
	{
		finalPlaylist.push(rockList[decade].split(","));
	}
	return(finalPlaylist[decade]);
}

function initialize(decade)
{
  showPop = document.getElementById("popPlaylist");
  showSoul = document.getElementById("soulPlaylist");
  showRock = document.getElementById("rockPlaylist");
  showList = document.getElementById("list");
  showList.style.display="none";
	artistList=[];
	topOfDecade=getArtists(decade);
  for(x=0;x<topOfDecade.length;x++)
  {
	 artist = topOfDecade[x];
	 index = artist.indexOf(",");
	 artistList.push(artist.substr(0,index));
   newArtist = "artist"+x;
   newArtist = document.createElement("span");
   name = artistList[x];
   artistName = document.createTextNode(name);
   newArtist.appendChild(artistName);

   id = "artist"+x;
   prevId = "artist" +x-1;
   element = document.getElementById(id);
   element.appendChild(newArtist);
}
    pop = document.getElementById("popId");
    soul = document.getElementById("SoulId");
    rock = document.getElementById("rockId");
    greatestHits = document.getElementById("greatest");
    legendsOfTheTime = document.getElementById("legends");
    artist = document.getElementById("artistId");
 }
function showGreat()
{
  pop.style.display="inline";
  soul.style.display="inline";
  rock.style.display="inline";
  greatestHits.style.display="inline";
}
function showLeg()
{
  artist.style.display="block";

  legendsOfTheTime.style.display="inline";

}
function hideLeg()
{
  legendsOfTheTime.style.display="none";
}
function hideGreat()
{
  pop.style.display="none";
  soul.style.display="none";
  rock.style.display="none";
  greatestHits.style.display="none";
}

//  popPlaylist=pop.split(";");
//  alert(popPlaylist);


function generatePopPlaylist(decade)
{
  showList.style.display="inline";
  showPop.style.display="inline";
  showSoul.style.display="none";
  showRock.style.display = "none";
  popList = getPop(decade);
  newList = popList
  myPopPlaylist=[];
  if (showPop.hasChildNodes())
  {
    nodesNum=showPop.childElementCount;
      for(x=0;x<nodesNum;x++)
      {
      showPop.removeChild(showPop.childNodes[0]);
    }
  }
  for(x=0;x<8;x++)
  {
     idx=Math.floor(Math.random() * (newList.length))

     newSong= document.createElement("LI");
     songInfo = document.createTextNode(newList[idx]);


     newSong.appendChild(songInfo);
     showPop.appendChild(newSong);
     newList.splice(idx,1);
  }



}
function generateSoulPlaylist(decade)
{
  showList.style.display="inline";
  showSoul.style.display="inline";
  showPop.style.display = "none";
  showRock.style.display = "none";
  soulList = getSoul(decade);
  newList = soulList
  mySoulPlaylist=[];
  if (showSoul.hasChildNodes())
  {
    nodesNum=showSoul.childElementCount;
      for(x=0;x<nodesNum;x++)
      {
      showSoul.removeChild(showSoul.childNodes[0]);
    }
  }
  for(x=0;x<8;x++)
  {
     idx=Math.floor(Math.random() * (newList.length))

     newSong= document.createElement("LI");
     songInfo = document.createTextNode(newList[idx]);
     newLine = document.createElement("BR")

     newSong.appendChild(songInfo);
     showSoul.appendChild(newSong);
     newList.splice(idx,1);
}
}

function generateRockPlaylist(decade)
{
  showList.style.display="inline";
  showRock.style.display="inline";
  showPop.style.display = "none";
  showSoul.style.display = "none";
  rockList = getRock(decade);
  newList = rockList
  myRockPlaylist=[];
  if (showRock.hasChildNodes())
  {
    nodesNum=showRock.childElementCount;
      for(x=0;x<nodesNum;x++)
      {
      showRock.removeChild(showRock.childNodes[0]);
    }
  }
  for(x=0;x<8;x++)
  {
     idx=Math.floor(Math.random() * (newList.length))

     newSong= document.createElement("LI");
     songInfo = document.createTextNode(newList[idx]);
     newLine = document.createElement("BR")

     newSong.appendChild(songInfo);
     showRock.appendChild(newSong);
     newList.splice(idx,1);
}
}
function showSongs(artistNum)
{
  names=document.getElementsByClassName("artist");
  for(x=0;x<names.length;x++)
  {
  names[x].style.color="black";
  }
  place = document.getElementById("songList");

  if (place.hasChildNodes())
  {
    nodesNum=place.childElementCount;
      for(x=0;x<nodesNum;x++)
      {
      place.removeChild(place.childNodes[0]);
    }
  }
  choice = "artist"+artistNum;
  document.getElementById(choice).style.color="rgb(102, 0, 102)";
  index = topOfDecade[artistNum].indexOf(",");

  play = topOfDecade[artistNum].substr(index+1,topOfDecade[artistNum].length-1);
 playlist=[];
  playlist = play.split(",")


for(x=0;x<playlist.length;x++)
{
  songs = document.createElement("LI");
  list = document.createTextNode(playlist[x]);


  songs.appendChild(list);
  place.appendChild(songs);
}
}
function back()
{
  legendsOfTheTime.style.display="inline-block";
  greatestHits.style.display="inline-block";
  pop.style.display="none";
  soul.style.display="none";
  rock.style.display="none";
  artist.style.display="none";
  showRock.style.display = "none";
  showPop.style.display = "none";
  showSoul.style.display = "none";
  showList.style.display="none";


}
