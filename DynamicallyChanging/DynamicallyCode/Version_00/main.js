function RemoveTags(parent, tag) {
	parent.querySelectorAll($".{tag}").forEach(element => element.classList.remove(tag));
}


alert("Main worck.");

document.querySelectorAll(".notranslate").forEach(element => element.classList.remove("notranslate"));