sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("com.myorg.arctic-ui.controller.MainView", {
    handleClick: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/type", option);
      

    },
    handleClick1: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/q1", option);
      

    },
    handleClick2: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/q2", option);
      

    },
    handleClick3: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/q3", option);
      

    },
    handleClick4: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/q4", option);
      

    },
    handleClick5: function(e) {

      var option = e.getParameter('selectedIndex');
      this.getView().getModel().setProperty("/survey/q5", option);
      

    },
    onSubmit: function() {
      var oModel = this.getView().getModel("authors");


      var url = 'http://localhost:8081/http://localhost:4004/catalog/Survey';
      
      var oData = this.getView().getModel();
      
      

      var jsonData = JSON.stringify(oData.oData.survey);


      $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        dataType: "json",
      
        data: jsonData,
        success: function(data){
          console.log("success"+data);
        },
        error: function(e){
            console.log("error: "+e);
        }
      });
      
      MessageToast.show("感谢您的参与，已经成功提交。");
      
    }
  });
});
