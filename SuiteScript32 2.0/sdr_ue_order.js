/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/redirect', 'N/format'],
/**
 * @param {record} record
 * @param {redirect} redirect
 * @parm {format} format
 */
function(record, redirect, format) {
	
	function getCountryInternalId(code){
        var internalId = '';
        var idPlusName = {"Afghanistan":"3","Aland Islands":"247","Albania":"6","Algeria":"62","American Samoa":"12","Andorra":"1","Angola":"9","Anguilla":"5","Antarctica":"10","Antigua and Barbuda":"4","Argentina":"11","Armenia":"7","Aruba":"15","Australia":"14","Austria":"13","Azerbaijan":"16","Bahamas":"31","Bahrain":"23","Bangladesh":"19","Barbados":"18","Belarus":"35","Belgium":"20","Belize":"36","Benin":"25","Bermuda":"27","Bhutan":"32","Bolivia":"29","Bonaire, Saint Eustatius and Saba":"250","Bosnia and Herzegovina":"17","Botswana":"34","Bouvet Island":"33","Brazil":"30","British Indian Ocean Territory":"106","Brunei Darussalam":"28","Bulgaria":"22","Burkina Faso":"21","Burundi":"24","Cambodia":"117","Cameroon":"46","Canada":"37","Canary Islands":"249","Cape Verde":"53","Cayman Islands":"124","Central African Republic":"40","Ceuta and Melilla":"248","Chad":"212","Chile":"45","China":"47","Christmas Island":"54","Cocos (Keeling) Islands":"38","Colombia":"48","Comoros":"119","Congo, Democratic Republic of":"39","Congo, Republic of":"41","Cook Islands":"44","Costa Rica":"49","Cote d'Ivoire":"43","Croatia/Hrvatska":"98","Cuba":"52","Curaçao":"251","Cyprus":"55","Czech Republic":"56","Denmark":"59","Djibouti":"58","Dominica":"60","Dominican Republic":"61","East Timor":"221","Ecuador":"63","Egypt":"65","El Salvador":"208","Equatorial Guinea":"88","Eritrea":"67","Estonia":"64","Ethiopia":"69","Falkland Islands":"72","Faroe Islands":"74","Fiji":"71","Finland":"70","France":"75","French Guiana":"80","French Polynesia":"175","French Southern Territories":"213","Gabon":"76","Gambia":"85","Georgia":"79","Germany":"57","Ghana":"82","Gibraltar":"83","Greece":"89","Greenland":"84","Grenada":"78","Guadeloupe":"87","Guam":"92","Guatemala":"91","Guernsey":"81","Guinea":"86","Guinea-Bissau":"93","Guyana":"94","Haiti":"99","Heard and McDonald Islands":"96","Holy See (City Vatican State)":"233","Honduras":"97","Hong Kong":"95","Hungary":"100","Iceland":"109","India":"105","Indonesia":"101","Iran (Islamic Republic of)":"108","Iraq":"107","Ireland":"102","Isle of Man":"104","Israel":"103","Italy":"110","Jamaica":"112","Japan":"114","Jersey":"111","Jordan":"113","Kazakhstan":"125","Kenya":"115","Kiribati":"118","Korea, Democratic People's Republic":"121","Korea, Republic of":"122","Kosovo":"254","Kuwait":"123","Kyrgyzstan":"116","Lao People's Democratic Republic":"126","Latvia":"135","Lebanon":"127","Lesotho":"132","Liberia":"131","Libya":"136","Liechtenstein":"129","Lithuania":"133","Luxembourg":"134","Macau":"148","Macedonia":"144","Madagascar":"142","Malawi":"156","Malaysia":"158","Maldives":"155","Mali":"145","Malta":"153","Marshall Islands":"143","Martinique":"150","Mauritania":"151","Mauritius":"154","Mayotte":"243","Mexico":"157","Micronesia, Federal State of":"73","Moldova, Republic of":"139","Monaco":"138","Mongolia":"147","Montenegro":"140","Montserrat":"152","Morocco":"137","Mozambique":"159","Myanmar (Burma)":"146","Namibia":"160","Nauru":"169","Nepal":"168","Netherlands":"166","Netherlands Antilles (Deprecated)":"8","New Caledonia":"161","New Zealand":"171","Nicaragua":"165","Niger":"162","Nigeria":"164","Niue":"170","Norfolk Island":"163","Northern Mariana Islands":"149","Norway":"167","Oman":"172","Pakistan":"178","Palau":"185","Panama":"173","Papua New Guinea":"176","Paraguay":"186","Peru":"174","Philippines":"177","Pitcairn Island":"181","Poland":"179","Portugal":"184","Puerto Rico":"182","Qatar":"187","Reunion Island":"188","Romania":"189","Russian Federation":"190","Rwanda":"191","Saint Barthélemy":"26","Saint Helena":"198","Saint Kitts and Nevis":"120","Saint Lucia":"128","Saint Martin":"141","Saint Vincent and the Grenadines":"234","Samoa":"241","San Marino":"203","Sao Tome and Principe":"207","Saudi Arabia":"192","Senegal":"204","Serbia":"50","Serbia and Montenegro (Deprecated)":"51","Seychelles":"194","Sierra Leone":"202","Singapore":"197","Sint Maarten":"252","Slovak Republic":"201","Slovenia":"199","Solomon Islands":"193","Somalia":"205","South Africa":"244","South Georgia":"90","South Sudan":"253","Spain":"68","Sri Lanka":"130","St. Pierre and Miquelon":"180","State of Palestine":"183","Sudan":"195","Suriname":"206","Svalbard and Jan Mayen Islands":"200","Swaziland":"210","Sweden":"196","Switzerland":"42","Syrian Arab Republic":"209","Taiwan":"225","Tajikistan":"216","Tanzania":"226","Thailand":"215","Togo":"214","Tokelau":"217","Tonga":"220","Trinidad and Tobago":"223","Tunisia":"219","Turkey":"222","Turkmenistan":"218","Turks and Caicos Islands":"211","Tuvalu":"224","Uganda":"228","Ukraine":"227","United Arab Emirates":"2","United Kingdom":"77","United States":"230","Uruguay":"231","US Minor Outlying Islands":"229","Uzbekistan":"232","Vanuatu":"239","Venezuela":"235","Vietnam":"238","Virgin Islands (British)":"236","Virgin Islands (USA)":"237","Wallis and Futuna":"240","Western Sahara":"66","Yemen":"242","Zambia":"245","Zimbabwe":"246"};
        var codePlusName =  {"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire, Saint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","IC":"Canary Islands","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","EA":"Ceuta and Melilla","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CD":"Congo, Democratic Republic of","CG":"Congo, Republic of","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia/Hrvatska","CU":"Cuba","CW":"CuraÃ§ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","TL":"East Timor","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard and McDonald Islands","VA":"Holy See (City Vatican State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea, Democratic People's Republic","KR":"Korea, Republic of","XK":"Kosovo","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macau","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federal State of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles (Deprecated)","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Island","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion Island","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint BarthÃ©lemy","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","CS":"Serbia and Montenegro (Deprecated)","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovak Republic","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","PM":"St. Pierre and Miquelon","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen Islands","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom (GB)","US":"United States","UY":"Uruguay","UM":"US Minor Outlying Islands","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"Virgin Islands (British)","VI":"Virgin Islands (USA)","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};

        var name = codePlusName[code];
        internalId = idPlusName[name]
        log.debug({title:'Country-internalId',
            details:internalId
        });
        log.debug({title:'Country-name',
            details:name
        });
        return internalId;
    }	
	
	function getCountryNameByCode(code){
        var internalId = '';
        var idPlusName = {"Afghanistan":"3","Aland Islands":"247","Albania":"6","Algeria":"62","American Samoa":"12","Andorra":"1","Angola":"9","Anguilla":"5","Antarctica":"10","Antigua and Barbuda":"4","Argentina":"11","Armenia":"7","Aruba":"15","Australia":"14","Austria":"13","Azerbaijan":"16","Bahamas":"31","Bahrain":"23","Bangladesh":"19","Barbados":"18","Belarus":"35","Belgium":"20","Belize":"36","Benin":"25","Bermuda":"27","Bhutan":"32","Bolivia":"29","Bonaire, Saint Eustatius and Saba":"250","Bosnia and Herzegovina":"17","Botswana":"34","Bouvet Island":"33","Brazil":"30","British Indian Ocean Territory":"106","Brunei Darussalam":"28","Bulgaria":"22","Burkina Faso":"21","Burundi":"24","Cambodia":"117","Cameroon":"46","Canada":"37","Canary Islands":"249","Cape Verde":"53","Cayman Islands":"124","Central African Republic":"40","Ceuta and Melilla":"248","Chad":"212","Chile":"45","China":"47","Christmas Island":"54","Cocos (Keeling) Islands":"38","Colombia":"48","Comoros":"119","Congo, Democratic Republic of":"39","Congo, Republic of":"41","Cook Islands":"44","Costa Rica":"49","Cote d'Ivoire":"43","Croatia/Hrvatska":"98","Cuba":"52","Curaçao":"251","Cyprus":"55","Czech Republic":"56","Denmark":"59","Djibouti":"58","Dominica":"60","Dominican Republic":"61","East Timor":"221","Ecuador":"63","Egypt":"65","El Salvador":"208","Equatorial Guinea":"88","Eritrea":"67","Estonia":"64","Ethiopia":"69","Falkland Islands":"72","Faroe Islands":"74","Fiji":"71","Finland":"70","France":"75","French Guiana":"80","French Polynesia":"175","French Southern Territories":"213","Gabon":"76","Gambia":"85","Georgia":"79","Germany":"57","Ghana":"82","Gibraltar":"83","Greece":"89","Greenland":"84","Grenada":"78","Guadeloupe":"87","Guam":"92","Guatemala":"91","Guernsey":"81","Guinea":"86","Guinea-Bissau":"93","Guyana":"94","Haiti":"99","Heard and McDonald Islands":"96","Holy See (City Vatican State)":"233","Honduras":"97","Hong Kong":"95","Hungary":"100","Iceland":"109","India":"105","Indonesia":"101","Iran (Islamic Republic of)":"108","Iraq":"107","Ireland":"102","Isle of Man":"104","Israel":"103","Italy":"110","Jamaica":"112","Japan":"114","Jersey":"111","Jordan":"113","Kazakhstan":"125","Kenya":"115","Kiribati":"118","Korea, Democratic People's Republic":"121","Korea, Republic of":"122","Kosovo":"254","Kuwait":"123","Kyrgyzstan":"116","Lao People's Democratic Republic":"126","Latvia":"135","Lebanon":"127","Lesotho":"132","Liberia":"131","Libya":"136","Liechtenstein":"129","Lithuania":"133","Luxembourg":"134","Macau":"148","Macedonia":"144","Madagascar":"142","Malawi":"156","Malaysia":"158","Maldives":"155","Mali":"145","Malta":"153","Marshall Islands":"143","Martinique":"150","Mauritania":"151","Mauritius":"154","Mayotte":"243","Mexico":"157","Micronesia, Federal State of":"73","Moldova, Republic of":"139","Monaco":"138","Mongolia":"147","Montenegro":"140","Montserrat":"152","Morocco":"137","Mozambique":"159","Myanmar (Burma)":"146","Namibia":"160","Nauru":"169","Nepal":"168","Netherlands":"166","Netherlands Antilles (Deprecated)":"8","New Caledonia":"161","New Zealand":"171","Nicaragua":"165","Niger":"162","Nigeria":"164","Niue":"170","Norfolk Island":"163","Northern Mariana Islands":"149","Norway":"167","Oman":"172","Pakistan":"178","Palau":"185","Panama":"173","Papua New Guinea":"176","Paraguay":"186","Peru":"174","Philippines":"177","Pitcairn Island":"181","Poland":"179","Portugal":"184","Puerto Rico":"182","Qatar":"187","Reunion Island":"188","Romania":"189","Russian Federation":"190","Rwanda":"191","Saint Barthélemy":"26","Saint Helena":"198","Saint Kitts and Nevis":"120","Saint Lucia":"128","Saint Martin":"141","Saint Vincent and the Grenadines":"234","Samoa":"241","San Marino":"203","Sao Tome and Principe":"207","Saudi Arabia":"192","Senegal":"204","Serbia":"50","Serbia and Montenegro (Deprecated)":"51","Seychelles":"194","Sierra Leone":"202","Singapore":"197","Sint Maarten":"252","Slovak Republic":"201","Slovenia":"199","Solomon Islands":"193","Somalia":"205","South Africa":"244","South Georgia":"90","South Sudan":"253","Spain":"68","Sri Lanka":"130","St. Pierre and Miquelon":"180","State of Palestine":"183","Sudan":"195","Suriname":"206","Svalbard and Jan Mayen Islands":"200","Swaziland":"210","Sweden":"196","Switzerland":"42","Syrian Arab Republic":"209","Taiwan":"225","Tajikistan":"216","Tanzania":"226","Thailand":"215","Togo":"214","Tokelau":"217","Tonga":"220","Trinidad and Tobago":"223","Tunisia":"219","Turkey":"222","Turkmenistan":"218","Turks and Caicos Islands":"211","Tuvalu":"224","Uganda":"228","Ukraine":"227","United Arab Emirates":"2","United Kingdom":"77","United States":"230","Uruguay":"231","US Minor Outlying Islands":"229","Uzbekistan":"232","Vanuatu":"239","Venezuela":"235","Vietnam":"238","Virgin Islands (British)":"236","Virgin Islands (USA)":"237","Wallis and Futuna":"240","Western Sahara":"66","Yemen":"242","Zambia":"245","Zimbabwe":"246"};
        var codePlusName =  {"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"Bonaire, Saint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","IC":"Canary Islands","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","EA":"Ceuta and Melilla","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CD":"Congo, Democratic Republic of","CG":"Congo, Republic of","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia/Hrvatska","CU":"Cuba","CW":"CuraÃ§ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","TL":"East Timor","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard and McDonald Islands","VA":"Holy See (City Vatican State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea, Democratic People's Republic","KR":"Korea, Republic of","XK":"Kosovo","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macau","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federal State of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles (Deprecated)","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Island","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion Island","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint BarthÃ©lemy","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","CS":"Serbia and Montenegro (Deprecated)","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovak Republic","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","PM":"St. Pierre and Miquelon","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen Islands","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom (GB)","US":"United States","UY":"Uruguay","UM":"US Minor Outlying Islands","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"Virgin Islands (British)","VI":"Virgin Islands (USA)","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};

        var name = codePlusName[code];
        internalId = idPlusName[name]
        log.debug({title:'Country-internalId',
            details:internalId
        });
        log.debug({title:'Country-name',
            details:name
        });
        return name;
    }	
	
	 function formatDate(testDate){
		    log.debug('testDate: '+testDate);
		    var responseDate=format.format({value:testDate,type:format.Type.DATE});
		    log.debug('responseDate: '+responseDate);
		    return responseDate;
	 }
	 
	 function parseAndFormatDateString(testDate) {
          // Assume Date format is MM/DD/YYYY
          var initialFormattedDateString = testDate;
          var parsedDateStringAsRawDateObject = format.parse({
              value: initialFormattedDateString,
              type: format.Type.DATE
          });
          var formattedDateString = format.format({
              value: parsedDateStringAsRawDateObject,
              type: format.Type.DATE
          });
          return formattedDateString;
      }
	       
    return {
    	afterSubmit : function(context) {

			// log.debug('Hello World');
    		
    		// Must you case to evaluate changes in old record and new.
            /* !! Caution !!
             * Empty fields from the Old record come back as `null`
             * Empty fields from the New record come back as an empty String
             * This means  you cannot simply compare the old and new
             */
    		
    		var recChanged = false;
    		 
			var order = context.newRecord;
			var orderOld = context.oldRecord;		
						
			// order new
			var fieldEntity = order.getValue('entity');	
			var fieldInternalId = order.id;	
			var fieldOrdNum = order.getValue('tranid');
						
			var shipDate = order.getValue({
				fieldId : 'shipdate'
			});
			
			var formattedShipDateString = parseAndFormatDateString(shipDate); 
			log.debug('Ship Date String', formattedShipDateString);			
			
			// check update record to see if changed
			var fieldLastUpdateNew = order.getValue('lastmodifieddate'); 
			var fieldLastUpdateOld = orderOld.getValue('lastmodifieddate');
			log.debug('New Update Date Time', fieldLastUpdateNew);
			log.debug('Old Update Date Time', fieldLastUpdateOld);			
			
			var fieldAddressee = order.getValue('addressee');			
			var fieldCustomerCode = order.getValue('customercode'); 			 
			var fieldMessage = order.getValue('custbody_tss_shipping_instructions');
			var fieldLftGt = order.getValue('custbody_tss_lift_gate');
			var fieldDlvAppt = order.getValue('custbody_tss_delivery_appointment');
			var fieldDiffAccess = order.getValue('custbody_tss_tight_diff_access');
			var fieldResDeliv = order.getValue('custbody_tss_residential_delivey');
			var fieldInsDeliv = order.getValue('custbody_tss_inside_delivery');	
					 
			//var formattedShipDate = formatDate(shipdate);
			
			// order old
			var fieldEntityOld = orderOld.getValue('entity');
			var fieldInternalIdOld = orderOld.id;	
						
			var fieldAddresseeOld = orderOld.getValue('addressee');			
			var fieldCustomerCodeOld = orderOld.getValue('customercode'); 			 
			var fieldMessageOld = orderOld.getValue('custbody_tss_shipping_instructions');
			var fieldLftGtOld = orderOld.getValue('custbody_tss_lift_gate');
			var fieldDlvApptOld = orderOld.getValue('custbody_tss_delivery_appointment');
			var fieldDiffAccessOld = orderOld.getValue('custbody_tss_tight_diff_access');
			var fieldResDelivOld = orderOld.getValue('custbody_tss_residential_delivey');
			var fieldInsDelivOld = orderOld.getValue('custbody_tss_inside_delivery');
			
			// return if values have changed
			if(fieldMessage != fieldMessageOld){
				return; }
			if(fieldAddressee != fieldAddresseeOld){
				return; }
			if(fieldMessage != fieldMessageOld){
				return; }
			if(fieldLftGt != fieldLftGtOld){
				return; }
			if(fieldDlvAppt != fieldDlvApptOld){
				return; }
			if(fieldDiffAccess != fieldDiffAccessOld){
				return; }
			if(fieldResDeliv != fieldResDelivOld){
				return; }
			if(fieldInsDeliv != fieldInsDelivOld){
				return; }			
			
			// load customer record
			try {				
				var customer = record.load({
					type : record.Type.CUSTOMER,
					id : fieldEntity
				});		
			} catch(e) {
				var ex = JSON.parse(e);
				var errorMsg = 	'Error: ' + ex.name + '\n' +
								'Message: ' + ex.message;
				if (ex.type == 'error.SuiteScriptError' ) {
					errorMsg = errorMsg + '\n' +
								'ID: ' 			+ ex.id 	+ '\n' +
								'Cause: ' 		+ ex.cause 	+ '\n' +
								'Stack Trace: ' + ex.stack;
				}
				if (ex.type == 'error.UserEventError' ) {
					errorMsg = errorMsg + '\n' +
								'ID: ' 			+ ex.id 		+ '\n' +
								'Event Type: ' 	+ ex.eventType 	+ '\n' +
								'Record ID: ' 	+ ex.recordId	+ '\n' +
								'Stack Trace: ' + ex.stack;
				}
				log.debug(errorType, errorMsg);	
			}
			
			var fieldCustName = customer.getValue({
				fieldId : 'companyname'
			});
		 
			// check to see if shipping addresses SUBLIST if not return			
			if(!context.newRecord.hasSubrecord({ fieldId : 'shippingaddress' })) {
				return;
			}
			
			// shipping addresses SUBLIST
			var shipAddress = context.newRecord.getSubrecord({
				fieldId : 'shippingaddress'
			}); 
			// shipping Old addresses SUBLIST if changed return
			var shipAddressOld = context.oldRecord.getSubrecord({
				fieldId : 'shippingaddress'
			}); 		
			var shipAddrFull = shipAddress.getValue({
				fieldId : 'addrtext'
			});
			var shipAddrCity = shipAddress.getValue({
				fieldId : 'city'
			});
			var shipFieldMessage = shipAddress.getText({
				fieldId : 'custbody_tss_shipping_instructions'
			});			
			var shipAddrAddr1 = shipAddress.getValue({
				fieldId : 'addr1'
			});
			var shipAddrState = shipAddress.getValue({
				fieldId : 'state'
			});
			var shipAddrZip = shipAddress.getValue({
				fieldId : 'zip'
			});
			var shipAddrCode = shipAddress.getValue({
				fieldId : 'country'
			});			
			 
			// get country name
			var countryName = getCountryNameByCode(shipAddrCode);			
			
			log.debug('New Internal ID', fieldInternalId);
			log.debug('Old Internal ID', fieldInternalIdOld);
			log.debug('Order Number', fieldOrdNum);
			log.debug('Ship Date', formattedShipDateString);
			log.debug('Entity', fieldEntity);
			log.debug("Company Name", fieldCustName);
			log.debug('Customer Code', fieldCustomerCode);			
			log.debug('Address1', shipAddrAddr1);	
	    	log.debug('Ship City', shipAddrCity);	
	    	log.debug('Country Code', shipAddrCode);
	    	log.debug('Country Name', countryName);
			log.debug('Customer Code', fieldCustomerCode);	    		    	
	    	log.debug('Full Address', shipAddrFull);	    
	    	log.debug('Ship Message New', fieldMessage);
	    	log.debug('Ship Message Old', fieldMessageOld);
	    	log.debug('Lift Gate', fieldLftGt);
	    	log.debug('Deliv Appt', fieldDlvAppt);
	    	log.debug('Difficult Access', fieldDiffAccess);
	    	log.debug('Residential Delivery', fieldResDeliv);
	    	log.debug('Inside Delivery', fieldInsDeliv);
	    	log.debug('Addressee', fieldAddressee);
	    				
			// will use the preferred form.  Form had been set to mandate phone number.  Since it not included use the form that does not include mandatory phone number.
			if (context.type == context.UserEventType.CREATE) 
			{
				 // if create do...  what?
			}
			else
			{
				redirect.toSuitelet({
		    		scriptId : 'customscript_sdr_sl_update_order_shp_ins',
		    		deploymentId : 'customdeploy_sdr_sl_update_order_shp_ins',
		    		parameters : {
		    			custparam_sdr_cst_intern_id : fieldInternalId,		
		    			custparam_sdr_cst_entity : fieldEntity,	
		    			custparam_sdr_cst_ord_num : fieldOrdNum,		 
		    			custparam_sdr_cst_name : fieldCustName,		    
		    			custparam_sdr_cst_addr : shipAddrFull,		    		    		 
		    			custparam_sdr_cst_message : fieldMessage,		    
		    			custparam_sdr_cst_lft_gate : fieldLftGt,		    
		    			custparam_sdr_cst_dlv_appt : fieldDlvAppt,		    
		    			custparam_sdr_cst_dif_acc : fieldDiffAccess,		    
		    			custparam_sdr_cst_res_del : fieldResDeliv,		    
		    			custparam_sdr_cst_ins_del : fieldInsDeliv,	
		    			custparam_sdr_cst_shp_date : formattedShipDateString,
		    			custparam_sdr_cst_addr1 : shipAddrAddr1,
		    			custparam_sdr_cst_city : shipAddrCity,
		    			custparam_sdr_cst_state : shipAddrState,
		    			custparam_sdr_cst_zip : shipAddrZip,
		    			custparam_sdr_cst_country_code : shipAddrCode,
		    			custparam_sdr_cst_country_name : countryName,
		    			custparam_sdr_cst_addressee : fieldAddressee		    			
		    		}
		    	});  	
			}
		}
	};
});
