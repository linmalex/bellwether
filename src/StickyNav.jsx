import React, { Component } from "react";

export class StickyNav extends Component {
  static displayName = StickyNav.name;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tabContainerHeight: 70,
      heroTabs: [
        { href: "tab-es6", text: "ES6", about: "something about es6" },
        {
          href: "tab-flexbox",
          text: "Flexbox",
          about: "something about flexbox",
        },
        {
          href: "tab-react",
          text: "React",
          about: "something about more more more react",
        },
        {
          href: "tab-angular",
          text: "Angular",
          about: "something about angular",
        },
        {
          href: "tab-other",
          text: "Other",
          about: "something about ;lkajsdflkajsdf;lkajdsfother",
        },
      ],
    };
    this.HeroTab = this.HeroTab.bind(this);
    this.SlideSection = this.SlideSection.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    let defaultSection = (
      <section class="et-hero-tabs">
        <h1>STICKY SLIDER NAV</h1>
        <h3>Sliding content with sticky tab nav</h3>
        <div class="et-hero-tabs-container">
          {this.state.heroTabs.map((t) => this.HeroTab(t))}
          <span class="et-hero-tab-slider"></span>
        </div>
      </section>
    );
    let otherSections = (
      <main class="et-main">
        {this.state.heroTabs.map((t) => this.SlideSection(t))}
      </main>
    );
    this.setState({
      section: defaultSection,
      otherSection: otherSections,
      loading: false,
    });
  }

  onScroll() {}

  HeroTab(heroTab) {
    return (
      <a
        class="et-hero-tab"
        href={`#${heroTab.href}`}
        onClick={() => this.handleTabSelect(heroTab)}
      >
        {heroTab.text}
      </a>
    );
  }

  SlideSection(def) {
    return (
      <section class="et-slide" id={def.href}>
        <h1>{def.text}</h1>
        <h3>{def.about}</h3>
      </section>
    );
  }

  handleTabSelect(heroTab) {
    let newSection = this.SlideSection(heroTab);
    this.setState({ section: newSection });
  }
  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    this.setState({ "et-hero-tab-slider": { width: width, left: "left" } });
  }

  render() {
    return (
      <div>
        <section class="et-hero-tabs">
          <h1>STICKY SLIDER NAV</h1>
          <h3>Sliding content with sticky tab nav</h3>
          <div class="et-hero-tabs-container">
            {this.state.heroTabs.map((ht) => this.HeroTab(ht))}
            <span class="et-hero-tab-slider"></span>
          </div>
        </section>

        <main class="et-main">
          {this.state.heroTabs.map((ht) => this.SlideSection(ht))}
        </main>
      </div>
    );
  }
}
