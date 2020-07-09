import React from "react";
import logo from "./logo.svg";
import { StickyNav } from "./StickyNav";
import { AnimatedPage } from "./pages/AnimatedPage";
import "./App.css";
import "./styles.scss";
class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;

    // $(window).resize(() => {
    //   this.onResize();
    // });
  }

  onTabClick(event, element) {
    event.preventDefault();
    // let scrollTop =
    //   $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    // $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  // checkTabContainerPosition() {
  //   let offset =
  //     $(".et-hero-tabs").offset().top +
  //     $(".et-hero-tabs").height() -
  //     this.tabContainerHeight;
  //   if ($(window).scrollTop() > offset) {
  //     $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
  //   } else {
  //     $(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
  //   }
  // }

  // findCurrentTabSelector(element) {
  //   let newCurrentId;
  //   let newCurrentTab;
  //   let self = this;
  //   $(".et-hero-tab").each(function () {
  //     let id = $(this).attr("href");
  //     let offsetTop = $(id).offset().top - self.tabContainerHeight;
  //     let offsetBottom =
  //       $(id).offset().top + $(id).height() - self.tabContainerHeight;
  //     if (
  //       $(window).scrollTop() > offsetTop &&
  //       $(window).scrollTop() < offsetBottom
  //     ) {
  //       newCurrentId = id;
  //       newCurrentTab = $(this);
  //     }
  //   });
  //   if (this.currentId != newCurrentId || this.currentId === null) {
  //     this.currentId = newCurrentId;
  //     this.currentTab = newCurrentTab;
  //     this.setSliderCss();
  //   }
  // }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    // $(".et-hero-tab-slider").css("width", width);
    // $(".et-hero-tab-slider").css("left", left);
  }
}

function App() {
  let defaultText = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Reloading now!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  let myTest = <StickyNav></StickyNav>;
  myTest = <AnimatedPage></AnimatedPage>;
  return myTest;
}

export default App;
