import styles from "../styles/Contact.module.css";

export default function Contact() {
  const business = {
    name: "Accuracy Counts Inventory Service",
    legalName: "Accuracy Counts Inventory Service, LLC",
    employee: [{ name: "Tom", phone: "(720) 333-6454" }],
    phone: "(720) 333-6454",
    email: "bigtom51012@gmail.com",
    website: "https://www.example.com", // update
    street: "3173 W 114th Loop",
    city: "Westminster",
    region: "CO",
    postal: "80031",
    country: "US",
    hours: [
      ["Mon–Fri", "7:00 AM – 8:00 PM"], // update
      ["Sat", "7:00 AM - 5:00 PM"], // update
      ["Sun", "7:00 AM - 5:00 PM"], // update
    ],
    serviceArea: "Colorado",
  };

  const telHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.street}, ${business.city}, ${business.region} ${business.postal}`
  )}`;

  return (
    <>
      <div className={styles.background}></div>
      <div>
        <h2 className={styles.title}>Contact us</h2>
        <div className={styles.contactCard}>
          <div className={styles.company}>
            <h3>company</h3>
            <p className={styles.emph}>{business.name}</p>
            <p>Serving {business.serviceArea}</p>
            {business.website && (
              <p>
                <a
                  className={styles.link}
                  href={business.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {business.website}
                </a>
              </p>
            )}
          </div>

          <div className={styles.call}>
            <h3>call</h3>
            <a className={styles.link} href={telHref}>
              {business.employee.map((worker) => {
                return (
                  <>
                    {worker.name}: {worker.phone}
                  </>
                );
              })}
            </a>
          </div>

          <div className={styles.email}>
            <h3>email</h3>
            <p>
              <a className={styles.link} href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </p>
          </div>

          <div className={styles.mail}>
            <h3>mailing</h3>
            <address className={styles.addr}>
              {business.street}
              <br />
              {business.city}, {business.region} {business.postal}
            </address>
            <p>
              <a
                className={styles.link}
                href={mapHref}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </a>
            </p>
          </div>

          <div className={styles.hours}>
            <h3>hours</h3>
            <ul className={styles.hoursList}>
              {business.hours.map(([d, t]) => (
                <li key={d}>
                  <span>{d}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
