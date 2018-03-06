# detect-browser
A JavaScript library to detect browser properties like browser name, device, OS, referrer, timezone, screen resolution and much more. 
# Documentation
Add <code> <script type="text/javascript" src="detect-browser.js"></script> </code> at the top of your page. <br/>
Add <code> <script type="text/javascript"> var info = getBrowser(); console.log(info);  </script>  </code>  

It will print browser info in console

# List of Properties

<code> info.language                       // browser language e.g en-US </code>
<br/>
<code> info.languages                     // Gives Array of languages </code>
<br/>
<code> info.user_agent                   // Gives User Agent </code>
<br/>
<code> info.browser                      // Gives Browser name e.g Chrome </code>
<br/>
<code> info.device                       // Gives Device e.g Mobile or Desktop </code>
<br/>
<code> info.referer                      // Gives Referer </code>
<br/>
<code> info.os                          // Gives User OS e.g windows 10 64-bit </code>
<br/>
<code> info.online                      // Gives user online status true or false </code>
<br/>
<code> info.timezone                   // Gives User Timezone </code>
<br/>
<code> info.screen_resolution         // Gives Screen Resolution e.g 1366 x 768 </code>
<br/>
<code> info.cookie_enabled           // Gives Cookie enabled status true or false </code>
