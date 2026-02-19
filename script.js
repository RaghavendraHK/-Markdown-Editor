const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
    const text = markdownInput.value;
    preview.innerHTML = convertMarkdown(text);
});

function convertMarkdown(text) {
    let html = text;

    // Headings
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Bold and Italic
    html = html.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");
    html = html.replace(/\*(.*?)\*/gim, "<i>$1</i>");

    // Inline code
    html = html.replace(/`(.*?)`/gim, "<code>$1</code>");

    // Line breaks
    html = html.replace(/\n$/gim, "<br>");

    return html;
}
