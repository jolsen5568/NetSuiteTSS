/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/ui/serverWidget', 'N/record', 'N/redirect'],
/**
 * @param {serverWidget} serverWidget
 * @param {record} record
 * @param {redirect} redirect
 */
function(serverWidget, record, redirect) {
   
    /**
     * Definition of the Suitelet script trigger point.
     *
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest(context) {
    	
    	var request = context.request;
    	var response = context.response;
    	
    	if (request.method == 'GET') {
        	var name = request.parameters.custparam_sdr_name;
        	var notes = request.parameters.custparam_sdr_notes;
        	var empId = request.parameters.custparam_sdr_empid;  	
        	
        	var form = serverWidget.createForm({
        		title : 'Update Employee Notes',
        		hideNavBar : false
        	});
        	
        	var nameFld = form.addField({
        		id 		: 'custpage_sdr_emp_name',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Name'    		
        	});
        	var notesFld = form.addField({
        		id 		: 'custpage_sdr_notes',  
        		type	: serverWidget.FieldType.TEXTAREA,
        		label 	: 'Notes'    		
        	});
        	var empFldId = form.addField({
        		id 		: 'custpage_sdr_emp_id',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Emp ID'    		
        	});
        	
        	var empLftGate = form.addField({
        		id 		: 'custpage_sdr_lft_gate',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Lift Gate / Pallet Jack'    		
        	});
        	
        	var empDlvAppt = form.addField({
        		id 		: 'custpage_sdr_dlv_appt',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Delivery Appointment'    		
        	});
        	
        	var empInsDeliv = form.addField({
        		id 		: 'custpage_sdr_ins_deliv',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Inside Delivery'    		
        	});
        	
        	var empResDeliv = form.addField({
        		id 		: 'custpage_sdr_res_deliv',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Residential Delivey'    		
        	});
        	
        	var empTightDiff = form.addField({
        		id 		: 'custpage_sdr_tight_diff',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Tight / Difficult Access'    		
        	});
        	
        	form.addSubmitButton({
        		label	: 'Continue'
        	});
        	
        	nameFld.defaultValue = name;
        	notesFld.defaultValue = notes;
        	empFldId.defaultValue = empId;
        	
        	nameFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
        	
        	empFldId.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.HIDDEN
        	});
        	
        	response.writePage(form);    	
    	}    	
    	else {                                  //POST
    		
    		var empId = request.parameters.custpage_sdr_emp_id;
    		var notes = request.parameters.custpage_sdr_notes;
    		
    		var employee = record.load({
    			type : record.Type.EMPLOYEE,
    			id : empId
    		});
    		employee.setValue('comments', notes);
    		employee.save();
    		
    		redirect.toRecord({
    			type : record.Type.EMPLOYEE,
    			id : empId
    		});
    	}    	 
    }

    return {
        onRequest: onRequest
    };
    
});
