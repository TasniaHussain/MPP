
function doThis(){
    let find_mp = document.getElementById("find-mp");
    let postalCode1 = find_mp.value.toUpperCase();
    let postalCode= postalCode1.replace(" ", "");
    console.log(`https://represent.opennorth.ca/postcodes/${postalCode}/`);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `https://represent.opennorth.ca/postcodes/${postalCode}/`, false);
    xmlHttp.send();
    let list = (JSON.parse(xmlHttp.responseText)).representatives_centroid;
    
    for (i = 0; i < list.length; i++){
        if (list[i].elected_office === "MP") {
            let name = list[i].name;
            let email = list[i].email;
            let image = list[i].photo_url;
            let party = list[i].party_name;
            let site = list[i].url;
            let district = list[i].district_name;
            
            if (`${party}` === 'Liberal') {
            $("#your-mp").html(`<p>  
            <h1 style="display: block;     margin-top: 20px; font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold; 
            text-transform: uppercase;
            letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
            margin-block-end: 0.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
            <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
            min-width: 90%;     font-size: .875em;
            color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 11.8px 33.4px rgba(0, 0, 0, 0.086),
            0 4px 10px rgba(0, 0, 0, 0.12);
            border-radius: 5px">
            <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                    <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                        <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                            <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                <img max-width: 100%;height: auto;" src="${image}">
                            </div>
                            <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                            flex-grow: 1;position: relative;
                            width: 100%;
                            padding-right: 15px;
                            padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                            min-width: 90%;
                            color: #333;
                            background: white;">
                        <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                        margin-block-start: 0.83em;
                        margin-block-end: 0.83em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px; text-align: left;">Overview</h2>
                        <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                        min-width: 90%;
                        color: #333; font-size: 0.875rem;
                        font-weight: 400;
                        line-height: 1.42857;
                        color: #212529;
                        text-align: left;">
                                    <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                    min-width: 90%;
                                    color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                
                                    <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: #ed2e38; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                    min-width: 90%;
                                    color: #333; padding:2px;">${party}</dd>
                                        <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333; padding: 2px">E-mail:</dt>
                                            <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                            </dd>

                                            <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333; padding: 2px">Constituency:</dt>
                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                    <a style="color: #333; text-decoration: none;">${district}</a>
                                                </dd>
                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                            </dd>
                                            
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </p>`);} 

            else if (`${party}` === 'Conservative')  {
                $("#your-mp").html(`<p>  
                <h1 style="display: block;     margin-top: 20px; font-family: font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold;
                text-transform: uppercase;
                letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
                margin-block-end: 0.67em;
                margin-inline-start: 0px;
                margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
                <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
                min-width: 90%;     font-size: .875em;
                color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 11.8px 33.4px rgba(0, 0, 0, 0.086),
                0 4px 10px rgba(0, 0, 0, 0.12);
                border-radius: 5px">
                <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                    <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                        <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                            <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                    <img max-width: 100%;height: auto;" src="${image}">
                                </div>
                                <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                                flex-grow: 1;position: relative;
                                width: 100%;
                                padding-right: 15px;
                                padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                min-width: 90%;
                                color: #333;
                                background: white;">
                            <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                            margin-block-start: 0.83em;
                            margin-block-end: 0.83em;
                            margin-inline-start: 0px;
                            margin-inline-end: 0px; text-align: left;">Overview</h2>
                            <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                            min-width: 90%;
                            color: #333;    font-size: 0.875rem;
                            font-weight: 400;
                            line-height: 1.42857;
                            color: #212529;
                            text-align: left;">
                                        <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                    
                                        <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: #002395; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333; padding:2px;">${party}</dd>
                                            <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333; padding: 2px">E-mail:</dt>
                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                    <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                                </dd>
    
                                                <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                min-width: 90%;
                                                color: #333; padding: 2px">Constituency:</dt>
                                                    <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                        <a style="color: #333; text-decoration: none;">${district}</a>
                                                    </dd>
                                                    <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                    <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                                </dd>
                                                
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </p>`);}
            

                else if (`${party}` === "Bloc Québécois")  {
                    $("#your-mp").html(`<p>  
                    <h1 style="display: block;     margin-top: 20px; font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
                    margin-block-end: 0.67em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
                    <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
                    min-width: 90%;     font-size: .875em;
                    color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
                    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                    0 11.8px 33.4px rgba(0, 0, 0, 0.086),
                    0 4px 10px rgba(0, 0, 0, 0.12);
                    border-radius: 5px">
                    <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                        <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                            <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                                <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                    <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                        <img max-width: 100%;height: auto;" src="${image}">
                                    </div>
                                    <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                                    flex-grow: 1;position: relative;
                                    width: 100%;
                                    padding-right: 15px;
                                    padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                    min-width: 90%;
                                    color: #333;
                                    background: white;">
                                <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                                margin-block-start: 0.83em;
                                margin-block-end: 0.83em;
                                margin-inline-start: 0px;
                                margin-inline-end: 0px; text-align: left;">Overview</h2>
                                <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                                min-width: 90%;
                                color: #333;  font-size: 0.875rem;
                                font-weight: 400;
                                line-height: 1.42857;
                                color: #212529;
                                text-align: left;">
                                            <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                        
                                            <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: #0088CE; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333; padding:2px;">${party}</dd>
                                                <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                min-width: 90%;
                                                color: #333; padding: 2px">E-mail:</dt>
                                                    <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                        <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                                    </dd>
        
                                                    <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                    min-width: 90%;
                                                    color: #333; padding: 2px">Constituency:</dt>
                                                        <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                            <a style="color: #333; text-decoration: none;">${district}</a>
                                                        </dd>
                                                        <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                        <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                                    </dd>
                                                    
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </p>`);}
                
                    else if (`${party}` === "Green Party")  {
                        $("#your-mp").html(`<p>  
                        <h1 style="display: block;     margin-top: 20px; font-family: font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold;
                        text-transform: uppercase;
                        letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
                        margin-block-end: 0.67em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
                        <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
                        min-width: 90%;     font-size: .875em;
                        color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
                        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                        0 12.5px 10px rgba(0, 0, 0, 0.06),
                        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                        0 11.8px 33.4px rgba(0, 0, 0, 0.086),
                        0 4px 10px rgba(0, 0, 0, 0.12);
                        border-radius: 5px">
                        <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                            <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                                <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                                    <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                        <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                            <img max-width: 100%;height: auto;" src="${image}">
                                        </div>
                                        <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                                        flex-grow: 1;position: relative;
                                        width: 100%;
                                        padding-right: 15px;
                                        padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333;
                                        background: white;">
                                    <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                                    margin-block-start: 0.83em;
                                    margin-block-end: 0.83em;
                                    margin-inline-start: 0px;
                                    margin-inline-end: 0px; text-align: left;">Overview</h2>
                                    <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                                    min-width: 90%;
                                    color: #333;     font-size: 0.875rem;
                                    font-weight: 400;
                                    line-height: 1.42857;
                                    color: #212529;
                                    text-align: left;">
                                                <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                min-width: 90%;
                                                color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                            
                                                <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: #427730; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                                min-width: 90%;
                                                color: #333; padding:2px;">${party}</dd>
                                                    <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                    min-width: 90%;
                                                    color: #333; padding: 2px">E-mail:</dt>
                                                        <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                            <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                                        </dd>
            
                                                        <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                        min-width: 90%;
                                                        color: #333; padding: 2px">Constituency:</dt>
                                                            <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                                <a style="color: #333; text-decoration: none;">${district}</a>
                                                            </dd>
                                                            <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                            <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                                        </dd>
                                                        
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </p>`);}

                        else if (`${party}` === "Independent")  {
                            $("#your-mp").html(`<p>  
                            <h1 style="display: block;     margin-top: 20px; font-family: font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold;
                            text-transform: uppercase;
                            letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
                            margin-block-end: 0.67em;
                            margin-inline-start: 0px;
                            margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
                            <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
                            min-width: 90%;     font-size: .875em;
                            color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
                            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                            0 12.5px 10px rgba(0, 0, 0, 0.06),
                            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                            0 11.8px 33.4px rgba(0, 0, 0, 0.086),
                            0 4px 10px rgba(0, 0, 0, 0.12);
                            border-radius: 5px">
                            <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                                    <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                                        <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                            <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                                <img max-width: 100%;height: auto;" src="${image}">
                                            </div>
                                            <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                                            flex-grow: 1;position: relative;
                                            width: 100%;
                                            padding-right: 15px;
                                            padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333;
                                            background: white;">
                                        <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                                        margin-block-start: 0.83em;
                                        margin-block-end: 0.83em;
                                        margin-inline-start: 0px;
                                        margin-inline-end: 0px; text-align: left;">Overview</h2>
                                        <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333;    font-size: 0.875rem;
                                        font-weight: 400;
                                        line-height: 1.42857;
                                        color: #212529;
                                        text-align: left;">
                                                    <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                    min-width: 90%;
                                                    color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                                
                                                    <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: Silver; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                                    min-width: 90%;
                                                    color: #333; padding:2px;">${party}</dd>
                                                        <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                        min-width: 90%;
                                                        color: #333; padding: 2px">E-mail:</dt>
                                                            <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                                <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                                            </dd>
                
                                                            <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                            min-width: 90%;
                                                            color: #333; padding: 2px">Constituency:</dt>
                                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                                    <a style="color: #333; text-decoration: none;">${district}</a>
                                                                </dd>
                                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                                <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                                            </dd>
                                                            
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </p>`);}
    
            else {
                $("#your-mp").html(`<p>  
                <h1 style="display: block;     margin-top: 20px; font-family: font-family: 'itc-avant-garde-gothic-pro'; font-weight: bold;
                text-transform: uppercase;
                letter-spacing: .075em; font-size: 1.75rem; box-sizing: border-box; margin-block-start: 0.67em; letter-spacing: 0.08rem;
                margin-block-end: 0.67em;
                margin-inline-start: 0px;
                margin-inline-end: 0px; margin-top: 20px; margin-bottom: 0.5rem; line-height: 1.2; color: #333; -webkit-text-size-adjust: 100%;">${name}</h1>
                <div style="margin-bottom: 60px; font-family: 'Roboto', sans-serif;
                min-width: 90%;     font-size: .875em;
                color: #333; flex: 0 0 50%; max-width: 50%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; background: white; box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 11.8px 33.4px rgba(0, 0, 0, 0.086),
                0 4px 10px rgba(0, 0, 0, 0.12);
                border-radius: 5px">
                <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                    <div style="position: relative; width: 100%; padding-right: 15px; padding-left: 15px;">
                        <div style="background-color: #fff; display: -ms-flexbox; flex-direction: row; margin-bottom: 15px;">
                            <div style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
                                <div style="padding: 17px 2px 2px 14px; max-width: 157px;max-width: -webkit-fit-content;max-width: -moz-fit-content; max-width: fit-content;">
                                    <img max-width: 100%;height: auto;" src="${image}">
                                </div>
                                <div style="min-width: 160px; max-width: 450px; flex-basis: 0;
                                flex-grow: 1;position: relative;
                                width: 100%;
                                padding-right: 15px;
                                padding-left: 15px; box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                min-width: 90%;
                                color: #333;
                                background: white;">
                            <h2 style="margin-top: 13px; font-family: 'Martel',serif; text-transform: uppercase; letter-spacing: .075em; font-weight: 200; font-size: 1.25rem;margin-bottom: 0.5rem; line-height: 1.2; display: block;
                            margin-block-start: 0.83em;
                            margin-block-end: 0.83em;
                            margin-inline-start: 0px;
                            margin-inline-end: 0px; text-align: left;">Overview</h2>
                            <dl style="margin-top: 0; margin-bottom: 1rem; display: block; box-sizing: border-box; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px;font-family: 'Roboto', sans-serif;
                            min-width: 90%;
                            color: #333;    font-size: 0.875rem;
                            font-weight: 400;
                            line-height: 1.42857;
                            color: #212529;
                            text-align: left;">
                                        <dt style="display: block; font-weight: 795; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333; line-height: 1.42857; text-align: left;">Political Affiliation:</dt>
                                    
                                        <dd style="width: 80%; max-width: 200px; border-bottom: 0.15rem solid lightgray; margin-bottom: 0.5rem; border-color: #FF5800; margin-left:0;box-sizing: border-box; display: block; font-family: 'Roboto', sans-serif;
                                        min-width: 90%;
                                        color: #333; padding:2px;">${party}</dd>
                                            <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                            min-width: 90%;
                                            color: #333; padding: 2px">E-mail:</dt>
                                                <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block;padding: 2px">
                                                    <a style="color: #427a26; text-decoration: none; padding: 2px" href="${email}">${email}</a>
                                                </dd>
    
                                                <dt style="display: block; font-weight: 790; box-sizing: border-box; font-family: 'Roboto', sans-serif;
                                                min-width: 90%;
                                                color: #333; padding: 2px">Constituency:</dt>
                                                    <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                        <a style="color: #333; text-decoration: none;">${district}</a>
                                                    </dd>
                                                    <dd style="display: block; margin-inline-start: 40px; margin-left:0; display: block; padding: 2px">
                                                    <a style="color: #427a26; text-decoration: none;" href="${site}"> Website</a>
                                                </dd>
                                                
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </p>`);}
            $("#user-input").val(name);
            break;
        }
    };
    document.getElementById("button").click();
  };

