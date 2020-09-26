
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let paragraph = document.createElement("p");

    let textNode = document.createTextNode(string); 
    paragraph.appendChild(textNode);

    htmlElement.appendChild(paragraph);

    // Why???
    // You can do this by checking if the incoming htmlElement has any children,
    // and it does, removing those children before appending any other elements.

};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);