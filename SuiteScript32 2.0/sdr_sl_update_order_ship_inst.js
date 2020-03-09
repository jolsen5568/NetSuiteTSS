/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/redirect', 'N/ui/serverWidget'],
/**
 * @param {record} record
 * @param {redirect} redirect
 * @param {serverWidget} serverWidget
 */
function(record, redirect, serverWidget) {
   
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
    		
    		var name = request.parameters.custparam_sdr_cst_name;
    		var intId = request.parameters.custparam_sdr_cst_intern_id;
    		var entId = request.parameters.custparam_sdr_cst_entity; 
    		var ordNum = request.parameters.custparam_sdr_cst_ord_num;
    		
    		var shpAddress = request.parameters.custparam_sdr_cst_addr;    	
    		var shipMessage = request.parameters.custparam_sdr_cst_message;
    		var shipLftGate = request.parameters.custparam_sdr_cst_lft_gate;
    		var shipDlvAppt = request.parameters.custparam_sdr_cst_dlv_appt;
    		var shipDiffAccess = request.parameters.custparam_sdr_cst_dif_acc;
    		var shipResDeliv = request.parameters.custparam_sdr_cst_res_del;
    		var shipInsDeliv = request.parameters.custparam_sdr_cst_ins_del;
    		
    		var shipAddr1 = request.parameters.custparam_sdr_cst_addr1;
    		var shipCity = request.parameters.custparam_sdr_cst_city;
    		var shipState = request.parameters.custparam_sdr_cst_state;
    		var shipZip = request.parameters.custparam_sdr_cst_zip;    	
    		var shipCountryCode = request.parameters.custparam_sdr_cst_country_code;   
    		var shipCountryName = request.parameters.custparam_sdr_cst_country_name;  
    		var shipShipDate = request.parameters.custparam_sdr_cst_shp_date;  
    		
    		log.debug('Shipping Date', shipShipDate);
    		log.debug('Lift Gate 2', shipLftGate);
    		log.debug('Delivery Appointment 2', shipDlvAppt);
    		log.debug('Difficult Access 2', shipDiffAccess);
    		log.debug('Residential Delivery 2', shipResDeliv);
    		log.debug('Inside Delivery 2', shipInsDeliv);       		 
    		
        	var form = serverWidget.createForm({
        		title : 'Update Order Shipping Instructions',
        		hideNavBar : false
        	});    	
        	
        	var customerInfoGrp = form.addFieldGroup({
        		id : 'custpage_grp_customer', 
        		label : 'Customer Order Information'
        	});
        	
        	var customerInfoGrp = form.addFieldGroup({
        		id : 'custpage_grp_ship_po', 
        		label : 'Create Shipping Purchase Order'
        	});
        	
        	var messageInfoGrp = form.addFieldGroup({
        		id : 'custpage_grp_message', 
        		label : 'Shipping Address Message'
        	});
        	
        	var messageInfoGrp = form.addFieldGroup({
        		id : 'custpage_grp_special', 
        		label : 'Special Shipping Instructions'
        	});
        	
        	var nameFld = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_name',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Customer',
        		container : 'custpage_grp_customer'
        	});
        	var locFld = form.addField({
        		id 		: 'custpage_sdr_ord_shp_location',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Location',
        		container : 'custpage_grp_customer'    		
        	});
        	
        	var ordNumFld = form.addField({
        		id 		: 'custpage_sdr_ord_number',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Order Number',
        		container : 'custpage_grp_customer'    		
        	});    
        	
        	var ordShipDate = form.addField({
        		id 		: 'custpage_sdr_ship_date',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Ship Date',
        		container : 'custpage_grp_customer'    		
        	});    
        	
        	var addrFld = form.addField({
        		id 		: 'custpage_sdr_ord_shp_address',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Ship To Address',
        		container : 'custpage_grp_customer'    		
        	});        
        	
        	var salesRepFld = form.addField({
        		id 			: 'custpage_info_salesrep',  
        		type		: serverWidget.FieldType.SELECT,
        		label 		: 'Sales Rep',
        		source		: 'employee',
        		container 	: 'custpage_grp_customer'
        	});
        	
        	var subsidiaryFld = form.addField({
        		id 			: 'custpage_info_subsidiary',  
        		type		: serverWidget.FieldType.SELECT,
        		label 		: 'Subsidiary',
        		source		: 'subsidiary',
        		container 	: 'custpage_grp_customer'
        	});
        	
        	var shpFldId = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_id',  
        		type	: serverWidget.FieldType.TEXT,
        		label 	: 'Customer Internal ID',
        		container : 'custpage_grp_customer'    		
        	});    	        	       	
        	
        	var messageFld = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_notes',  
        		type	: serverWidget.FieldType.TEXTAREA,
        		label 	: 'Message',
        		container : 'custpage_grp_message'     		
        	});
        	messageFld.updateDisplaySize({
        		   width: 100,
                   height: 10
        	});  
        	        	
        	var shpLftGate = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_lft_gt',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Lift Gate / Pallet Jack',
        		container : 'custpage_grp_special'         		
        	});    	
        	
        	var shpDlvAppt = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_dlv_appt',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Delivery Appointment',
        		container : 'custpage_grp_special'     		
        	});
        	
        	var shpInsDeliv = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_deliv',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Inside Delivery',
        		container : 'custpage_grp_special'     		
        	});
        	
        	var shpResDeliv = form.addField({
        		id 		: 'custpage_sdr_ord_shp_res_dlv',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Residential Delivey',
        		container : 'custpage_grp_special'     		
        	});
        	
        	var shpTightDiff = form.addField({
        		id 		: 'custpage_sdr_ord_shp_inst_diff',  
        		type	: serverWidget.FieldType.CHECKBOX,
        		label 	: 'Tight / Difficult Access',
        		container : 'custpage_grp_special'     		
        	});      
        	
        	var noteFld = form.addField({
        		id 		: 'custpage_impt_body',  
        		type	: serverWidget.FieldType.HELP,
        		label 	: 'NOTE: Shipping instructions review.  Pleae make sure you carefully review all shipping instructions to prevent costly errors.'
        	});    
        	noteFld.updateLayoutType({
        		layoutType : serverWidget.FieldLayoutType.OUTSIDEABOVE
        	});
        	
        	form.addSubmitButton({
        		label	: 'Continue'
        	});    	
        	
        	ordShipDate.defaultValue = shipShipDate;
        	ordNumFld.defaultValue = ordNum;
        	nameFld.defaultValue = name;
        	messageFld.defaultValue = shipMessage;
        	shpFldId.defaultValue = intId;
        	locFld.defaultValue = shipCity;
        	//addrFld.defaultValue = shpAddress;
        	addrFld.defaultValue = shipAddr1 + '<br>' + shipCity + ', ' + shipState + ' ' + shipZip + '<br>' + shipCountryName;
        	        	 
        	if(shipLftGate  == 'true'){ shpLftGate.defaultValue = 'T'; }
        	if(shipDlvAppt == 'true'){ 
        		shpDlvAppt.defaultValue = 'T'; 
        		} else {
        			shpDlvAppt.defaultValue = 'F'; 
        		}
        	if(shipDiffAccess == 'true'){ shpTightDiff.defaultValue = 'T'; }
        	if(shipResDeliv == 'true') { shpResDeliv.defaultValue = 'T'; }
        	if(shipInsDeliv == 'true') { shpInsDeliv.defaultValue = 'T'; }
        	
         	ordNumFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.DISABLED
        	});
         	
         	ordShipDate.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.DISABLED
        	});
        	        	
        	nameFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.DISABLED
        	});
        	
        	locFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.DISABLED
        	});
        	
        	addrFld.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.INLINE
        	});        	

        	shpFldId.updateDisplayType({
        		displayType : serverWidget.FieldDisplayType.HIDDEN
        	});
        	
         	response.writePage(form);   	    		
    	}
    	// POST
    	else { 
    		var intId = request.parameters.custpage_sdr_ord_shp_inst_id;
    		var shipIns = request.parameters.custpage_sdr_ord_shp_inst_notes;
    		var shipLftGt = request.parameters.custpage_sdr_ord_shp_inst_lft_gt;
    		var shipDlvAppt = request.parameters.custpage_sdr_ord_shp_inst_dlv_appt;
    		var shipInsDlv = request.parameters.custpage_sdr_ord_shp_inst_deliv;
    		var shipResDlv = request.parameters.custpage_sdr_ord_shp_res_dlv;
    		var shipDiffDlv = request.parameters.custpage_sdr_ord_shp_inst_diff; 
    		log.debug('Internal ID 2', intId);
    		
    		 try {
    			 var order = record.load({
    	    			type : record.Type.SALES_ORDER,
    	    			id : intId    	    			 
    	    		});
    	            log.debug('current order', order);
    	        } catch (error) {
    	            log.debug('error', error);   
    	        }   	         		 
    	        
    	    log.debug('Lift Gate Write', shipLftGt);    
    		order.setValue('custbody_tss_shipping_instructions', shipIns);
    		if(shipLftGt == 'T') { 
    			order.setValue('custbody_tss_lift_gate', true); }
    		if(shipDlvAppt == 'T') { 
    			order.setValue('custbody_tss_delivery_appointment', true); }
    		if(shipDiffDlv == 'T') {  
    			order.setValue('custbody_tss_tight_diff_access', true); }
    		if(shipResDlv == 'T') { 
    			order.setValue('custbody_tss_residential_delivey', true); }
    		if(shipInsDlv == 'T') { 
    			order.setValue('custbody_tss_inside_delivery', true); }   	 
    		order.save();
    		
    		redirect.toRecord({
    			type : record.Type.SALES_ORDER,
    			id : intId    			
    		});
    	}
    }

    return {
        onRequest: onRequest
    };
    
});
