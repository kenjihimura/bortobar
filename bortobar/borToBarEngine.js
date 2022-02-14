
function borToBar(fromLetter, toLetter) {
    for (var i = 0; i < document.childNodes.length; i++) {
        checkNode(document.childNodes[i], fromLetter, toLetter);
    }
}
    
function checkNode(node, fromLetter, toLetter) {
    var nodeName = node.nodeName.toLowerCase();
    if(nodeName === 'script' || nodeName === 'style') {return;}
    if (node.nodeType === 3) {
        alterText(node, fromLetter, toLetter);
        return;
    }
    if (node.childNodes.length > 0) {
        for (var j = 0; j < node.childNodes.length; j++) {
            checkNode(node.childNodes[j], fromLetter, toLetter);
        }
    }
}

function alterText(node, fromLetter, toLetter) {
    var originalReplaceWord1 = 'motocultank';
    var originalReplaceWord2 = 'astasiemprelekrou';
    var cleanedOriginalReplaceWord1 = originalReplaceWord1.replaceAll(toLetter, '');
    var cleanedOriginalReplaceWord2 = originalReplaceWord2.replaceAll(fromLetter, '');

    var text = node.nodeValue;

    var newText = text.replaceAll(fromLetter, cleanedOriginalReplaceWord1);
    newText = newText.replaceAll(toLetter, cleanedOriginalReplaceWord2);
    newText = newText.replaceAll(cleanedOriginalReplaceWord1, toLetter);
    newText = newText.replaceAll(cleanedOriginalReplaceWord2, fromLetter);

    node.nodeValue = newText;
}
