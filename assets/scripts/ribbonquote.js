const quoteText = "Variety choices may facilitate or impede access and acceptance of these programs by heritage speakers, as well as point to theoretical & material considerations of justice in the matrix in which speakers and varieties are represented, and for whom.";
const quoteTextWords = quoteText.split(" ");
const flourishWords = ["or", "theoretical", "&", "material", "justice", "whom."];

function getTextWidth(text)
{
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = `26px "Ibarra Real Nova"`;
    const measurement = context.measureText(text);
    canvas.remove();
    return Math.ceil(measurement.width);
}


function fillRows()
{
    let rowText = '', i = 0, n = 1;

    for (i = 0; i < quoteTextWords.length; i++)
    {
        rowText = rowText + ' ' + quoteTextWords[i];
        let spacing = (n == 1) ? 150 : 55;
        let maxWidth = $('.ribbon-quote').width() - spacing;
        let rowIsFull = getTextWidth(rowText) > maxWidth;

        if (rowIsFull)
        {
            rowText = rowText.substring(0, rowText.lastIndexOf(" "));
            newRow(rowText);
            rowText = '';
            i--;
            n++;
        }
    }
    newRow(rowText);
}

function newRow(text){
    const overlap = text.split(" ").filter(x => flourishWords.includes(x));
    
    if (overlap.length > 0)
    {
        overlap.map((item) => (
            text = text.replace(item, `<span class="flourish">` + item + `</span>`)
        ));
    }

    $('.ribbon-quote .body').append(`
            <div class="row-container">
                <div class="startrow"></div>
                <div class="row">${text}</div>
                <div class="endrow"></div>
            </div>
        `);
}

fillRows();