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
		type : search.Type.SUPPORT_CASE,
		filters : [
		   search.createFilter({
			   name 	: 'status',
			   operator : search.Operator.ANYOF,
			   values 	: 3    // 3 = Escalated
		   }),
		   search.createFilter({
			   name 	: 'title',
			   join 	: 'employee',
			   operator : search.Operator.HASKEYWORDS,
			   values 	: 'support' 
		   })
		],
    	columns : [
    	   search.createColumn({name : 'title'}),
    	   search.createColumn({name : 'startdate'}),
    	   search.createColumn({name : 'assigned'}),
    	   search.createColumn({name : 'status'}),
    	   search.createColumn({name : 'department'	, join : 'employee'}),
    	   search.createColumn({name : 'title'		, join : 'employee'})        	           
    	]    		
	});   	   	 	
	
	var searchResults = caseSearch.run().getRange({
		start : 0,
		end : 999
	});    
	
	for (var i = 0; i < searchResults.length; i++) {
		var subject = searchResults[i].getValue('title');
		var assignedTo = searchResults[i].getValue('assigned');
		var assignedToName = searchResults[i].getText('assigned');
		var status = searchResults[i].getValue('status');
		var department = searchResults[i].getValue({
			name : 'department',
			join : 'employee'
		});
		var jobTitle = searchResults[i].getValue({
			name : 'title',
			join : 'employee'
		});		
		
		log.debug('Case Information', 'Subject :' + subject + '\n' +
				'Assigned To : ' + assignedTo + ' - ' + assignedToName + '\n' + 
				'Status : ' + status + '\n' + 
				'Department : ' + department + '\n' + 
				'Job Title : ' + jobTitle + '\n'			
		);
		
	}
	

	var stop = 'stop';
 
});


//var caseSearch = search.load({
//id : 'customsearch_sdr_escalated_searches'
//});
//

