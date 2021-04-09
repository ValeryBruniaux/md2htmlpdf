var page = new WebPage();

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"1cm", right:"1cm", top:"1cm", bottom:"1cm" },
    footer        : {
        height        : "1cm",
        contents        : phantom.callback(function(pageNum, numPages){
            return("Valéry Bruniaux : " + pageNum + " / " + numPages);
        })
    }
};

page.open("nsi_04_03_15_fusion_correction.html", function (status) {
    page.render("export.pdf");
    phantom.exit();
});

