var remove_element_id_array = ["secondary", "page", "container-g4g-footer", "disqus_thread", "ide_link"];
removeElementById(remove_element_id_array);


var remove_classes = ["leftSideBarParent", "entry-meta", "no-p-tag", "plugins", "nav-single"];
removeClasses(remove_classes);


//TODO: Use these methods from helper. Issue: require is not working.
function removeElementById(elements) {
	for (var num = 0; num < elements.length; num++) {
		var element_to_remove = document.getElementById(elements[num]);
		if (element_to_remove) {
			element_to_remove.parentElement.removeChild(element_to_remove);	
		}
	}
}

function removeClasses(classes) {
	for (var num = 0; num < remove_classes.length; num++) {
		var class_to_remove = document.getElementsByClassName(remove_classes[num]);
		if (class_to_remove && class_to_remove.length) {
			class_to_remove[0].parentNode.removeChild(class_to_remove[0]);	
		}
	}
}

