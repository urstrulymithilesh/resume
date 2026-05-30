export type RideListing = {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  campus: string;
  privacy: string;
  kind: "Offering" | "Requesting";
};

export const featuredRides: RideListing[] = [
  {
    id: "ord-campus-friday",
    from: "Lewis University area",
    to: "O'Hare airport",
    date: "Fri, Jun 5",
    time: "3:30 PM",
    seats: 2,
    campus: "Lewis University",
    privacy: "Exact pickup hidden until both students agree in chat.",
    kind: "Offering",
  },
  {
    id: "grocery-loop-sunday",
    from: "North campus apartments",
    to: "Grocery loop",
    date: "Sun, Jun 7",
    time: "11:00 AM",
    seats: 3,
    campus: "Community route",
    privacy: "Public listing only shows neighborhood-level locations.",
    kind: "Offering",
  },
  {
    id: "late-lab-ride",
    from: "Library district",
    to: "Student housing",
    date: "Tonight",
    time: "9:45 PM",
    seats: 1,
    campus: "Campus safety route",
    privacy: "Contact info stays private unless voluntarily revealed.",
    kind: "Requesting",
  },
];
