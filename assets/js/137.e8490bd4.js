(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1417:function(e,t,o){e.exports=o.p+"assets/img/workflow.bf6c9958.png"},1418:function(e,t,o){e.exports=o.p+"assets/img/MailerLiteTrigger_node.a4f2b7c2.png"},1419:function(e,t,o){e.exports=o.p+"assets/img/Set_node.c686d368.png"},1420:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.68e687ef.png"},2084:function(e,t,o){"use strict";o.r(t);var r=o(26),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mailerlite-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mailerlite-trigger"}},[e._v("#")]),e._v(" MailerLite Trigger")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.mailerlite.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MailerLite"),r("OutboundLink")],1),e._v(" is an email marketing solution that provides you with a user-friendly content editor, simplified subscriber management, and campaign reports with the most important statistics.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/MailerLite/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),r("ul",[r("li",[e._v("Campaign Sent")]),e._v(" "),r("li",[e._v("Subscriber Added to Group")]),e._v(" "),r("li",[e._v("Subscriber Added through Webform")]),e._v(" "),r("li",[e._v("Subscriber Autonomation Completed")]),e._v(" "),r("li",[e._v("Subscriber Autonomation Triggered")]),e._v(" "),r("li",[e._v("Subscriber Bounced")]),e._v(" "),r("li",[e._v("Subscriber Created")]),e._v(" "),r("li",[e._v("Subscriber Complained")]),e._v(" "),r("li",[e._v("Subscriber Removed from Group")]),e._v(" "),r("li",[e._v("Subscriber Unsubscribe")]),e._v(" "),r("li",[e._v("Subscriber Updated")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to receive updates when a subscriber is added to a group in MailerLite and add them to a base in Airtable. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/759",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following node.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("MailerLite Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1417),alt:"A workflow with the Mautic Trigger node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-mailerlite-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-mailerlite-trigger"}},[e._v("#")]),e._v(" 1. MailerLite Trigger")]),e._v(" "),r("p",[e._v("The MailerLite Trigger node will trigger the workflow when a subscriber is added to a group in MailerLite.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the MailerLite Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/MailerLite/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Subscriber Added to Group' from the "),r("em",[r("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns the information of the subscriber that was added to a group in MailerLite. This output is passed on to the next node in the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1418),alt:"Using the MailerLite Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-set-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),r("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Name")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > MailerLite Trigger > Output Data > JSON > data > subscriber > name. You can also add the following expression: "),r("code",[e._v('{{$node["MailerLite Trigger"].json["data"]["subscriber"]["name"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("Email")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > MailerLite Trigger > Output Data > JSON > data > subscriber > email. You can also add the following expression: "),r("code",[e._v('{{$node["MailerLite Trigger"].json["data"]["subscriber"]["email"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Keep Only Set")])]),e._v(" to "),r("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1419),alt:"Using the Set node to set the data"}})]),e._v(" "),r("h3",{attrs:{id:"_3-airtable-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node"}},[e._v("#")]),e._v(" 3. Airtable node")]),e._v(" "),r("p",[e._v("This node will store the data coming from the previous node in a table in Airtable.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Append' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the base ID in the "),r("em",[r("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),r("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),r("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID under the Introduction section.")]),e._v(" "),r("li",[e._v("In n8n, paste the ID of the base in the "),r("em",[r("strong",[e._v("Base ID")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the table name in the "),r("em",[r("strong",[e._v("Table")])]),e._v(" name field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node adds the information of the subscriber from the previous node in a table in Airtable.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1420),alt:"Using the Airtable node to append the information of a subscriber"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the MailerLite Trigger node.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);