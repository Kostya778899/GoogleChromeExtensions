function RemoveTags(parent, tag) {
	parent.querySelectorAll($".{tag}").forEach(element => element.classList.remove(tag));
}


// alert("Main worck.");

document.querySelectorAll(".notranslate").forEach(element => element.classList.remove("notranslate"));

document.querySelectorAll("img").forEach(element => element.scr = "https://i1.sndcdn.com/artworks-5wphINDN8vmrsQhR-YQn3eA-t240x240.jpg");