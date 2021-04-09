var webpage = require('webpage').create();
webpage
  .open('page.html') // loads a page
  .then(function() {
    webpage.viewportSize = { width: 1240, height: 1754 };
    webpage.render('nsi_04_03_15_fusion_correction.html', { 
                      format:'pdf',
                      onlyViewport:true 
                    });
    slimer.exit();
  });

