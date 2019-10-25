let pages = [
    {id: 1, text: "<h3>PAGE 1</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: true},
    {id: 2, text: "<h3>PAGE 2</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 3, text: "<h3>PAGE 3</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 4, text: "<h3>PAGE 4</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 5, text: "<h3>PAGE 5</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 6, text: "<h3>PAGE 6</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 7, text: "<h3>PAGE 7</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 8, text: "<h3>PAGE 8</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 9, text: "<h3>PAGE 9</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 10, text: "<h3>PAGE 10</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 11, text: "<h3>PAGE 11</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: true},
    {id: 12, text: "<h3>PAGE 12</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 13, text: "<h3>PAGE 13</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 14, text: "<h3>PAGE 14</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 15, text: "<h3>PAGE 15</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 16, text: "<h3>PAGE 16</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 17, text: "<h3>PAGE 17</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 18, text: "<h3>PAGE 18</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 19, text: "<h3>PAGE 19</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false},
    {id: 20, text: "<h3>PAGE 20</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id impedit natus at! Necessitatibus voluptatem rerum repellat adipisci molestiae totam.</p>", active: false}
  ];
  
// //PAGINATION LOGIC
// function pagination(c, m) {
//   var current = c,
//       last = m,
//       delta = 2,
//       left = current - delta,
//       right = current + delta + 1,
//       range = [],
//       rangeWithDots = [],
//       l;

//   for (let i = 1; i <= last; i++) {
//       if (i == 1 || i == last || i >= left && i < right) {
//           range.push(i);
//       }
//   }

//   for (let i of range) {
//       if (l) {
//           if (i - l === 2) {
//               rangeWithDots.push(l + 1);
//           } else if (i - l !== 1) {
//               rangeWithDots.push('...');
//           }
//       }
//       rangeWithDots.push(i);
//       l = i;
//   }

//   return rangeWithDots;
// }
// //HANS 
// function generate_pagination(current_page, last_page) {
//   pagination_html="<div class='pagination'>";

//   dataSet=pagination(current_page, last_page);

//   for (var i = 0; i < dataSet.length; i++) {
//       if (dataSet[i] == "..." || dataSet[i] == current_page) {
//           pagination_html += "<div class='page-not-clickable'>";
//               pagination_html += "<button>"+dataSet[i]+"</button>";
//           pagination_html += "</div>";
//       }
//       else{
//           pagination_html += "<div data-last-page='"+last_page+"' data-current-page='"+dataSet[i]+"' class='page-clickable'>";
//               pagination_html += "<button>"+dataSet[i]+"</button>";
//           pagination_html += "</div>";
//       }
//   }

//   pagination_html+="</div>";
//   document.getElementById('pagination-dummy').innerHTML = pagination_html;
// }

//   generate_pagination(1, 10);
  


// MAIN PAGINATOR
  // UI Elements
  const pagesContainer = document.querySelector(".pages"),
        buttonsContainer = document.querySelector(".paginator"),
        numButtonsContainer = document.querySelector(".pageNums");
  
  // Clear pages
  function clearPages() {
    while(pagesContainer.firstChild) {
      pagesContainer.firstChild.remove();
    }
  }
  // Clear Buttons
  function clearButtons() {
    while(numButtonsContainer.firstChild) {
      numButtonsContainer.firstChild.remove();
    }
  }

  // Render buttons
  function renderButtons(activePage) {
    clearButtons();
   
    pages.forEach(function(current) {
      const button = document.createElement("button");
      button.className = "page-num";
      button.type = "button";
      button.title = current.id;
      button.textContent = current.id;
     
      if(current.id === activePage.id) {
        button.classList.add("activePage");
      } else {
          button.classList.remove("activePage");
      }  
      numButtonsContainer.appendChild(button);
    })
  }
  
  // Main render
  function render() {
    clearPages();
   
    let activePage = pages.find(function(current) {
      return current.active === true;
    })
   
    const div = document.createElement("div");
    div.className = "page";
    div.dataset.id = activePage.id;
    div.innerHTML = activePage.text;
   
    pagesContainer.appendChild(div);
   
    setTimeout(function() {
      div.classList.add("activePage");
    }, 10);
   
    renderButtons(activePage)
  }
  
  // Event listeners for button clicks
  // Buttons with page numbers click event
  numButtonsContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("page-num")) {
     
      const activePage = pages.find(function(current) {
        return current.active;
      })
     
      if(e.target.title != activePage.id) {
       
        pages.forEach(function(current) {
         current.active = false;
       })
       
        pages[e.target.title - 1].active = true;
        render();
      }
    }
  })
  
  // Arrow buttons click event
  buttonsContainer.addEventListener("click", function(e) {
    let activePage = pages.find(function(current) {
        return current.active === true;
      });
   
    if(e.target.className === "arrow-left") {
      if(pages[0].active === true) {
        pages[activePage.id - 1].active = false;
        pages[pages.length - 1].active = true;
        render();
      } else {
          pages[activePage.id - 1].active = false;
          pages[(activePage.id - 1) - 1].active = true;
          render();
        }
    } else if(e.target.className === "arrow-right") {
        if(pages[pages.length - 1].active === true) {
          pages[activePage.id - 1].active = false;
          pages[0].active = true;
          render();
          
        } else {
            pages[activePage.id - 1].active = false;
            pages[(activePage.id - 1) + 1].active = true;
            render();
          }
    } else return;
  })
  
  // Initial render of the app
  render();