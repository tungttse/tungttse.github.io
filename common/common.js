let validateArr = [
    {
        href : "https://validator.w3.org/check?uri=",
        img : "w3c-html.png",
        alt: "html validator"
    },

    {
        href : "http://jigsaw.w3.org/css-validator/validator?uri=",
        img : "w3c-css.png",
        alt: "CSS validator"
    },
]

function renderValidate() {
    let currentUrl = window.location.href;
    let content = "";

    let path = window.location.pathname;
    let pathArr = path.split("/");

    let rootPath = './';
    for(let i = 0; i < pathArr.length - 2 ; i++) {
        rootPath +="../";
    }

    for(let i = 0 ; i < validateArr.length ; i++) {
        let imgSrc = rootPath + 'common/' + validateArr[i].img;
            content += `<a href="${validateArr[i].href}${currentUrl}" target="_blank">
            <img src="${imgSrc}" alt="${validateArr[i].alt}"></a><br/>`;
    }
    return content;
}