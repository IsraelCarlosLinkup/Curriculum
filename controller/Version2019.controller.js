sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("my.Curriculum.MyCurriculum.controller.Version2019", {
		onInit: function () {
			var MiniBio = 
				"<p>Iniciei minha carreira SAP em <strong>2014</strong>  como consultor ABAP Junior na <strong>GFX Consultoria</strong>, onde atuei em diversas demandas no setor de Suporte AMS, como também em projetos de implantação SAP em vários clientes locais na cidade de <strong>Fortaleza</strong> (Brasil). </p>"
			+	"<p>Em <strong>2017</strong> adquiri meu primeiro <i>certificado SAP (ABAP 7.4)</i>, algum tempo depois iniciei uma nova jornada em outra consultoria: <strong>Dongkuk Systems</strong> (uma consultoria coreana, com base atualmente em Fortaleza, que presta serviços para a Companhia Siderúrgica do Pecém (<strong>CSP</strong>) entre outros clientes locais) na qual trabalho até hoje, onde atuo em: projetos de instalação do FIORI, desenvolvimentos de aplicações customizadas <i>SAPUI5, SAP Gateway, SAP Cloud Platform, ABAP e PI</i>.</p>";

			this.getView().byId("MiniBio").setHtmlText(MiniBio);
			
			this.oModel = new sap.ui.model.json.JSONModel();
			this.oModel.loadData("mock/projects.json");
			this.getView().setModel(this.oModel);
			
		}
	});
});