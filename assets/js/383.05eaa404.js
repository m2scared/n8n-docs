(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1902:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"google-drive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-drive"}},[e._v("#")]),e._v(" Google Drive")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://drive.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Drive"),r("OutboundLink")],1),e._v(" is a file storage and synchronization service developed by Google. It allows users to store files on their servers, synchronize files across devices, and share files.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.googleDrive"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to download a file from Google Drive. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/515",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on the website. This example usage workflow uses the following two nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Google Drive")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/WriteBinaryFile/"}},[e._v("Write Binary File")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(973),alt:"A workflow with the Google Drive node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-google-sheets-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-sheets-node"}},[e._v("#")]),e._v(" 2. Google Sheets node")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Google Drive node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(", in the section 'Google Drive / Sheets API'.")],1),e._v(" "),r("li",[e._v("Select the authentication method you plan to use from the "),r("em",[e._v("Authentication")]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Download' from the "),r("em",[e._v("Operation")]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Copy the string of characters located between "),r("code",[e._v("/d/")]),e._v(" and "),r("code",[e._v("/edit")]),e._v(" in your Google Drive URL. Paste that string in the "),r("em",[e._v("File ID")]),e._v(" field.")])]),e._v(" "),r("h3",{attrs:{id:"_3-write-binary-file-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-write-binary-file-node"}},[e._v("#")]),e._v(" 3. Write Binary File node")]),e._v(" "),r("ol",[r("li",[e._v("Enter the destination file path in the "),r("em",[e._v("File Name")]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])]),e._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),r("h3",{attrs:{id:"how-do-i-list-all-files-folders-within-a-folder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-list-all-files-folders-within-a-folder"}},[e._v("#")]),e._v(" How do I list all files/folders within a folder?")]),e._v(" "),r("p",[e._v("To list all the files and folders within a folder, follow the steps mentioned below.")]),e._v(" "),r("ol",[r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Use Query String")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Copy the string of characters located after "),r("code",[e._v("https://drive.google.com/drive/u/0/folders/")]),e._v(". This string is the folder ID.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("'FOLDER_ID' in parents")]),e._v(" in the "),r("em",[r("strong",[e._v("Query String")])]),e._v(" field. Replace "),r("code",[e._v("FOLDER_ID")]),e._v(" with the folder ID you copied in the previous step.")])]),e._v(" "),r("p",[e._v("There are several additional options available to fine grain the listed results. Refer to "),r("a",{attrs:{href:"https://developers.google.com/drive/api/v3/search-files#query_string_examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("Search for files and folders: Querystring"),r("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=a.exports},973:function(e,t,o){e.exports=o.p+"assets/img/workflow.8f9393e8.png"}}]);