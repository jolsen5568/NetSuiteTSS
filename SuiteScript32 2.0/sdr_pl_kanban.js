/**
 * @NApiVersion 2.x
 * @NScriptType Portlet
 * @NModuleScope SameAccount
 */
define(['N/file', 'N/search', 'N/ui/serverWidget', './lib/lodash.min'],
/**
 * @param {file} file
 * @param {search} search
 * @param {serverWidget} serverWidget
 */
function(file, search, serverWidget) {
  
    return {
        render : function(context) {
        	var portlet = context.portlet;
        	portlet.title = 'Kanban Board';
        	
        	// Create task  search and assemble datasource
        	var taskSearch = search.create({
        		type	: search.Type.TASK,
        		filters	: [['assigned', 'anyof', '-5']],
        		columns	: ['title', 'status']
        	});
        	var taskData = {
        			notStarteds 	: [],
        			inProgresses 	: [],
        			completeds		: [],
        	};
        	taskSearch.run().each(function(result){
        		var status = result.getValue('status');
        		if(status == 'NOTSTART') {
        			taskData.notStarteds.push(result.getValue('title'));
        		} else if(status == 'PROGRESS') {
        			taskData.inProgresses.push(result.getValue('title'));
        		} else if(status == 'COMPLETE') {
        			taskdata.completeds.push(result.getValue('title'));
        		}
        		return true;
        	}); 
        	
        	var knabanTemplate = file.load({
        		id : 'SuiteScripts/Custom UI Dev/template/kanban.html'
        	});
        	
        	var compiled = _.template(kanbanTemplate.getContents());
        	
        	portlet.html = comiled(taskData);       	
        	
        }
    };    
});
