/**
 * Initial shared domain contracts. These describe the future domain model;
 * the starter API does not yet persist these entities.
 */

export type RideStatus =
  | "draft"
  | "published"
  | "cancelled"
  | "departed"
  | "completed";

export type BookingStatus =
  | "pending"
  | "accepted"
  | "declined"
  | "cancelled"
  | "completed";

export interface PlaceSummary {
  label: string;
  latitude?: number;
  longitude?: number;
  providerPlaceId?: string;
}

export interface RideSummary {
  id: string;
  origin: PlaceSummary;
  destination: PlaceSummary;
  departureAt: string;
  contributionMinor: number;
  currencyCode: string;
  availableSeats: number;
  status: RideStatus;
}
