# RouteMitra — Product Requirements Document

**Status:** MVP specification draft  
**Product:** RouteMitra — planned-journey intercity carpooling  
**Target delivery:** 4–8 weeks for a portfolio-grade MVP  
**Primary client:** Responsive web application

## 1. Product summary

RouteMitra connects people travelling in the same direction so they can share an intercity journey. Drivers publish planned trips with available seats, schedule, pickup/drop-off details, optional stops, vehicle information, and a per-seat contribution. Passengers discover suitable rides and request seats. Drivers accept or decline requests; both parties can review the current booking status.

RouteMitra is a planned-journey cost-sharing marketplace, not an on-demand taxi dispatch service. The first release is a portfolio/demo MVP using clearly labelled sample data until authentication, persistence, security, operations, and regulatory requirements are verified.

## 2. Problem and audience

People travelling between cities may have unused seats in a vehicle, while other travellers want a convenient way to discover compatible journeys. The initial product should make trip discovery, comparison, publishing, and booking coordination clearer than informal messaging.

### Primary personas
- **Passenger:** knows origin, destination, date, and number of seats; compares schedule, pickup, contribution, driver profile, and cancellation terms.
- **Driver:** has already planned a journey; publishes a route and seat availability, then manages booking requests.
- **Frequent traveller/community member:** regularly travels a corridor for work, college, family, or events; may later need saved routes and recurring rides.
- **Moderator (later):** handles user reports and abuse; access must be explicitly permissioned.

## 3. Product goals
- Make suitable rides easy to find and compare.
- Make publishing a ride quick, clear, and error-resistant.
- Prevent overbooking and invalid booking state transitions.
- Clearly communicate origin, destination, stops, departure time, contribution, availability, and status.
- Demonstrate advanced frontend engineering through interactive search, maps, forms, route displays, and responsive states.
- Establish a secure base for profiles, notifications, reviews, and future extensions.

## 4. Non-goals for the MVP
- On-demand taxi dispatch or live driver tracking.
- In-app payments, escrow, refunds, or payment-card storage.
- False claims of identity verification or personal-safety guarantees.
- Native mobile applications.
- AI matching before a tested deterministic baseline exists.
- Public launch before legal, privacy, security, provider, and operational reviews.
- Full route optimization for arbitrary stops.

## 5. Core journeys

### Passenger: find and request a ride
1. Enter origin, destination, date, and seat count.
2. Review matching trips and filters.
3. Open a ride detail page to inspect schedule, stops, contribution, seats, and driver information.
4. Sign in when required.
5. Request seats and see the server-confirmed booking status.

### Driver: publish a ride
1. Start a multi-step form.
2. Enter origin, destination, departure time, stops, vehicle, available seats, and contribution per seat.
3. Review the trip summary and submit.
4. Manage requests and trip status from a dashboard.

### Driver: respond to request
1. Open a pending request on a ride they own.
2. Accept or decline.
3. Server validates ownership, current state, and capacity transactionally.
4. Driver and passenger see the authoritative status.

### Cancellation
1. Review cancellation terms.
2. Confirm cancellation.
3. Server validates ownership, status, timing, and policy.
4. Booking and inventory are updated atomically.
5. UI shows the final status.

## 6. MVP functional scope

### P0 — required
- Responsive landing page and ride search.
- Search by origin, destination, date, and seats.
- Ride result cards with schedule, contribution, availability, and driver summary.
- Ride detail page.
- Publish-ride multi-step form with client and server validation.
- Authentication/session foundation before real booking is enabled.
- Booking request, driver accept/decline, and eligible cancellation.
- Server-authoritative seat inventory protected against concurrent writes.
- Driver's published rides and user's booking history.
- PostgreSQL persistence and committed migrations.
- Clearly labelled deterministic demo data.
- Unit/integration tests for booking and inventory rules.
- Local setup and environment documentation.

