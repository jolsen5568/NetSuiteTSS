require(['N/search','N/record'],function(search,record){
  function buildItemArray(){
    var itemArray=[];
    searchItems();
    itemArray=runSearch(itemArray);
    deleteSearch();
    log.debug(itemArray);
  }
  
  function searchItems(context){
    var itemSearch=search.create({
      type:search.Type.INVENTORY_ITEM,
      title:'Inventory_Item_Search',
      id:'customsearch_inventory_item_search',
      columns:['internalid','itemid', 'displayname', 'location' ],
      filters:['isinactive','is','F']
    });
    itemSearch.save();
  }
  
  function runSearch(itemArray){
    var mySearch=search.load({id:'customsearch_sdr_inventory_item_search'});
    mySearch.run().each(function(result){
      var item={};
      //item.itemID=result.getValue({name:'itemid'});
      item.internalID=result.getValue({name:'internalid'});
      item.location=result.getValue({name:'location'});
      //item.quantityOnHand.getValue({name:'quantityOnHand'});
      itemArray.push(item);
      return true;
    });
    return itemArray;
  }
  
  function deleteSearch(){
    search.delete({id:'customsearch_inventory_item_search'});
  }
  
  buildItemArray();
});