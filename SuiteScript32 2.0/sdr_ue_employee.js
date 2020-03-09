/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/redirect'],
/**
 * @param {record} record
 * @param {redirect} redirect
 */
function(record, redirect) {
   
    return {
    	 afterSubmit : function (context) {
    	    	var employee 	= context.newRecord;
    	    	var empCode 	= employee.getValue('custentity_sdr_employee_code');    	    	
    	    	
    	    	//name params anything you want like custparam_... blah blah.
    	    	redirect.toSuitelet({
    	    		scriptId : 'customscript_sdr_sl_update_emp_notes',
    	    		deploymentId : 'customdeploy_sdr_sl_update_emp_notes',
    	    		parameters : {
    	    			custparam_sdr_name : employee.getValue('entityid'),
    	    			custparam_sdr_notes : employee.getValue('comments'),
    	    			custparam_sdr_empid : employee.id
    	    		}
    	    	});  	
    	    }  
    	};    
});