### P1 — next
- Map-based route preview and pickup/drop-off visualization.
- Intermediate stops and segment compatibility.
- Driver/vehicle profiles and reviews after completed trips.
- In-app or email booking notifications.
- Saved searches and favourite routes.
- Trip-sharing link with limited public data.
- Accessible non-map way to search and inspect the trip.

### P2 — after validation
- Real-time chat.
- Recurring rides and communities.
- Payment provider integration.
- Identity verification provider.
- Live location sharing.
- Moderation console and abuse workflows.
- Native mobile client.

## 7. Search and matching
- Initial MVP can match exact origin/destination plus supported stops.
- Route-segment matching is an enhancement: passenger boarding and alighting stops must occur in the same order on the driver's route.
- Departure windows and seat count are explicit filters.
- Cancelled, departed, completed, unpublished, or full rides are not bookable.
- Client-side filters are for UX; server-side results are authoritative.
- ETA, distance, and detour are estimates from a configured provider and must be labelled as estimates.
- Search results must be paginated or bounded.

## 8. Business rules
- Each ride has one owner/driver and a canonical seat inventory.
- Each booking belongs to one ride and one passenger.
- The driver cannot book their own ride as a passenger in the MVP.
- Only the ride owner can accept or decline requests for that ride.
- Duplicate active booking requests are rejected unless multi-request policy is intentionally defined.
- Pick a single pending-request policy: pending requests either do not reserve seats or hold them temporarily. Implement it consistently in UI and API.
- Only an accepted booking consumes confirmed capacity. An eligible cancellation restores that capacity exactly once.
- All state changes and permissions are validated on the server.
- Store monetary values as integer minor units (e.g. paise) plus an explicit currency code.
- Store timestamps in UTC and render in the user's timezone.

## 9. UX and accessibility
- Mobile-first responsive UI with strong desktop layouts.
- Async states: loading, empty, error, retry, and success.
- Forms have labels, validation messages, keyboard support, and visible focus.
- Status is not conveyed by colour alone.
- Map failure must not block core search or trip details.
- Confirmation for destructive actions.
- Synthetic data is labelled; never imply demo availability, ratings, or verification are real.

## 10. Non-functional requirements
- TypeScript strict mode.
- Runtime validation for all API write input.
- Authentication and object-level authorization on private routes.
- Transactional, concurrency-safe booking operations.
- Rate and payload limits on public endpoints.
- No secrets in source or browser bundles.
- Avoid storing identity documents or payment credentials in the MVP.
- Structured logs redact credentials, private contact information, and unnecessary location data.
- Automated tests cover core invariants and failure cases.
- Safe user-facing errors; protected server logs contain diagnostic detail.

## 11. MVP acceptance criteria
A tester can:
- Search rides with origin, destination, date, and seat count.
- Inspect ride details.
- Publish a ride as a driver.
- Request a seat as a passenger.
- Accept/decline a request as the owning driver.
- Cancel an eligible booking and observe correct inventory.
- Verify parallel requests cannot overbook the final seat.
- Reload and see persisted data.
- Complete core flows on desktop and mobile.
- Run the documented test suite successfully.

## 12. Metrics to add later
Search-to-detail conversion, detail-to-booking conversion, driver response time, search coverage, cancellations, inventory conflict rate, repeat corridor usage, API errors, and frontend route performance. Do not show synthetic metrics as live product analytics.

## 13. Risks and open decisions
- **Marketplace liquidity:** start with one community/corridor instead of serving everyone immediately.
- **Regulation:** determine applicability of central/state transport or aggregator rules, consumer rules, insurance/liability, and privacy obligations before public operation.
- **Safety:** define reporting, moderation, verification, and incident response before real trips.
- **Maps:** select provider based on coverage, terms, attribution, and pricing.
- **Seat policy:** decide whether pending requests temporarily reserve capacity.
- **Cancellation:** define cutoffs before enabling live trips.
- **Payments:** stay out of MVP until business model and compliance are clear.
