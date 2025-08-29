import { useEffect } from "react";
import "../styles/HomePage.css";
// Prefer importing the asset so Vite/CRA handles hashing & paths
import bgImage from "../assets/Inventory.jpg";

function HomePage() {
  useEffect(() => {
    // ----- <title> -----
    document.title =
      "Accuracy Counts Inventory Service | Professional Inventory Counts in Colorado";

    // ----- meta name="description" -----
    const descContent =
      "Since 1984, Accuracy Counts Inventory Service provides precise physical inventory counts for grocery, gas, convenience, and retail businesses across Colorado.";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", descContent);

    // ----- canonical (avoid duplicate homepage URLs like / and /index.html) -----
    const canonicalHref = `${window.location.origin}/`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // ----- Open Graph (basic) -----
    const ogMap = {
      "og:title": "Accuracy Counts Inventory Service",
      "og:description": descContent,
      "og:type": "website",
      "og:url": canonicalHref,
    };
    Object.entries(ogMap).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // ----- JSON-LD Structured Data: LocalBusiness / ProfessionalService -----
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Accuracy Counts Inventory Service",
      foundingDate: "1984",
      description: descContent,
      areaServed: {
        "@type": "State",
        name: "Colorado",
      },
      url: canonicalHref,
      serviceType: [
        "Physical inventory counts",
        "Retail inventory services",
        "Grocery inventory audits",
        "Convenience store inventory",
      ],
      // Add "telephone", "address", "geo" when you’re ready for local SEO boost.
    };

    let ldTag = document.getElementById("home-jsonld");
    if (!ldTag) {
      ldTag = document.createElement("script");
      ldTag.type = "application/ld+json";
      ldTag.id = "home-jsonld";
      document.head.appendChild(ldTag);
    }
    ldTag.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <>
      <main className="homePageContent" role="main">
        <img
          src={bgImage}
          alt="Inventory specialist performing a precise stock count in a Colorado retail store"
          className="homePageBackground"
          loading="lazy"
          width="1920"
          height="1080"
        />

        <section className="titleSection" aria-labelledby="site-title">
          <div className="titleCard">
            <h2 id="site-title" className="title">
              Accuracy Counts Inventory Service
            </h2>
          </div>
        </section>

        <section className="infoCard" aria-labelledby="about-heading">
          <h3 id="about-heading">About Us</h3>
          <p>
            Founded in 1984, our company began after working with Washington
            Inventory Services. With a passion for accuracy and reliability, we
            branched out to serve businesses directly across Colorado.
          </p>
          <br />
          <p>
            For more than 40 years, we’ve specialized in physical inventory
            counts for grocery stores, gas stations, convenience stores, and
            retail businesses of all sizes. Our mission is simple: give every
            client a clear, accurate picture of their stock so they can make
            confident business decisions.
          </p>
          <br />
          <p>
            We proudly provide inventory services throughout Colorado, helping
            local businesses reduce shrink, improve efficiency, and maintain
            full confidence in their numbers. From small neighborhood shops to
            large supermarkets, we bring the same level of detail and
            reliability to every count. When Colorado businesses need trusted,
            professional inventory services, they turn to us.
          </p>
        </section>
      </main>
    </>
  );
}

export default HomePage;
