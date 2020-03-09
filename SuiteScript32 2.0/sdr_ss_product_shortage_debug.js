/**
 * @NApiVersion 2.0
 * @NScriptType ScheduledScript
 * @NModuleScope SameAccount
 */
require(['N/search'],
/**
 * @param {search} search
 */
function(search) {

	var caseSearch = search.create({
		type : search.Type.INVENTORY_ITEM,
		filters : [
		   search.createFilter({
			   name 	: 'quantityOnHand',
			   operator : search.Operator.LESSTHAN,
			   values 	: 1000   
		   }),		  
		],
    	columns : [
    	   search.createColumn({name : 'itemid'}),
    	   search.createColumn({name : 'displayname'}),
    	   search.createColumn({name : 'created'}),   	 
    	   search.createColumn({name : 'location'}),   	 
    	   search.createColumn({name : 'quantityOnHand'})
    	]    		
	});   	   	 	
	
	var searchResults = caseSearch.run().getRange({
		start : 0,
		end : 999
	});    	

	var stop = 'stop';
 
});


//var caseSearch = search.load({
//id : 'customsearch_sdr_escalated_searches'
//});
//

