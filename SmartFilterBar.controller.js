sap.ui.controller("sap.ui.comp.sample.smartfilterbar.SmartFilterBar", {
	
	
	
	
	onBeforeRebindTable: function(oEvent) {
		
	  var mBindingParams = oEvent.getParameter("bindingParams");  
	  var oSmtFilter = this.getView().byId("smartFilterBar");  
	  
	  //Add filter Start Time and End Time
	  var oSelect3 = oSmtFilter.getControlByKey("Time");  
	  var sVariant3 = oSelect3.getValue();  
	  var oSelect4 = oSmtFilter.getControlByKey("StartTime");  
	  var sVariant4 = oSelect4.getValue();
	  var newFilter3 = new sap.ui.model.Filter("Time", sap.ui.model.FilterOperator.BT, sVariant4,sVariant3);  
	  mBindingParams.filters.push(newFilter3);
	  //Add filter Provider Name
	  var oSelect = oSmtFilter.getControlByKey("ProviderName");  
	  var sVariant = oSelect.getSelectedKey();  
	  var newFilter = new sap.ui.model.Filter("ProviderName", sap.ui.model.FilterOperator.Contains, sVariant );  
	  mBindingParams.filters.push(newFilter);  
	  //Add filter Intent
	  var oSelect2 = oSmtFilter.getControlByKey("Intent");  
	  var sVariant2 = oSelect2.getSelectedKey();  
	  var newFilter2 = new sap.ui.model.Filter("Intent", sap.ui.model.FilterOperator.Contains, sVariant2 );  
	  mBindingParams.filters.push(newFilter2);
	  

	  }, 
	onInit: function() {
		var oModel, oView;
		jQuery.sap.require("sap.ui.core.util.MockServer");
		var oMockServer = new sap.ui.core.util.MockServer({
			rootUri: "/foo/"
		});
		this._oMockServer = oMockServer;
		oMockServer.simulate("mockserver/metadata.xml", "mockserver/mockdata");
		oMockServer.start();
		oModel = new sap.ui.model.odata.ODataModel("/foo", true);
		oModel.setCountSupported(false);
		oView = this.getView();
		oView.setModel(oModel);
	},
	onNavigate: function(oEvent) {
			//console.log(oEvent.getParameters().text);
			alert("Hello World");
		},
	onExit: function() {
	    this._oMockServer.stop();
	},
	onSelect:function(oEvent){
	
		//alert("Hello World");
	}
});