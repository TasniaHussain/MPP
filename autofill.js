window.onload = function () {
    var inputs = document.getElementsByClassName("input");

    // Populate email any time a relevant input field is cahnged
    for (var input of inputs) {
        input.onchange = populateEmail;
    }

    populateList("#mp_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/mps.txt');
    populateList("#subject_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/subject_lines.txt');
    populateList("#purpose_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/purposes.txt');
    populateList("#connection_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/connections.txt');
    populateList("#issue_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/issues.txt');
    populateList("#connection_tip_list", "li", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/connection_tips.txt');
    populateListCheckboxes("#call_to_action_list", "input", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/calls_to_action.txt');
    populateList("#closing_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/closings.txt');
    populateList("#review_tip_list", "li", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/review_tips.txt');

    // integration functionality
    var step_2_name = document.getElementById("user-input");
    var step_2_button = document.getElementById("button");
    var step_2_results = document.getElementById("results-table");

    // If step 2 items exist (i.e. we are on the squarespace site)
    if(step_2_button && step_2_results && step_2_name) {

        // On step 2 button click
        step_2_button.onclick = function() {

            // Populate mp name using step 2 input
            document.forms["autofillForm"]["mp"].value = step_2_name.value; // Autopop mp name
            document.forms["autofillForm"]["email_target"].value = "";      // Empty mp email so that populateEmail() can populate it
            populateEmail();
        }

        // Load acknowledge menu when mousing over form (janky workaround)
        document.getElementById("acknowledge").onmouseenter = function () {
            if(document.getElementById("acknowledge") !== document.activeElement){

                // Populate acknowledgement list using step 2 results
                var step_2_values = step_2_results.getElementsByTagName("td");
                var step_2_value;

                var has_red = false;
                var has_green = false;

                //console.log(step_2_values);
                //console.log(step_2_values.length);

                // Loop through results list
                for(var i = 0; i < step_2_values.length; i++) {

                    step_2_value = step_2_values[i];

                    // Check if red values exist
                    if(step_2_value.style.borderColor == "darkred") {
                        has_red = true;
                    }
                    // Check if Palestine-green values exist 
                    if(step_2_value.style.borderColor == "rgb(0, 154, 102)") {
                        has_green = true;
                    }
                }

                var ack_sub = document.getElementById("acknowledgement_subtitle");

                // Populate acknowledgement list using the colors found
                if(has_red == true && has_green == true) {
                    populateList("#acknowledge_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/both_acknowledgements.txt');
                    ack_sub.innerHTML = "Your MP has taken some action to support Palestine and some action to support Israel’s apartheid. Thank them and demand better.";
                }
                else if(has_red == true) {
                    populateList("#acknowledge_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/red_acknowledgements.txt');
                    ack_sub.innerHTML = "Your MP has taken action to support Israel’s apartheid. Demand better from them.";
                }
                else if(has_green == true) {
                    populateList("#acknowledge_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/green_acknowledgements.txt');
                    ack_sub.innerHTML = "In Step 2, you learned that your MP has taken action to support Palestine. Thank them.";
                }
                else {
                    populateList("#acknowledge_list", "option", 'https://raw.githubusercontent.com/Personman000/email-populater/master/lists/neither_acknowledgements.txt');
                    ack_sub.innerHTML = "We could not find any information about your MP’s stance on Palestine. But you can speak to their party’s stance and actions.";
                }
            }
        }

        // On mp name change, update Step 2
        document.getElementById("mp").onchange = function() {
            step_2_name.value = document.getElementById("mp").value;    // Plug in mp name
            step_2_button.click();                                      // Run stance checker
            populateEmail();
        }
    }

}

function populateList(id, item_type, filepath) {
    populateListHelper(id, item_type, null, null, null, filepath);
}

function populateListCheckboxes(id, item_type, filepath) {
    populateListHelper(id, item_type, "checkbox", "label", "<br>", filepath);
}

// Populate drop-down list with data from files
function populateListHelper(id, item_type, special_type, after_type, after_html, filepath) {
    // Get file
    d3.text(filepath).then(function (data, event) {

        // Get list object
        var element = d3.select(id).html("");
        
        var list_item;
        var list_items = data.split("\n");
        

        // Loop through each line in txt file
        for(var i = 0; i < list_items.length; i++) {

            list_item = list_items[i];

            // Add line as option to list
            var child = element.insert(item_type).attr("type", special_type).attr("value", list_item).html(list_item);

            // Specific funtionality, meant only for Call to Action list
            if(after_html != null && after_type != null){
                i += 1;
                var next_item = list_items[i];

                // Re-set checkbox value
                child.attr("value", next_item)
                    .attr("onchange", "populateEmail()")

                // Add main label
                element.insert(after_type)
                    .attr("value", next_item)
                    .html(list_item);

                // Add line break
                element.insert("br");

                // Add Expand label
                element.insert("label").html("Expand...")
                    .attr("for", list_item)
                    .attr("onclick", "showHideFromLabel()")
                    .attr("style", "font-style:italic; text-decoration:underline;");

                // Add line break
                element.insert("br");

                // Add second label
                element.insert(after_type).html(next_item + "<br>")
                    .attr("id", list_item)
                    .attr("style", "display:none;");

                // Add line break
                element.insert("br");
            }
        }
    })
}


// Populate email with form data
function populateEmail() {

    // Get form data
    var name = document.forms["autofillForm"]["name"];
    var email_source = document.forms["autofillForm"]["email_source"];
    var mp = document.forms["autofillForm"]["mp"];
    var email_target = document.forms["autofillForm"]["email_target"];
    var subject = document.forms["autofillForm"]["subject"];
    var purpose = document.forms["autofillForm"]["purpose"];
    var connection = document.forms["autofillForm"]["connection"];
    var issue = document.forms["autofillForm"]["issue"];
    var acknowledge = document.forms["autofillForm"]["acknowledge"];
    var cta_list = document.getElementById("call_to_action_list");
    var closing = document.forms["autofillForm"]["closing"];

    var email_text = document.forms["autofillForm"]["email_text"];
    

    // Get MP name and email
    var mp_name = mp.value;
    if(mp_name.value != "") {

        var mp_email = getMPEmail();

        if(mp_email != false) {
            email_target.value = mp_email.toLowerCase();;
        }
        else {
            email_target.value = "";
        }
    }

    // Populate email text
    var email_text = document.getElementById("email_text");
    email_text.value = "";

    // Populate MP name
    if (mp.value != "") {

        email_text.value += "Hello " + mp_name + ",";
    }
    // Or just say Hello if no MP name
    else
    {
        email_text.value += "Hello,"
    }

    // Populate sender name
    if (name.value != "" & mp.value != "") {
        email_text.value += "\n\nMy name is " + name.value + ".";
    }
    else if (name.value != "") {

        email_text.value += " my name is " + name.value + ".";
    }

    // Populate purpose
    if (purpose.value != "") {

        email_text.value += " " + purpose.value;
    }

    // Populate connection
    if (connection.value != "") {

        email_text.value += "\n\n" + connection.value;
    }

    // Populate issue
    if (issue.value != "") {

        email_text.value += "\n\n" + issue.value;
    }

    // Populate acknowledgement
    if (acknowledge.value != "") {

        email_text.value += "\n\n" + acknowledge.value;
    }

    // Populate call to action
    var cta_list_items = cta_list.childNodes;
    var add_intro = true;
    for(var i = 0; i < cta_list_items.length; i++) {

        var cta_list_item = cta_list_items[i];

        // If item is checkbox...
        if(cta_list_item.type == "checkbox") {

            // And checkbox is checked...
            if(cta_list_item.checked) {

                // Add intro if not already added.
                if(add_intro == true) { 
                    email_text.value += "\n\nDespite the ceasefire, Israel continues to attack innocent civilians in Palestine. Israel’s illegal policies also continue - occupation, apartheid, forced evictions, and ethnic cleansing. We cannot be appeased by a ceasefire. So, I ask you to commit to the following actions.";
                    add_intro = false;
                }

                // Then add checked value to email
                email_text.value += "\n\n" + cta_list_item.value;
            }
        }
    }


    // Populate closing
    if (closing.value != "") {

        email_text.value += "\n\n" + closing.value;
    }
}


// Validate form data then submit
function submitForm() {

    // Get form data
    var name = document.forms["autofillForm"]["name"].value;
    var email_source = document.forms["autofillForm"]["email_source"].value;
    var email_target = document.forms["autofillForm"]["email_target"].value;
    var mp = document.forms["autofillForm"]["mp"].value;
    var subject = document.forms["autofillForm"]["subject"].value;

    // Validate name
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    // Validate source email
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_source) || email_source == "") {
        alert("Please enter a valid email address");
        return false;
    }
    // Validate mp name
    if (mp == "") {
        alert("Please pick an MP");
        return false;
    }
    // Validate subject line
    if (subject == "") {
        alert("Please input a subject line");
        return false;
    }

    // Send email
    var email_text = encodeURIComponent(document.getElementById("email_text").value);
    console.log(email_text);
    window.open(`mailto:${email_target}?subject=${subject}&body=${email_text}`);

    // Stop refreshing on submit
    return false;
}


function showHideFromLabel() {
    // Get list style from label
    var label = event.srcElement;
    var element = document.getElementById(label.getAttribute("for"));
    var display = element.style.display;

    // If invisible, turn visible
    if(display == "none")
    {
        element.style.display = "";
    }
    // If visible, turn invisible
    else {
        element.style.display = "none";
    }
}

function getMPEmail() {
    var name = document.getElementById("mp").value;

    // Get JSON
    var request = `https://represent.opennorth.ca/representatives/house-of-commons/?name=${name.replaceAll(" ", "%20")}`;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", request, false);
    xmlHttp.send();

    // Parse JSON
    let list = (JSON.parse(xmlHttp.responseText)).objects;

    // Get email item from JSON
    var item = list[0];
    if(typeof item !== "undefined") {
        return(item.email);
    }
    else {
        return false;
    }
}