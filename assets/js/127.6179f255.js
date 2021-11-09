(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1489:function(e,t,a){e.exports=a.p+"assets/img/workflow.34ec3b39.png"},1490:function(e,t,a){e.exports=a.p+"assets/img/Tapfiliate_node.dbc56cf9.png"},1491:function(e,t,a){e.exports=a.p+"assets/img/Tapfiliate1_node.60bb2728.png"},1492:function(e,t,a){e.exports=a.p+"assets/img/Tapfiliate2_node.f2c2cc21.png"},2127:function(e,t,a){"use strict";a.r(t);var i=a(26),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"tapfiliate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tapfiliate"}},[e._v("#")]),e._v(" Tapfiliate")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://tapfiliate.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tapfiliate"),i("OutboundLink")],1),e._v(" allows you to create, track, and grow your affiliate marketing programs.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),i("p",[e._v("You can find authentication information for this node "),i("RouterLink",{attrs:{to:"/nodes/credentials/Tapfiliate/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"basic-operations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),i("Resource",{attrs:{node:"n8n-nodes-base.tapfiliate"}}),e._v(" "),i("h2",{attrs:{id:"example-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),i("p",[e._v("This workflow allows you to create an affiliate, add metadata, and add the affiliate to a program. You can also find the "),i("a",{attrs:{href:"https://n8n.io/workflows/936",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),i("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),i("li",[i("a",{attrs:{href:""}},[e._v("Tapfiliate")])])]),e._v(" "),i("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1489),alt:"A workflow with the Tapfiliate node"}})]),e._v(" "),i("h3",{attrs:{id:"_1-start-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),i("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),i("h3",{attrs:{id:"_2-tapfiliate-node-create-affiliate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-tapfiliate-node-create-affiliate"}},[e._v("#")]),e._v(" 2. Tapfiliate node (create:affiliate)")]),e._v(" "),i("p",[e._v("This node will create an affiliate in Tapfiliate.")]),e._v(" "),i("ol",[i("li",[e._v("First of all, you'll have to enter credentials for the Tapfiliate node. You can find out how to do that "),i("RouterLink",{attrs:{to:"/nodes/credentials/Tapfiliate/"}},[e._v("here")]),e._v(".")],1),e._v(" "),i("li",[e._v("Enter an email address in the "),i("em",[i("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter the first name of the affiliate in the "),i("em",[i("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter the last name of the affiliate in the "),i("em",[i("strong",[e._v("Last Name")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Click on "),i("em",[i("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),i("p",[e._v("In the screenshot below, you will notice that the node creates an affiliate in Tapfiliate.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1490),alt:"Using the Tapfiliate node to create a new affiliate"}})]),e._v(" "),i("h3",{attrs:{id:"_3-tapfiliate1-node-add-affiliatemetadata"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-tapfiliate1-node-add-affiliatemetadata"}},[e._v("#")]),e._v(" 3. Tapfiliate1 node (add:affiliateMetadata)")]),e._v(" "),i("p",[e._v("This node will add metadata to the affiliate that we created with the previous node.")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),i("li",[e._v("Select 'Affiliate Metadata' from the "),i("em",[i("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Select 'Add' from the "),i("em",[i("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Click on the gears icon next to the "),i("em",[i("strong",[e._v("Affiliate ID")])]),e._v(" field and click on "),i("em",[i("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),i("li",[e._v("Select the following in the "),i("em",[i("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),i("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Add Metadata")])]),e._v(" button.")]),e._v(" "),i("li",[e._v("Enter "),i("code",[e._v("tag")]),e._v(" in the "),i("em",[i("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter "),i("code",[e._v("n8n")]),e._v(" in the "),i("em",[i("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Click on "),i("em",[i("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),i("p",[e._v("In the screenshot below, you will notice that the node adds the metadata to the affiliate that we created with the previous node.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1491),alt:"Using the Tapfiliate node to add metadata"}})]),e._v(" "),i("h3",{attrs:{id:"_4-tapfiliate2-node-get-contact"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-tapfiliate2-node-get-contact"}},[e._v("#")]),e._v(" 4. Tapfiliate2 node (get:contact)")]),e._v(" "),i("p",[e._v("This node will add the affiliate that we created with the Tapfiliate node to an affiliate program.")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),i("li",[e._v("Select 'Program Affiliate' from the "),i("em",[i("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Select 'Add' from the "),i("em",[i("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Select a program from the "),i("em",[i("strong",[e._v("Program ID")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Click on the gears icon next to the "),i("em",[i("strong",[e._v("Affiliate ID")])]),e._v(" field and click on "),i("em",[i("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),i("li",[e._v("Select the following in the "),i("em",[i("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Tapfiliate > Output Data > JSON > id. You can also add the following expression: "),i("code",[e._v('{{$node["Tapfiliate"].json["id"]}}')]),e._v(".")]),e._v(" "),i("li",[e._v("Click on "),i("em",[i("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),i("p",[e._v("In the screenshot below, you will notice that the node adds the affiliate to a program.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1492),alt:"Using the Tapfiliate node to add an affiliate to a program"}})])],1)}),[],!1,null,null,null);t.default=o.exports}}]);