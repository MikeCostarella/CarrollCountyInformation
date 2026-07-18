// Carroll County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-14

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

export const AUDITOR_VENDOR = "Data Dynamics (DDTI)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Carroll County (Official Site)", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/", description: "Official Carroll County government website — agencies, departments, and services." },
  { name: "County Auditor", category: "Government", subcategory: "County", url: "https://www.carrollcountyauditor.us/", description: "Property values, tax records, and county finances." },
  { name: "Property / Parcel Search", category: "Government", subcategory: "County", url: "http://realestate.carrollcountyauditor.us/", description: "Auditor real-estate search by owner, address, or parcel number." },
  { name: "Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/carroll/", description: "Voter registration, ballots, polling places, and election results." },

  // ---------- Education ----------
  { name: "Carroll County District Library", category: "Education", subcategory: "Library", url: "https://www.carrolllibrary.org/", description: "County library — books, e-resources, and programs in Carrollton." },
  { name: "Carrollton Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.carrolltonschools.org/", description: "The county's largest public school district, based in Carrollton." },

  // ---------- Health ----------
  { name: "Carroll County General Health District", category: "Health", subcategory: "Public Health", url: "https://carroll-lhd.org/", description: "Public-health services, clinics, vital records, and health programs." },

  // ---------- Business & Economy ----------
  { name: "Carroll County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.carrollcountyohio.com/", description: "Local business network, member resources, and economic development." },

  // ---------- Recreation & Tourism ----------
  { name: "Atwood Lake / MWCD", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/", description: "Muskingum Watershed Conservancy District — Atwood Lake parks and recreation." },

  // ---------- News & Media ----------
  { name: "The Free Press Standard", category: "News & Media", subcategory: "Newspaper", url: "https://www.yourohionews.com/carroll", description: "Carroll County's weekly newspaper serving Carrollton and the surrounding area." },
];
