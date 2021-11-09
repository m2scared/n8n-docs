(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1156:function(e,t,o){e.exports=o.p+"assets/img/workflow.a08ca356.png"},1157:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.4789d96f.png"},1158:function(e,t,o){e.exports=o.p+"assets/img/ProfitWell_node.766b3811.png"},1159:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.3992017d.png"},1977:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"profitwell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#profitwell"}},[e._v("#")]),e._v(" ProfitWell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.profitwell.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProfitWell"),r("OutboundLink")],1),e._v(" provides real-time subscription financial metrics.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/ProfitWell/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.profitWell"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to send financial metrics monthly to a Mattermost channel. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/798",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("ProfitWell")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1156),alt:"A workflow with the ProfitWell node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-cron-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),r("p",[e._v("The Cron node will trigger the workflow on the first day of every month at 9 AM.")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select 'Every Month' from the "),r("em",[r("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Set hours to 9 in the "),r("em",[r("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow on the first day of every month at 9 AM.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1157),alt:"Using the Cron node to trigger the workflow every month"}})]),e._v(" "),r("h3",{attrs:{id:"_2-profitwell-node-get-metric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-profitwell-node-get-metric"}},[e._v("#")]),e._v(" 2. ProfitWell node (get: metric)")]),e._v(" "),r("p",[e._v("This node will return monthly financial metrics.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the ProfitWell node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/ProfitWell/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Monthly' from the "),r("em",[r("strong",[e._v("Type")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns montly financial metrics.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1158),alt:"Using the ProfitWell node to get monthly financial metrics"}})]),e._v(" "),r("h3",{attrs:{id:"_3-mattermost-node-post-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-mattermost-node-post-message"}},[e._v("#")]),e._v(" 3. Mattermost node (post: message)")]),e._v(" "),r("p",[e._v("This node will send a message with the metrics that we get from the previous node in the 'Monthly Metrics' channel in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"2"}},[r("li",[e._v("Select a channel from the "),r("em",[r("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Message")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field:")])]),e._v(" "),r("div",{pre:!0,attrs:{class:"language- extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v('Active Customers: {{$node["ProfitWell"].json["active_customers"]}}\nTrailing Customers: {{$node["ProfitWell"].json["active_trialing_customers"]}}\nNew Customers: {{$node["ProfitWell"].json["new_customers"]}}\nGrowth Rate: {{$node["ProfitWell"].json["growth_rate"]}}\nRecurring Revenue: {{$node["ProfitWell"].json["recurring_revenue"]}}\n')])])]),r("ol",{pre:!0,attrs:{start:"5"}},[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a message with the metrics that we get from the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1159),alt:"Using the Mattermost node to send a message with the metrics "}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);