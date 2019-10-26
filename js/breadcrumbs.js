var crumbs = {
    path : [], // current breadcrumb tabs
    htrail : "bread-trail", // HTML breadcrumb trail
    hload : "bread-load", // HTML AJAX load container
  
    init : function () {
    // init() : initialize breadcrumb
  
      crumbs.htrail = document.getElementById(crumbs.htrail);
      crumbs.hload = document.getElementById(crumbs.hload);
    },
  
    add : function (tab) {
    // add() : add a new tab to the trail
    // PARAM crumb : new tab to be added to the trail
    //        - name : name of the tab
    //        - url : url to load
    //        - data : data to POST, optional
  
      // Push the new crumb into the current trail path
      crumbs.path.push(tab);
  
      // Add new HTML tab to trail
      var htmltab = document.createElement("a");
      htmltab.innerHTML = tab.name;
      htmltab.id = "crumb-"+ crumbs.path.length;
      htmltab.dataset.num = crumbs.path.length;
      htmltab.addEventListener("click", crumbs.go);
      crumbs.htrail.appendChild(htmltab);
  
      // AJAX load the newly added crumb
      htmltab.dispatchEvent(new Event("click"));
    },
  
    go : function () {
    // go() : go to the selected tab
  
      // Reshuffle the path if required
      var num = parseInt(this.dataset.num),
          tab = null;
      if (num != crumbs.path.length) {
        // Remove HTML breadcrumb tabs
        for (var i=num+1; i<=crumbs.path.length; i++) {
          tab = document.getElementById("crumb-"+ i);
          crumbs.htrail.removeChild(tab);
        }
        // New path
        crumbs.path = crumbs.path.slice(0, num);
      }
  
      // AJAX load
      tab = crumbs.path[num - 1];
      var xhr = new XMLHttpRequest();
      xhr.open('POST', tab.url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          document.getElementById("bread-load").innerHTML = this.response;
        } else {
          alert("ERROR LOADING "+ tab.url);
        }
      };
    //   xhr.send(tab.data);
    }
  };
  
  window.addEventListener("load", function(){
    // Initialize JS breadcrumb
    crumbs.init();
  
    // Demo - Load first page via AJAX
    crumbs.add({
      name : "First",
      url : "../breadcrumbs/dummy_1.html",
    });
    crumbs.add({
      name : "Second",
      url : "../breadcrumbs/dummy_1.html",
    });
     crumbs.add({
      name : "Third",
      url : "../breadcrumbs/dummy_1.html",
    });
  });