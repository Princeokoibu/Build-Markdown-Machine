function updatePreview() {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
  
  let defaultText = `\
# freecodecamp Solutions:
## Build a markdown previewer
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).

<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![alt text](https://i.pinimg.com/236x/72/bc/09/72bc091246361583fba7a93a31f898b9.jpg 'Cute Gold Retriever')

**This is an example of Bolded Text**`;

  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked(defaultText)}