(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1365:function(t,e,o){t.exports=o.p+"assets/img/workflow.4017d2e6.png"},1366:function(t,e,o){t.exports=o.p+"assets/img/AutopilotTrigger_node.586311f5.png"},1367:function(t,e,o){t.exports=o.p+"assets/img/Set_node.e2ec63c2.png"},1368:function(t,e,o){t.exports=o.p+"assets/img/Airtable_node.9c7d0d45.png"},2052:function(t,e,o){"use strict";o.r(e);var n=o(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"autopilot-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-trigger"}},[t._v("#")]),t._v(" Autopilot Trigger")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.autopilothq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autopilot"),n("OutboundLink")],1),t._v(" is a visual marketing software that allows you to automate and personalize your marketing across the entire customer journey.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Autopilot/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),n("ul",[n("li",[t._v("Contact added")]),t._v(" "),n("li",[t._v("Contact added to a list")]),t._v(" "),n("li",[t._v("Contact entered to a segment")]),t._v(" "),n("li",[t._v("Contact left a segment")]),t._v(" "),n("li",[t._v("Contact removed from a list")]),t._v(" "),n("li",[t._v("Contact unsubscribed")]),t._v(" "),n("li",[t._v("Contact updated")])]),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to receive updates when a new contact gets added in Autopilot and add them to a base in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/991",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following node.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[t._v("Autopilot Trigger")])]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[t._v("Set")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[t._v("Airtable")])],1)]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1365),alt:"A workflow with the Autopilot Trigger node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-autopilot-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-autopilot-trigger"}},[t._v("#")]),t._v(" 1. Autopilot Trigger")]),t._v(" "),n("p",[t._v("The Autopilot Trigger node will trigger the workflow when a new contact gets added in Autopilot.")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Autopilot Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Autopilot/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Select 'Contact Added' from the "),n("em",[n("strong",[t._v("Events")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[t._v("In the screenshot below, you will notice that the node returns the information of the new contact that was added to Autopilot. This output gets passed on to the next node in the workflow.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1366),alt:"Using the Autopilot Trigger node to trigger the workflow"}})]),t._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[t._v("#")]),t._v(" 2. Set node")]),t._v(" "),n("p",[t._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),t._v(" "),n("div",{pre:!0},[n("ol",[n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Add Value")])]),t._v(" and select 'String' from the dropdown list.")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("First Name")]),t._v(" in the "),n("em",[n("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Value")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Current Node > Input Data > JSON > contact > FirstName. You can also add the following expression: "),n("code",[t._v('{{$json["contact"]["FirstName"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("First Name")]),t._v(" in the "),n("em",[n("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Value")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Current Node > Input Data > JSON > contact > LastName. You can also add the following expression: "),n("code",[t._v('{{$json["contact"]["LastName"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Add Value")])]),t._v(" and select 'String' from the dropdown list.")]),t._v(" "),n("li",[t._v("Enter "),n("code",[t._v("Email")]),t._v(" in the "),n("em",[n("strong",[t._v("Name")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Value")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Current Node > Input Data > JSON > contact > Email. You can also add the following expression: "),n("code",[t._v('{{$json["contact"]["Email"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Toggle "),n("em",[n("strong",[t._v("Keep Only Set")])]),t._v(" to "),n("code",[t._v("true")]),t._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1367),alt:"Using the Set node to set the data"}})]),t._v(" "),n("h3",{attrs:{id:"_3-airtable-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node"}},[t._v("#")]),t._v(" 3. Airtable node")]),t._v(" "),n("p",[t._v("This node will store the data coming from the previous node in a table in Airtable.")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("Select 'Append' from the "),n("em",[n("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Enter the base ID in the "),n("em",[n("strong",[t._v("Base ID")])]),t._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("API page"),n("OutboundLink")],1),t._v(" and select the correct base. You’ll find the Base ID under the Introduction section.")]),t._v(" "),n("li",[t._v("In n8n, paste the ID of the base in the "),n("em",[n("strong",[t._v("Base ID")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Enter the table name in the "),n("em",[n("strong",[t._v("Table")])]),t._v(" name field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[t._v("In the screenshot below, you will notice that the node adds the information of a new contact from the previous node in a table in Airtable.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1368),alt:"Using the Airtable node to append the information of a subscriber"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Activate workflow for production")]),t._v(" "),n("p",[t._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Autopilot Trigger node.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);