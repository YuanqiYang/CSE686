/*
  Lab2Helper.js - Helper functions for theming static pages

  Jim Fawcett, CSE686 - Internet Programming, Spring 2018
*/
/*---- set class attribute on body ----------------------*/

function setBodyTheme(theme) {
    // var test = document.getElementsByClassName(theme)[0];
    // if (test) {
      var elem = document.getElementsByTagName('body')[0];
      if (elem.classList.contains(theme))
        return;
      elem.classList.add(theme);
    // }
  }
  /*---- set class attribute on all links -----------------*/
  
  function setLinkTheme(theme) {
    for (let i = 0, l = document.links.length; i < l; ++i) {
      let lnk = document.links[i];
      if (lnk.classList.contains(theme))
        return;
      lnk.classList.add(theme);
    }
  }
  /*---- change class attribute on body -------------------*/
  
  function swapBodyTheme(oldTheme, newTheme) {
    var test = document.getElementsByClassName(oldTheme)[0];
    if (test) {
      let elem = document.getElementsByTagName('body')[0];
      if (elem.classList.contains(oldTheme))
        elem.classList.remove(oldTheme);
      elem.classList.add(newTheme);
    }
  }
  /*---- change class attributes on all links -------------*/
  
  function swapLinkTheme(oldTheme, newTheme) {
    let test = document.getElementsByClassName(oldTheme)[0];
    if (!test) {
      return;
    }
    for (let i = 0, l = document.links.length; i < l; ++i) {
      let lnk = document.links[i];
      if (lnk.classList.contains(oldTheme))
        lnk.classList.remove(oldTheme);
      lnk.classList.add(newTheme);
    }
  }
  /*---- set theme on page --------------------------------*/
  
  function setTheme() {
    let theme = localStorage.getItem("theme");
    if(theme != null)
    {
      if(theme === "lighttheme")
      {
        setBodyTheme('lighttheme');
        setLinkTheme('linklighttheme');
      }
      else if(theme === "darktheme")
      {
        setBodyTheme('darktheme');
        setLinkTheme('linkdarktheme');
      }
      else
        setPageTheme();
    }
    else
      setPageTheme();
    /*-- unthemed --*/
  }

  function setPageTheme(){
    let testdark = document.getElementsByClassName('darktheme')[0];
    if (testdark) {
      setBodyTheme('darktheme');
      setLinkTheme('linkdarktheme');
      return;
    }
    let testlight = document.getElementsByClassName('lighttheme')[0];
    if (testlight) {
      setBodyTheme('lighttheme');
      setLinkTheme('linklighttheme');
      return;
    }
  }

  /*---- change theme on page -----------------------------*/
  
  function toggleTheme() {
    var elem = document.getElementsByTagName('body')[0];
    var elem1=document.getElementsByTagName('div')[0];
    var node=document.getElementById("check1")
    var node1=document.getElementById("check2")
    var node2=document.getElementById("check3")
    if (elem.classList.contains('lighttheme')&&node.checked==true||elem.classList.contains('lighttheme')&&node2.checked==true) {
      swapBodyTheme('lighttheme', 'darktheme');
      swapLinkTheme('linklighttheme', 'linkdarktheme');
      localStorage.setItem("theme", "darktheme");
    }
    if (elem.classList.contains('darktheme')&&node1.checked==true||elem.classList.contains('darktheme')&&node2.checked==true) {
        swapBodyTheme('darktheme', 'lighttheme');
        swapLinkTheme('linkdarktheme', 'linklighttheme');
        localStorage.setItem("theme", "lighttheme");
      }
      if(elem1.classList.contains('darktheme')&&node2.checked==true){
        swapBodyTheme('lighttheme', 'darktheme');
        swapLinkTheme('linklighttheme', 'linkdarktheme');
        localStorage.setItem("theme", "darktheme");
      }
  }

