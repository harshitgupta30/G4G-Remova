var removeElementById = function (elements) {
	for (var num = 0; num < elements.length; num++) {
		var element_to_remove = document.getElementById(elements[num]);
		if (element_to_remove) {
			element_to_remove.parentElement.removeChild(element_to_remove);	
		}
	}
}

var removeClasses = function(classes) {
	for (var num = 0; num < remove_classes.length; num++) {
		var class_to_remove = document.getElementsByClassName(remove_classes[num]);
		if (class_to_remove && class_to_remove.length) {
			class_to_remove[0].parentNode.removeChild(class_to_remove[0]);	
		}
	}
}

exports.removeElementById = removeElementById;
exports.removeClasses = removeClasses;