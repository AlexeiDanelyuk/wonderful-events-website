const express = require('express');
const router = express.Router();
const routeRoot = '/';


/**
/**This function is used to display the 'homepage' of ComicCon using Handlebars in a visually-pleasing way. 
 * @param {*} request HTTP request given by the client for accessing the home page
 * @param {*} response HTTP response given by the server to display the home page of Comic-con
 */
function home(request, response){
    response.render('home.hbs');
}

router.get('/', home); 
router.get('/home', home);


module.exports = {
    router,
    routeRoot,
    home
}