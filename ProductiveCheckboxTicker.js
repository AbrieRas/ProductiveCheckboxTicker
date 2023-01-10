function KeyPress(_e) {
    var evtobj = window.event;

    /**
     * ALT and +
     * Tick all checkboxes on current site
    */

    if (evtobj.altKey && evtobj.keyCode == 107) {
        var aa = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < aa.length; i++){
            aa[i].checked = true;
        }
    }
    
    /**
     * ALT and -
     * Untick all checkboxes on current site
    */
   
    else if (evtobj.altKey && evtobj.keyCode == 109) {
        var aa = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < aa.length; i++){
            aa[i].checked = false;
        }
    }
}

document.onkeydown = KeyPress;