if (document.getElementById("palestine-button").onclick=function(){alert("button was clicked")}){
//if they click palestine --- choose this; 
d3.csv("https://raw.githubusercontent.com/TasniaHussain/MPP/main/movies.csv").then(function (data, event) {
//d3.csv("movies.csv").then(function (data, event) {
var movies = data;
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);

console.log(movies);

// Adding names to autofill-list
var names_list = d3.select("#names_list");
var names;
var current_name;

// Loop through all the values in 'movies'
for (var movies_index = 0; movies_index < movies.length; movies_index++){

    names = movies[movies_index].actors.split(",");

    // Loop through all the names in 'movies'
    for (var names_index = 0; names_index < names.length; names_index++){

        current_name = names[names_index];

        // Add each name to the list
        names_list.insert("option").attr("value", current_name);
    }
}

// Defining the function
function runEnter() {

// This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
d3.select("tbody").html("") 

// This code is needed to prevent the page from reloading.
//d3.event.preventDefault(); 

// This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
var inputValue = d3.select("#user-input").property("value");

// This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
var filteredMovies = 
movies.filter(movies => movies.actors.toLowerCase().split(',').includes(inputValue.toLowerCase()));
console.log(filteredMovies);

// This was the easiest approach I found to sort the results by a different column in descending order. I had to include a new script in my head to use the _.sortBy 
//This is the script:  
//<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
var output = _.sortBy(filteredMovies, 'avg_vote').reverse();
if (output.length === 0) {
    d3.select("tbody").insert("tr").html( 
        `<td colspan=3> We currently don't have information on this MP. Proceed to Step 3. Email us at <a href="mailto:info@emailsforpalestine.ca">info@emailsforpalestine.ca</a> so we can update their record. </td>` );
}

// Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
for (var i = 0; i < filteredMovies.length; i++) { //outer
    if ((output[i]['Type']) === "White") {//first
        d3.select("tbody").insert("tr").html( 
            "<td>" + [i+1] + "</td>" +
            '<td style="color:white; border-color:#333; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; background-color:white; box-shadow: 4px 3px 14px 0px #a09271; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: #333; text-decoration: none; padding: 2px" <a href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
    }//first end
    else if ((output[i]['Type']) === "Red") {//first
        d3.select("tbody").insert("tr").html( 
            "<td>" + [i+1] + "</td>" +
            '<td style="color:white; border-color:darkred; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; box-shadow: 4px 3px 14px 0px #a09271; background-color:white; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: darkred; text-decoration: none; padding: 2px" href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
    }
    else {//second
        d3.select("tbody").insert("tr").html( 
        "<td>" + [i+1] + "</td>"+
        '<td style="color:white; border-color:#009a66; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; box-shadow: 4px 3px 14px 0px #a09271; background-color:white; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: #427a26; text-decoration: none; padding: 2px" href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
    //second end}
}
}
}
}
)
} // end for first if

else if (document.getElementById("london-button").onclick=function(){alert("button was clicked")}) {
    d3.csv("https://raw.githubusercontent.com/TasniaHussain/MPP/main/london.csv").then(function (data, event) {
        //d3.csv("movies.csv").then(function (data, event) {
        var movies = data;
        var button = d3.select("#button");
        var form = d3.select("#form");
        button.on("click", runEnter);
        form.on("submit", runEnter);
        
        console.log(movies);
        
        // Adding names to autofill-list
        var names_list = d3.select("#names_list");
        var names;
        var current_name;
        
        // Loop through all the values in 'movies'
        for (var movies_index = 0; movies_index < movies.length; movies_index++){
        
            names = movies[movies_index].actors.split(",");
        
            // Loop through all the names in 'movies'
            for (var names_index = 0; names_index < names.length; names_index++){
        
                current_name = names[names_index];
        
                // Add each name to the list
                names_list.insert("option").attr("value", current_name);
            }
        }
        
        // Defining the function
        function runEnter() {
        
        // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select("tbody").html("") 
        
        // This code is needed to prevent the page from reloading.
        //d3.event.preventDefault(); 
        
        // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
        var inputValue = d3.select("#user-input").property("value");
        
        // This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
        var filteredMovies = 
        movies.filter(movies => movies.actors.toLowerCase().split(',').includes(inputValue.toLowerCase()));
        console.log(filteredMovies);
        
        // This was the easiest approach I found to sort the results by a different column in descending order. I had to include a new script in my head to use the _.sortBy 
        //This is the script:  
        //<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
        var output = _.sortBy(filteredMovies, 'avg_vote').reverse();
        if (output.length === 0) {
            d3.select("tbody").insert("tr").html( 
                `<td colspan=3> We currently don't have information on this MP. Proceed to Step 3. Email us at <a href="mailto:info@emailsforpalestine.ca">info@emailsforpalestine.ca</a> so we can update their record. </td>` );
        }
        
        // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
        for (var i = 0; i < filteredMovies.length; i++) { //outer
            if ((output[i]['Type']) === "White") {//first
                d3.select("tbody").insert("tr").html( 
                    "<td>" + [i+1] + "</td>" +
                    '<td style="color:white; border-color:#333; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; background-color:white; box-shadow: 4px 3px 14px 0px #a09271; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: #333; text-decoration: none; padding: 2px" <a href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
            }//first end
            else if ((output[i]['Type']) === "Red") {//first
                d3.select("tbody").insert("tr").html( 
                    "<td>" + [i+1] + "</td>" +
                    '<td style="color:white; border-color:darkred; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; box-shadow: 4px 3px 14px 0px #a09271; background-color:white; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: darkred; text-decoration: none; padding: 2px" href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
            }
            else {//second
                d3.select("tbody").insert("tr").html( 
                "<td>" + [i+1] + "</td>"+
                '<td style="color:white; border-color:#009a66; border-left-style: solid; border-left-width: 50px; padding: 15px; margin-bottom: 10px; padding-right: 25px; box-shadow: 4px 3px 14px 0px #a09271; background-color:white; font-size: 14pt; font-weight: 400px; border-radius: 0px;"> <a style="color: #427a26; text-decoration: none; padding: 2px" href="' + (output[i]['Source']) + '">' + "<u>" + (output[i]['original_title'])+ "</u> </a>");
            //second end}
        }
        }
        }
        }
        )
}
