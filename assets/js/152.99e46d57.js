(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1830:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"aws-rekognition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-rekognition"}},[e._v("#")]),e._v(" AWS Rekognition")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://aws.amazon.com/rekognition/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Rekognition"),a("OutboundLink")],1),e._v(" allows you to add image and video analysis to your applications. With AWS Rekognition, you can identify faces, labels, and celebrities in images.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Image")]),e._v(" "),a("ul",[a("li",[e._v("Analyze")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to detect a face from an image using the AWS Rekognition node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/694",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("AWS Rekognition")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(770),alt:"A workflow with the AWS Rekognition node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),a("p",[e._v("This example workflow uses the HTTP Request node to fetch an image from a URL. You can also use the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node to read an image file from the path you specify.")],1),e._v(" "),a("ol",[a("li",[e._v("Enter the URL of the image in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field. For example, "),a("code",[e._v("https://n8n.io/_nuxt/img/04c67e5.png")]),e._v(".")]),e._v(" "),a("li",[e._v("Select 'File' from the "),a("em",[a("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the HTTP Request node fetches the image from the URL. This image gets passed on as binary data to the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(771),alt:"Using the HTTP Request node to fetch an image from a URL"}})]),e._v(" "),a("h3",{attrs:{id:"_3-aws-rekognition-node-analyze-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-aws-rekognition-node-analyze-image"}},[e._v("#")]),e._v(" 3. AWS Rekognition node (analyze: image)")]),e._v(" "),a("p",[e._v("This node will detect faces in the image that we fetched in the previous node. You can also use this node to analyze an image stored in your AWS Bucket.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the AWS Rekognition node. You can find out how to enter credentials for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Set "),a("em",[a("strong",[e._v("Binary Data")])]),e._v(" to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will observe that the node detects the face in the image that we got from the HTTP Request node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(772),alt:"Using the AWS Rekognition node to detect faces in an image"}})])])}),[],!1,null,null,null);t.default=n.exports},770:function(e,t,o){e.exports=o.p+"assets/img/workflow.4c2123ae.png"},771:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.4da30b23.png"},772:function(e,t,o){e.exports=o.p+"assets/img/AWSRekognition_node.65f869d8.png"}}]);