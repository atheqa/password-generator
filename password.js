/**
 * 
 */

(function($) {
    const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const MAX_LENGTH = 30;

    function generate() {
        let password = "";

        for(let i=0; i<MAX_LENGTH; i++) {
            password += pick();
        }

        return password;
    }

    function pick() {
        return CHARS[random(CHARS.length-1)];
    }

    function random (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * use clipboard.js to to copy the generated password to user's clipboard.
     */

     const clipboard = new ClipboardJS(".password");

     clipboard.on("success", function(e) {
         document.getSelection().removeAllRanges(); //remove all selections from the page
         console.info("Successfully copied password to your clipboard.");
        
         $(".password").text("Copied to clipboard!");
         $(".password").css("color" , "red");
         
         setTimeout(function() {
            $(".password").text(e.text);
            $(".password").css("color" , "black");
         }, 3000);
     });

     /**
      * generate new random password when the page is refreshed.
      */
     $(document).ready(function() {
         $(".password").text(generate())
     });
}(jQuery));
