/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/ui/serverWidget'],
/**
 * @param {serverWidget} serverWidget
 */
function(serverWidget) {
   
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
    	
    	var assistant = serverWidget.createAssistant({
    		title : 'Customer Onboarding Assistant'
    	});
    	
    	log.debug('Line', 'Created assistant');
    	
    	var customerStp = assistant.addStep({
    		id : 'custpage_sdr_customer_step',
    		label : 'Customer Information'
    	});    	
    	var taskStp = assistant.addStep({
    		id : 'custpage_sdr_tasks',
    		label : 'Customer Information'
    	});
    	var emailStp = assistant.addStep({
    		id : 'custpage_sdr_email',
    		label : 'Customer Information'
    	});
    	var finalizeStp = assistant.addStep({
    		id : 'custpage_sdr_finalize',
    		label : 'Review and Finalize'
    	});
    	
    	log.debug('Line', 'Created steps');
    	
    	// debug
    	if(assistant.getLastAction() == serverWidget.AssistantSubmitAction.NEXT ||  
    			assistant.getLastAction() == serverWidget.AssistantSubmitAction.BACK){
    		log.debug('Step', 'assistant next true');    	 
    	}
    	else
    	{
    		log.debug('Step', 'assistant next NOT true');    	
    	}
    	if(assistant.getLastAction() == serverWidget.AssistantSubmitAction.FINISH) {
    		log.debug('Step', 'assistant Finish true');    	 
    	}
    	else
    	{
    		log.debug('Step', 'assistant Finish NOT true');    	 
    	}    	
    	
    	if(assistant.getLastAction() == serverWidget.AssistantSubmitAction.NEXT ||  
    			assistant.getLastAction() == serverWidget.AssistantSubmitAction.BACK){
    		log.debug('Step', 'Back-Next');
    		assistant.currentStep = assistant.getNextStep();    		
    	} else if(assistant.getLastAction() == serverWidget.AssistantSubmitAction.CANCEL) {
    		log.debug('Step', 'Cancel');
    		assistant.currentStep = assistant.getStep({id : 'custpage_sdr_customer_step'});
    	} else if(assistant.getLastAction() == serverWidget.AssistantSubmitAction.FINISH) {
    		// Finalize process here
    		// Create Task Record
    		// Send Email
    		log.debug('Step', 'Finish');
    		assistant.finishedHtml = 'You have completed the Customer Onboarding Process';  
    	}    	
    	
    	var currentStepId = assistant.currentStep == null ? 'custpage_sdr_customer_step' : assistant.currentStep.id;
		
		switch(currentStepId) {
			// Customer
			case 'custpage_sdr_customer_step':
			var nameFld = assistant.addField({
	    		id 			: 'custpage_info_name',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Customer Name',
	    		container 	: 'custpage_grp_customer'
	    	});
	    	var salesRepFld = assistant.addField({
	    		id 			: 'custpage_info_salesrep',  
	    		type		: serverWidget.FieldType.SELECT,
	    		label 		: 'Sales Rep',
	    		source		: 'employee',
	    		container 	: 'custpage_grp_customer'
	    	});
	    	var phoneFld = assistant.addField({
	    		id 			: 'custpage_info_phone',  
	    		type		: serverWidget.FieldType.PHONE,
	    		label 		: 'Phone',    		 
	    		container 	: 'custpage_grp_customer'
	    	});
	    	break;
	    	
	    	// Task
			case 'custpage_sdr_tasks':
			var tskTitleFld = assistant.addField({
	    		id 			: 'custpage_tsk_title',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Task Title',    		 
	    		container 	: 'custpage_grp_task'
	    	});
	    	var tskNotesFld = assistant.addField({
	    		id 			: 'custpage_tsk_notes',  
	    		type		: serverWidget.FieldType.TEXTAREA,
	    		label 		: 'Task Notes',    		 
	    		container 	: 'custpage_grp_task'
	    	});
	    	break;
	    	
	    	// Email
			case 'custpage_sdr_email':
			var emEmailFld = assistant.addField({
	    		id 			: 'custpage_em_email',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Email',    		 
	    		container 	: 'custpage_grp_email'
	    	}); 
			var emSubjectFld = assistant.addField({
	    		id 			: 'custpage_em_subject',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Subject',    		 
	    		container 	: 'custpage_grp_email'
	    	}); 
	    	var emBodyFld = assistant.addField({
	    		id 		: 'custpage_em_body',  
	    		type	: serverWidget.FieldType.TEXTAREA,
	    		label 	: 'Body',
	    		container : 'custpage_grp_email'     		
	    	});    				
	    	break;    
	    	
	    	// Finalize
			case 'custpage_sdr_finalize':
			// customer	
			var nameFld = assistant.addField({
	    		id 			: 'custpage_finl_name',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Customer Name'	    	 
	    	});
			var salesRepFld = assistant.addField({
	    		id 			: 'custpage_info_salesrep',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Sales Rep'	    	 	 
	    	});
	    	var phoneFld = assistant.addField({
	    		id 			: 'custpage_info_phone',  
	    		type		: serverWidget.FieldType.PHONE,
	    		label 		: 'Phone'
	    	});
			
	    	// tasks
	    	var tskTitleFld = assistant.addField({
	    		id 			: 'custpage_tsk_title',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Task Title'
	    	});
	    	var tskNotesFld = assistant.addField({
	    		id 			: 'custpage_tsk_notes',  
	    		type		: serverWidget.FieldType.TEXTAREA,
	    		label 		: 'Task Notes'
	    	});
			
	    	// email
	    	var emEmailFld = assistant.addField({
	    		id 			: 'custpage_em_email',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Email'
	    	}); 
			var emSubjectFld = assistant.addField({
	    		id 			: 'custpage_em_subject',  
	    		type		: serverWidget.FieldType.TEXT,
	    		label 		: 'Subject'
	    	}); 
	    	var emBodyFld = assistant.addField({
	    		id 		: 'custpage_em_body',  
	    		type	: serverWidget.FieldType.TEXTAREA,
	    		label 	: 'Body'
	    	});    				
	    	
	    	// Set as inline
	    	nameFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	salesRepFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	phoneFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	tskTitleFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	tskNotesFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	emEmailFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	emSubjectFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});
	    	emBodyFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});	   
	    	
	    	customerStp = assistant.getStep({
	    		id : 'custpage_sdr_customer_step'
	    	});
	    	taskStp = assistant.getStep({
	    		id : 'custpage_sdr_tasks'
	    	});
	    	emailStp = assistant.getStep({
	    		id : 'custpage_sdr_email'
	    	}); 
	    	
	    	nameFld.defaultValue = customerStp.getValue({
	    		id : 'custpage_info_name'
	    	});
	    	salesRepFld .defaultValue = customerStp.getValue({
	    		id : 'custpage_info_salesrep'
	    	});
	    	phoneFld.defaultValue = customerStp.getValue({
	    		id : 'custpage_info_phone'
	    	});
	    	tskTitleFld.defaultValue = taskStp.getValue({
	    		id : 'custpage_tsk_title'
	    	});
	    	tskNotesFld.defaultValue = taskStp.getValue({
	    		id : 'custpage_tsk_notes'
	    	});
	    	emEmailFld.defaultValue = emailStp.getValue({
	    		id : 'custpage_em_email'
	    	});
	    	emSubjectFld.defaultValue = emailStp.getValue({
	    		id : 'custpage_em_subject'
	    	});
	    	emBodyFld.defaultValue = emailStp.getValue({
	    		id : 'custpage_em_body'
	    	}); 
	    	
	    	break;    	    	
		}
		
		response.writePage(assistant);
    }

    return {
        onRequest: onRequest
    };
    
});
