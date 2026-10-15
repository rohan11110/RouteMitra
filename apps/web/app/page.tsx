const sampleRides = [
  { id: "demo-1", from: "Lucknow", to: "Kanpur", departure: "08:30", arrival: "10:00", date: "Tomorrow", price: 220, seats: 2, driver: "Aarav S.", vehicle: "Hatchback" },
  { id: "demo-2", from: "Lucknow", to: "Varanasi", departure: "07:15", arrival: "13:00", date: "Tomorrow", price: 580, seats: 3, driver: "Meera K.", vehicle: "Sedan" },
  { id: "demo-3", from: "Kanpur", to: "Agra", departure: "09:00", arrival: "13:30", date: "Saturday", price: 460, seats: 1, driver: "Kabir R.", vehicle: "SUV" },
];

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Home() {
  return (
    <main>
      <header className="container nav">
        <a className="brand" href="/" aria-label="RouteMitra home">
          <span className="brand-mark">↗</span>RouteMitra
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#rides">Find a ride</a>
          <a href="#how-it-works">How it works</a>
          <a className="nav-cta" href="#rides">Explore trips</a>
        </nav>
      </header>

      <section className="container hero">
        <div>
          <div className="eyebrow">Intercity travel, together</div>
          <h1>Your route.<br />A shared journey.</h1>
          <p>
            Find people travelling your way, share the cost of a planned
            journey, and make the road feel a little less long.
          </p>
          <a className="button" href="#rides">Explore sample rides&nbsp; →</a>
          <div className="demo-note">
            Demo mode: trips below are fictional sample data. No booking or
            payment is available in this scaffold.
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Illustration of a shared route">
          <div className="route-line" />
          <div className="pin start" aria-hidden="true">●</div>
          <div className="pin end" aria-hidden="true">●</div>
          <div className="car" aria-hidden="true">🚙</div>
        </div>
      </section>

      <section className="container" id="rides">
        <div className="search-panel">
          <form action="#rides" method="get" className="search-grid">
            <div className="field">
              <label htmlFor="origin">Leaving from</label>
              <input id="origin" name="origin" placeholder="e.g. Lucknow" />
            </div>
            <div className="field">
              <label htmlFor="destination">Going to</label>
              <input id="destination" name="destination" placeholder="e.g. Delhi" />
            </div>
            <div className="field">
              <label htmlFor="date">Travel date</label>
              <input id="date" name="date" type="date" />
            </div>
            <div className="field">
              <label htmlFor="seats">Seats</label>
              <select id="seats" name="seats" defaultValue="1">
                <option value="1">1 seat</option>
                <option value="2">2 seats</option>
                <option value="3">3 seats</option>
                <option value="4">4 seats</option>
              </select>
            </div>
            <button className="button" type="submit">Search</button>
          </form>
        </div>

        <div className="section-head">
          <div>
            <div className="eyebrow">Explore journeys</div>
            <h2>Sample rides to get started</h2>
            <p className="muted">A preview of how trip cards will look.</p>
          </div>
          <span className="muted">3 sample journeys</span>
        </div>

        <div className="ride-grid">
          {sampleRides.map((ride) => (
            <article className="ride-card" key={ride.id}>
              <div className="ride-top">
                <div>
                  <span className="muted">{ride.date}</span>
                  <div className="price" style={{ marginTop: 8 }}>
                    {formatINR(ride.price)}
                    <small>per seat · sample price</small>
                  </div>
                </div>
                <span aria-hidden="true">🚗</span>
              </div>
              <div className="trip-time">
                <div className="times"><span>{ride.departure}</span><span>{ride.arrival}</span></div>
                <div className="trip-route">
                  <div className="city">{ride.from}<small>Departure</small></div>
                  <div className="city">{ride.to}<small>Arrival estimate</small></div>
                </div>
              </div>
              <div className="ride-footer">
                <span>{ride.driver} · {ride.vehicle}</span>
                <span>{ride.seats} seats</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container" id="how-it-works">
        <div className="section-head">
          <div>
            <div className="eyebrow">Simple by design</div>
            <h2>How RouteMitra will work</h2>
            <p className="muted">The first release focuses on planned rides and transparent booking states.</p>
          </div>
        </div>
        <div className="ride-grid">
          <article className="ride-card"><h3>1. Find your route</h3><p className="muted">Search by origin, destination, date, and seats.</p></article>
          <article className="ride-card"><h3>2. Compare rides</h3><p className="muted">Review schedules, pickup points, driver details, and contribution.</p></article>
          <article className="ride-card"><h3>3. Request a seat</h3><p className="muted">Booking status and seat availability will be server-managed in a later milestone.</p></article>
        </div>
      </section>

      <footer className="container footer">
        RouteMitra · Product scaffold · Sample data only · Not for arranging real journeys
      </footer>
    </main>
  );
}
