/**
 * @NApiVersion 2.x
 * @NScriptType Portlet
 * @NModuleScope SameAccount
 */
define(['N/search'],
/**
 * @param {search} search
 */
function(search) {
	function render(params) {
        var portlet = params.portlet;
        portlet.title = 'My Primary Engines';
        portlet.addLine({
            text: 'Google',
            url: 'http://www.google.com/'
        });
        portlet.addLine({
            text: 'Bing',
            url: 'http://www.bing.com/'
        });
        portlet.addLine({
            text: 'SalesForce',
            url: 'http://www.salesforce.com/'
        });
        portlet.addLine({
            text: 'Kangaroo Mailer',
            url: 'http://www.kangaroomailer.com/'
        });
    }
    return {
        render: render
    };
});