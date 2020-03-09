/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/email', 'N/record', 'N/redirect', 'N/ui/serverWidget'],
/**
 * @param {email} email
 * @param {record} record
 * @param {redirect} redirect
 * @param {serverWidget} serverWidget
 */
function(email, record, redirect, serverWidget) {
   
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
    	
    	var form = serverWidget.createForm({
    		title : 'Customer Onboarding',
    		hideNavBar : false
    	}); 
    	
    	var customerInfoGrp = form.addFieldGroup({
    		id : 'custpage_grp_customer', 
    		label : 'Customer Information'
    	});
    	var taskGrp = form.addFieldGroup({
    		id : 'custpage_grp_task', 
    		label : 'Onbaoarding Task'
    	});
    	var emailGrp = form.addFieldGroup({
    		id : 'custpage_grp_email', 
    		label : 'Welcome Email'
    	});   	    	
    	
    	// Customer Fields
    	var nameFld = form.addField({
    		id 			: 'custpage_info_name',  
    		type		: serverWidget.FieldType.TEXT,
    		label 		: 'Customer Mame',
    		container 	: 'custpage_grp_customer'
    	});
    	var salesRepFld = form.addField({
    		id 			: 'custpage_info_salesrep',  
    		type		: serverWidget.FieldType.SELECT,
    		label 		: 'Sales Rep',
    		source		: 'employee',
    		container 	: 'custpage_grp_customer'
    	});
    	var phoneFld = form.addField({
    		id 			: 'custpage_info_phone',  
    		type		: serverWidget.FieldType.PHONE,
    		label 		: 'Phone',    		 
    		container 	: 'custpage_grp_customer'
    	});
    	
    	// Task Fields
    	var tskTitleFld = form.addField({
    		id 			: 'custpage_tsk_title',  
    		type		: serverWidget.FieldType.TEXT,
    		label 		: 'Task Title',    		 
    		container 	: 'custpage_grp_task'
    	});
    	var tskTitleFld = form.addField({
    		id 			: 'custpage_tsk_notes',  
    		type		: serverWidget.FieldType.TEXTAREA,
    		label 		: 'Task Notes',    		 
    		container 	: 'custpage_grp_task'
    	});    	
    	
    	// Email Fields
    	var emSubjectFld = form.addField({
    		id 			: 'custpage_em_subject',  
    		type		: serverWidget.FieldType.TEXT,
    		label 		: 'Subject',    		 
    		container 	: 'custpage_grp_email'
    	}); 
    	var emBodyFld = form.addField({
    		id 		: 'custpage_em_body',  
    		type	: serverWidget.FieldType.TEXTAREA,
    		label 	: 'Body',
    		container : 'custpage_grp_email'     		
    	});
    	var noteFld = form.addField({
    		id 		: 'custpage_impt_body',  
    		type	: serverWidget.FieldType.HELP,
    		label 	: 'NOTE: These tasks are important customer onboarding tasks.  Pleae make sure you complete all recomended tasks.'
    	});    	
    	noteFld.updateLayoutType({
    		layoutType : serverWidget.FieldLayoutType.OUTSIDEABOVE
    	});
    	
    	form.addSubmitButton('Complete Process');
    	
    	response.writePage(form);   	
    }

    return {
        onRequest: onRequest
    };
    
});
