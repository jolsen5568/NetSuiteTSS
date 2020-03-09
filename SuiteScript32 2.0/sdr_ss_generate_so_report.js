/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 * @NModuleScope SameAccount
 */
define(['N/runtime', 'N/search', './lib/sdr_lib', '/SuiteScripts - Globals/lib/'],
/**
 * @param {runtime} runtime
 * @param {search} search
 */
function(runtime, search, sdrLib) {
   
    /**
     * Definition of the Scheduled script trigger point.
     *
     * @param {Object} scriptContext
     * @param {string} scriptContext.type - The context in which the script is executed. It is one of the values from the scriptContext.InvocationType enum.
     * @Since 2015.2
     */
    function execute(scriptContext) {
    	var scriptref = runtime.getCurrentScript();
    	var customId = scriptref.getParamter({
    		name : 'custscript_sdr_customer_id'
    	});
    	
    	var filters =[['type', 'anyof', 'SalesOrd'],
    	              'and', ['mainline', 'is', 'T']
    				];
    	
    	if(customerId) {
    		//filters.push('and', ['entity', 'anyof', customerId]);
    		filters = _.concat(filters, ['and', ['entity', 'anyof', customerId]]);
    	}
    	
    	var orderSearch = search.create({
    		type : search.Type.Transaction,
    		filters : filters,   
    		columns : ['entity', 'trandate', 'tranid', 'salesrep', 'total']    			
    	});
    	
    	sdrLib.sendReport(orderSearch);
    }

    return {
        execute: execute
    };
    
});
