// Carroll County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-09
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Sites that block automated fetching (the Auditor's search,
// the Clerk's case portal and the Free Press Standard) were checked in a browser.
//
// THINGS THAT CHANGED SINCE JULY
//
//   * The Auditor's site is carrollcountyauditor.us ("Carroll County Real Estate
//     Search", ISSG), not Data Dynamics; realestate.carrollcountyauditor.us now
//     redirects to it.
//   * The Board of Elections has its own site, carrollcountyohioelections.gov; the
//     boe.ohio.gov/carroll page shows a 2022 heading and never names the county.
//   * The county site was rebuilt with short paths (/Treasurer, /Recorder); the
//     Auditor's own "Treasurer" and "Auditor" links still point at dead old paths.
//   * carrollcountyohio.com is both the Chamber and the Visitors Bureau. The MWCD
//     link now goes to its Atwood Lake and Leesville Lake pages. The Free Press
//     Standard lives on yourohionews.com (AloNovus).
//   * Community Hospice is now Ohio's Hospice; Mercy's Carrollton sites are now
//     Cleveland Clinic Mercy; SpringVale was Community Mental Healthcare.
//   * Atwood Lake Resort closed in 2016 (now a rehab center).
//
// TRAPS
//
//   Carroll County MARYLAND (arts council, tourism, humane society, Head Start),
//   KENTUCKY, GEORGIA, NEW HAMPSHIRE; Carrollton GA/TX; Malvern AR/PA;
//   harrisontownshipohio.com and monroetwp-oh.gov are other counties' townships.
//
// GEOGRAPHY
//
//   * No cities; seven villages (Minerva and Magnolia mostly in Stark; Dellroy and
//     Leesville have no sites) and fourteen townships, none with a site.
//   * No inpatient hospital; Aultman and Cleveland Clinic Mercy run outpatient
//     centers in Carrollton.
//   * Minerva Local and Sandy Valley are Stark-based districts that take in part
//     of Carroll; Conotton Valley is based in Bowerston. The Stark County ESC
//     serves Carrollton and Brown Local; Buckeye Career Center is in New
//     Philadelphia.
//   * Many services are regional: the ADAMHS board and HARCATUS are shared with
//     Tuscarawas, the solid waste district with Columbiana and Harrison, United
//     Way and the county foundation are Stark-based.
//   * No broadcast station is licensed to a Carroll town.
//
// LEFT OUT rather than listed unverified: the Probate/Juvenile Court site (does
// not load), the Recorder's Kofile search, the Carroll County Arts Center and
// Great Trail Festival sites (empty or not loading), the Humane Society and
// Habitat (no sites), the Port Authority/CIC (no site) and private dental
// practices.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Carroll County Real Estate Search (ISSG)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Carroll County, Ohio Official Website", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/", description: "Official Carroll County, Ohio website with county departments, elected officials, a contact directory, news and public notices, based at the courthouse at 119 South Lisbon Street in Carrollton." },
  { name: "Carroll County Departments Directory", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/Departments", description: "County page listing Carroll County departments and agencies with addresses and links to their pages or websites." },
  { name: "Carroll County Elected Officials", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/Officials", description: "County page listing Carroll County's elected officials with office, email, phone and office location." },
  { name: "Carroll County Contact Directory", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/Directory", description: "County directory of phone numbers and addresses for Carroll County villages, townships, law enforcement, fire departments, schools and post offices." },
  { name: "Carroll County Board of Commissioners", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/BoardOfCommissioners", description: "Page for the three-member Board of Commissioners, the county's governing and taxing authority, at 119 S. Lisbon Street, Suite 201, Carrollton." },
  { name: "Carroll County Commissioners Meeting Minutes", category: "Government", subcategory: "County", url: "https://carrollcountyohio.us/MeetingMinutes", description: "Searchable draft minutes of Carroll County Board of Commissioners meetings, with summaries and PDF links." },
  { name: "Carroll County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.carrollcountyauditor.us/", description: "Carroll County Auditor's real estate search site with property records, tax estimator, tax credits, dog and vendor licensing, and data downloads, at 119 South Lisbon Street, Suite 203, Carrollton." },
  { name: "Carroll County Maps (GIS)", category: "Government", subcategory: "GIS", url: "https://carroll.countygis.org/", description: "Online parcel and property mapping site for Carroll County, Ohio, linked from the Auditor's website." },
  { name: "Carroll County Engineer Tax Map Office", category: "Government", subcategory: "GIS", url: "https://carrollcountyohio.us/EngineerTaxMap", description: "Tax Map Office that maintains county maps and property records and provides mapping support to townships and county departments, at 119 S. Lisbon St., Suite 101, Carrollton." },
  { name: "Carroll County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://carrollcountyohio.us/Treasurer", description: "County page for the Carroll County Treasurer at 119 S. Lisbon Street, Carrollton." },
  { name: "Carroll County Recorder", category: "Government", subcategory: "Recorder", url: "https://carrollcountyohio.us/Recorder", description: "Recorder's Office page with online records search, e-recording providers, fees and property fraud information, at 119 S. Lisbon Street, Suite 205, Carrollton." },
  { name: "Carroll County Courts", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/Courts", description: "County page covering the Court of Common Pleas, Probate/Juvenile Court, Municipal Court and Clerk of Courts, with links to local rules and court websites." },
  { name: "Carroll County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/ClerkOfCourts", description: "Clerk of Courts page with civil, criminal and domestic relations forms for the Carroll County Court of Common Pleas, at 119 South Lisbon Street, 4th Floor, Carrollton." },
  { name: "Carroll County Clerk of Courts Title Department", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/TitleDepartment", description: "Title office under the Clerk of Courts issuing and transferring automobile, watercraft and mobile home titles, at 119 South Lisbon Street, Suite 401, Carrollton." },
  { name: "Carroll County Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.carrollcountycourt.org/", description: "Website of the Carroll County Municipal Court at 119 South Lisbon St., Suite 301, Carrollton, Ohio." },
  { name: "Carroll County Law Library", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/LawLibrary", description: "Law library offering legal research materials and forms by appointment on the 3rd floor of the Carroll County Courthouse, 119 South Lisbon Street, Carrollton." },
  { name: "Carroll County Prosecuting Attorney", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/ProsecutingAttorney", description: "County page for the Prosecuting Attorney's office at 7 E. Main Street, Carrollton." },
  { name: "Carroll County Victims Assistance Program", category: "Government", subcategory: "Courts", url: "https://carrollcountyohio.us/VictimsAssistanceProgram", description: "Program assisting crime victims in Common Pleas, Municipal and Juvenile courts with notifications, protection orders, crisis intervention and court accompaniment, at 119 South Lisbon Street, 3rd Floor, Carrollton." },
  { name: "Carroll County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.carrollcountyohioelections.gov/", description: "Official website of the Carroll County Board of Elections in Carrollton, Ohio." },
  { name: "Carroll County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.carrollcountysheriff.org/", description: "Website of the Carroll County, Ohio Sheriff's Office at 43 2nd St., Carrollton." },
  { name: "Carroll County Sheriff's Office Divisions (911/Communication Center)", category: "Government", subcategory: "Public Safety", url: "https://www.carrollcountysheriff.org/divisions", description: "Sheriff's page describing road patrol, the county 911/Communication Center that dispatches fire, EMS and law enforcement, the detective bureau and the jail." },
  { name: "Carroll County Emergency Management Agency", category: "Government", subcategory: "Public Safety", url: "https://carrollcountyohio.us/EmergencyManagementAgency", description: "EMA page covering emergency planning, hazardous chemical reporting, floodplain management and emergency notifications, with an office at 11 E. Main St., Carrollton." },
  { name: "Carroll County Coroner", category: "Government", subcategory: "Public Safety", url: "https://carrollcountyohio.us/Coroner", description: "County page for the elected Carroll County Coroner." },
  { name: "Carroll County Dog Pound", category: "Government", subcategory: "Public Safety", url: "https://carrollcountyohio.us/DogPound", description: "Dog warden and shelter providing animal control, dog licensing and care for stray and surrendered dogs at 2185 Kensington Road NE, Carrollton." },
  { name: "Carroll County Engineer", category: "Government", subcategory: "Public Works", url: "https://carrollcountyohio.us/Engineer", description: "County Engineer page with engineering services, permits and RUMAs, annual reports and county map, at 200 Kensington Road NE, Carrollton." },
  { name: "Carroll County Environmental Services", category: "Government", subcategory: "Public Works", url: "https://carrollcountyohiosewer.us/", description: "County wastewater utility with billing, service requests and sewer rates, at 620 West Canal Street, Malvern." },
  { name: "CCH Solid Waste District", category: "Government", subcategory: "Public Works", url: "https://carrollcountyohio.us/CCHSolidWasteDistrict", description: "County page for the solid waste district serving Carroll, Columbiana and Harrison counties, at 1130 Cobbler Rd NE, Carrollton." },
  { name: "Carroll County Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://carrollcountyohio.us/RegionalPlanningCommission", description: "Commission handling subdivision regulations, lot splits, comprehensive planning and county house numbering, at 119 S. Lisbon Street, Third Floor, Carrollton." },
  { name: "Carroll County Economic Development", category: "Government", subcategory: "Planning", url: "https://carrollcountyohio.us/EconomicDevelopment", description: "County economic development office that recruits and supports businesses, helps with site selection and shares incentive information, at 119 South Lisbon Street, Carrollton." },
  { name: "Carroll Soil & Water Conservation District", category: "Government", subcategory: "Conservation", url: "http://www.carrollswcd.org/", description: "District providing conservation planning, technical help and education to Carroll County landowners, at 1029 Countryside Dr NW, Carrollton." },
  { name: "Carroll County Veteran Service Office", category: "Government", subcategory: "Veterans", url: "https://carrollcountyohio.us/VeteranServiceOffice", description: "Office helping veterans and families with emergency assistance, VA claims, records, grave markers and transportation to the Wade Park VAMC, at 160 2nd Street SW, Carrollton." },
  { name: "Carroll County Transit", category: "Government", subcategory: "Transit", url: "https://carrollcountyohio.us/Transit", description: "Door-to-door demand-response public transportation for rides starting or ending in Carroll County, with an office at 2205 Commerce Drive NW, Carrollton." },
  { name: "Carroll County Airport (TSO)", category: "Government", subcategory: "Transit", url: "https://tso-apt.com/", description: "Public airport in Carrollton, Ohio, credited to the Carroll County Airport Authority, with one runway, fuel, hangars and a restaurant." },
  { name: "Carroll County Job & Family Services", category: "Government", subcategory: "County", url: "https://www.carrollcountyjfs.com/", description: "County Job & Family Services agency offering eligibility and social services at 207 Moody Avenue SW, Suite 101, Carrollton." },
  { name: "Carroll County JFS - Report Child Abuse/Neglect", category: "Government", subcategory: "County", url: "https://www.carrollcountyjfs.com/report-child-abuseneglect.html", description: "JFS page explaining how to report suspected child or adult abuse or neglect in Carroll County, with daytime and after-hours numbers." },
  { name: "Carroll County Family and Children First Council", category: "Government", subcategory: "County", url: "https://www.carrollcountyjfs.com/family-and-children-first-council.html", description: "JFS page for the county Family and Children First Council with its meeting schedule and service coordination mechanism." },
  { name: "Carroll County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://carrollcbdd.org/", description: "Board providing early intervention, preschool, school-age and adult services for people with developmental disabilities, at 540 High Street NW, Carrollton." },
  { name: "Village of Carrollton", category: "Government", subcategory: "Village", url: "https://villageofcarrollton.com/", description: "Village of Carrollton government website, with the municipal building at 80 2nd St SW, Carrollton." },
  { name: "Village of Malvern", category: "Government", subcategory: "Village", url: "https://villageofmalvern.net/", description: "Village of Malvern website for the Carroll County village in Brown Township." },
  { name: "Village of Sherrodsville", category: "Government", subcategory: "Village", url: "https://sherrodsville.municipalimpact.com/", description: "Village of Sherrodsville website, with the village at 4 Sherrod Avenue, Sherrodsville." },
  { name: "Village of Minerva", category: "Government", subcategory: "Village", url: "https://minerva.oh.us/", description: "Village of Minerva website for the village spanning Stark, Carroll and Columbiana counties, with its hall at 209 N. Market St., Minerva." },
  { name: "Village of Magnolia", category: "Government", subcategory: "Village", url: "https://villageofmagnolia.com/", description: "Village of Magnolia website, with the village hall at 328 North Main St., Magnolia." },
  { name: "Carroll County Auditor Property Search", category: "Government", subcategory: "Auditor", url: "https://www.carrollcountyauditor.us/Search", description: "Carroll County Real Estate Search by owner, address or parcel on the County Auditor's site (opens after a disclaimer page)." },
  { name: "Carroll County Clerk of Courts Public Portal", category: "Government", subcategory: "Courts", url: "https://carrollcountyclerk.org/", description: "Carroll County court records search and e-filing portal." },
  // ---------- Education ----------
  { name: "Carroll County District Library", category: "Education", subcategory: "Library", url: "https://carrolllibrary.org/", description: "Public library with its main library at 70 Second St NE, Carrollton, and a Malvern Branch at 710 E. Porter St, Malvern." },
  { name: "Carrollton Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://carrolltonschools.org/", description: "Public district with offices at 205 Scio Rd. SW, Carrollton, operating Carrollton High School, Carrollton Middle School and Carrollton Elementary School." },
  { name: "Brown Local Schools", category: "Education", subcategory: "K-12", url: "https://www.brownlocalschools.com/", description: "Public district with offices at 3242 Coral Rd NW, Malvern, operating an elementary school and a middle/high school." },
  { name: "Conotton Valley Union Local Schools", category: "Education", subcategory: "K-12", url: "https://www.cvul.org/", description: "Public district with offices at 7205 Cumberland Road S.W., Bowerston, operating a high school and an elementary school." },
  { name: "Minerva Local School District", category: "Education", subcategory: "K-12", url: "https://www.mlsd.sparcc.org/", description: "Public district with offices at 406 East Street, Minerva, operating Minerva Elementary, Middle and High Schools." },
  { name: "Sandy Valley Local School District", category: "Education", subcategory: "K-12", url: "https://www.sandyvalleylocal.org/", description: "Public district with offices at 5362 State Route 183 NE, Magnolia, operating Sandy Valley Elementary, Middle and High Schools." },
  { name: "Buckeye Career Center", category: "Education", subcategory: "Career Center", url: "https://www.buckeyecareercenter.org/", description: "Career-technical center at 545 University Drive NE, New Philadelphia, offering high school career-technical programs and full-time and part-time adult education." },
  { name: "Carroll County Christian Academy", category: "Education", subcategory: "Private School", url: "https://cccaeagles.com/", description: "Private Christian school at 1211 Lincoln Ave. NW, Carrollton, with a college preparatory curriculum." },
  { name: "HARCATUS Head Start", category: "Education", subcategory: "Preschool", url: "https://www.harcatus.org/Head-Start", description: "Head Start program of HARCATUS Tri-County C.A.O., which serves Harrison, Carroll and Tuscarawas counties and lists a Malvern Learning Center at 301 W. Main St., Malvern." },
  { name: "Stark County Educational Service Center (serves Brown Local and Carrollton EVSD)", category: "Education", subcategory: "ESC", url: "https://www.starkcountyesc.org/about-us/member-districts", description: "Stark County ESC member-district page, listing Brown Local and Carrollton Exempted Village under Carroll County; the ESC is at 6057 Strip Ave NW, North Canton." },
  // ---------- Health ----------
  { name: "Carroll County General Health District", category: "Health", subcategory: "Public Health", url: "https://carroll-lhd.org/", description: "County health district at 301 Moody Ave. S.W., Carrollton, providing vital records, nursing and immunization services, environmental health inspections and community health programs." },
  { name: "Aultman Carrollton", category: "Health", subcategory: "Clinic", url: "https://aultman.org/locations/aultman-carrollton/", description: "Aultman outpatient center at 1020 Trump Rd. NW, Carrollton, offering primary care, imaging, lab, therapy services and visiting specialty clinics." },
  { name: "Mercy Hospital Urgent and Outpatient Care, Carrollton", category: "Health", subcategory: "Clinic", url: "https://my.clevelandclinic.org/locations/directions/604-carrollton-urgent-and-outpatient-care", description: "Cleveland Clinic Mercy Hospital outpatient site at 125 Canton Road NW, Carrollton, offering urgent care, primary care, imaging and occupational medicine." },
  { name: "Mercy Hospital Carrollton Therapy Services", category: "Health", subcategory: "Clinic", url: "https://my.clevelandclinic.org/locations/directions/614-mercy-hospital-carrollton-therapy-services", description: "Cleveland Clinic Mercy Hospital therapy site at 1001 Canton Road NW, Carrollton, offering physical, occupational and speech therapy and sports medicine." },
  { name: "ADAMHS Board of Tuscarawas and Carroll Counties", category: "Health", subcategory: "Mental Health", url: "https://adamhtc.org/", description: "Alcohol, drug addiction and mental health services board at 119 Garland Drive SW, New Philadelphia, that lists Carroll County crisis and service resources." },
  { name: "SpringVale Health Centers (Carrollton)", category: "Health", subcategory: "Mental Health", url: "https://springvalehealth.org/contact/", description: "Behavioral health, primary care, dental and pharmacy provider serving Tuscarawas and Carroll counties, with a Carrollton office at 331 W. Main St. and a 24/7 Carroll crisis line." },
  { name: "Southeast Healthcare - Carroll County Office", category: "Health", subcategory: "Mental Health", url: "https://southeasthc.org/locations/carrol-county/", description: "Southeast Healthcare office at 611 High St. NW, Carrollton, offering case management, individual and group therapy, psychiatric medication management and youth services." },
  { name: "OhioGuidestone - Carroll County", category: "Health", subcategory: "Mental Health", url: "https://ohioguidestone.org/locations/northeast-ohio/carroll/", description: "OhioGuidestone's Carroll County office in Carrollton, offering family and prevention services, with outpatient and psychiatric services at its New Philadelphia office." },
  { name: "RFM Behavioral Health Services", category: "Health", subcategory: "Mental Health", url: "https://www.rfmbehavioral.com/", description: "Psychological and counseling practice at 1196 Kensington Road, Carrollton, serving children, adolescents, families and older adults." },
  { name: "Ohio's Hospice of New Philadelphia", category: "Health", subcategory: "Hospice", url: "https://www.ohioshospice.org/newphiladelphia/", description: "Hospice office at 716 Commercial Ave. SW, New Philadelphia, which lists Carroll County among the counties it serves." },
  { name: "Crossroads Hospice & Palliative Care - Akron Area", category: "Health", subcategory: "Hospice", url: "https://crossroadshospice.com/locations/ohio/akron-area", description: "Crossroads Hospice's Akron-area team, with a mailing address at 3743 Boettler Oaks Dr., Suite E, Uniontown, which lists Carroll among the Northeast Ohio counties it serves." },
  // ---------- Business & Economy ----------
  { name: "Carroll County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.carrollcountyohio.com/", description: "Chamber of commerce at 30 Public Square, Carrollton, OH 44615, whose site also hosts the Carroll County Convention & Visitors Bureau and offers chamber membership information and a member directory." },
  { name: "OhioMeansJobs Carroll County", category: "Business & Economy", subcategory: "Workforce", url: "https://www.carrollcountyjfs.com/ohiomeansjobs-job-center.html", description: "OhioMeansJobs job center run with Carroll County Job and Family Services in Carrollton, offering employer services, training-provider information and job search, interview and resume help." },
  { name: "OSU Extension Carroll County", category: "Business & Economy", subcategory: "Agriculture", url: "https://carroll.osu.edu/", description: "Ohio State University Extension office at 540 High Street NW, Carrollton, with 4-H youth development, agriculture and natural resources, community development, family and consumer sciences and Master Gardener programs." },
  { name: "Carroll Electric Cooperative", category: "Business & Economy", subcategory: "Utility", url: "https://www.cecpower.coop/", description: "Member-owned electric cooperative at 350 Canton Rd. NW, Carrollton, OH 44615, offering electric service, the SmartHub account portal, an outage center, energy-efficiency rebates and payment-assistance information." },
  { name: "Carroll County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/counties/carroll/", description: "Ohio Farm Bureau county page for Carroll County, served from an office at 2146 E High Ave, New Philadelphia, with scholarships, events, a Buy Local directory and contact information." },
  { name: "Ohio Mid-Eastern Governments Association (OMEGA)", category: "Business & Economy", subcategory: "Economic Development", url: "https://omegadistrict.org", description: "Regional development district at 1776 Tech Park Drive NE, New Philadelphia, serving ten Ohio counties including Carroll (regional, not Carroll-based)." },
  // ---------- Community & Social ----------
  { name: "United Way of Greater Stark County: Carroll County", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.uwstark.org/carroll-county/", description: "Carroll County page of the Canton-based United Way of Greater Stark County, describing its Carroll County programs: Imagination Library, free tax preparation (VITA), an emergency assistance collaborative and a CARE Team for at-risk youth." },
  { name: "HARCATUS Tri-County Community Action Organization", category: "Community & Social", subcategory: "Food & Assistance", url: "http://www.harcatus.org/", description: "Community action agency based at 821 Anola Street, Dover, serving Harrison, Carroll and Tuscarawas counties with HEAP, weatherization, Head Start, Early Head Start, senior nutrition, RSVP and youth employment programs." },
  { name: "Carroll County Foundation (Stark Community Foundation)", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.starkcf.org/the-foundation/carroll-county-foundation", description: "Affiliate foundation of Stark Community Foundation, guided by a local volunteer board, that holds donor funds and runs the Carroll Community Fund grant program for Carroll County projects." },
  { name: "Area Agency on Aging Region 9", category: "Community & Social", subcategory: "Seniors", url: "https://www.aaa9.org/", description: "Area agency on aging at 710 Wheeling Avenue, Cambridge, serving Carroll and eight other east-central Ohio counties." },
  { name: "Akron-Canton Regional Foodbank", category: "Community & Social", subcategory: "Food & Assistance", url: "https://akroncantonfoodbank.org/about", description: "Regional food bank headquartered at 350 Opportunity Pkwy, Akron, serving Carroll, Holmes, Medina, Portage, Stark, Summit, Tuscarawas and Wayne counties." },
  { name: "Carroll County Ohio Genealogical Society", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.ogs.org/about/chapters-2/carroll-county-ohio-genealogical-society/", description: "Ohio Genealogical Society chapter whose genealogical library is inside the Carroll County District Library, 70 2nd St. NE, Carrollton." },
  // ---------- Recreation & Tourism ----------
  { name: "Carroll County Convention & Visitors Bureau", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.carrollcountyohio.com/cvb", description: "Visitors bureau at 30 Public Square, Carrollton, sharing a site with the Chamber, with information on things to do, lodging, dining and weddings in Carroll County." },
  { name: "Atwood Lake Park (MWCD)", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/places/atwood-lake-park/", description: "Muskingum Watershed Conservancy District park on Atwood Lake in Tuscarawas and Carroll counties (9500 Lakeview Road, Mineral City) with campsites, cabins, a swimming beach, boat ramps, marinas, trails and a nature center." },
  { name: "Leesville Lake (MWCD)", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/places/leesville-lake/", description: "Muskingum Watershed Conservancy District lake in Carroll County (4131 Deer Road SW, Bowerston) with a 10-horsepower limit, two marinas, campgrounds, boat ramps and an accessible fishing pier." },
  { name: "McCook House", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.ohiohistory.org/historical_sites/mccook-house/", description: "Ohio History Connection site at 15 South Lisbon Street, Carrollton, managed by the Carroll County Historical Society, preserving the 1830s home of Daniel McCook with exhibits on the \"Fighting McCooks\" and the Civil War." },
  { name: "Carroll County Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://sites.google.com/view/carrollcountyhistoricalsociety/home", description: "Carrollton-based historical society that manages the McCook House and operates the Algonquin Mill Complex." },
  { name: "Algonquin Mill Complex", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://sites.google.com/view/carrollcountyhistoricalsociety/algonquin-mill-complex", description: "Carroll County Historical Society complex at 234 Autumn Rd SW, Carrollton, with a restored flour mill, log cabins, a farmhouse, a railroad station, a one-room school, a farm museum and an arboretum." },
  { name: "Algonquin Mill Fall Festival", category: "Recreation & Tourism", subcategory: "Fair", url: "https://sites.google.com/view/carrollcountyhistoricalsociety/mill-festival", description: "Annual fall festival held at the Algonquin Mill Complex, 234 Autumn Rd SW, about four miles south of Carrollton on State Route 332, with vendor, camping and pet-policy information." },
  { name: "Carroll County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "http://www.carrollcountyfairohio.com/", description: "County fair at 160 Kensington Rd. NE, Carrollton, OH 44615, with the fair calendar, grandstand entertainment, Junior Fair and open class information, tickets and directions." },
  { name: "Carroll County Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.ccparkdistrict.org/aboutus.html", description: "County park district operating Carroll Community Park on Salineville Rd (SR 39) outside Carrollton and The Bluebird Farm Park, with gardens, trails, an arboretum, an amphitheater, a toy museum and rental venues." },
  { name: "Village of Carrollton Parks & Recreation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.villageofcarrollton.com/parks-recreation", description: "Village parks page listing Ann Green Memorial Park, Veteran's Park, Kiddie Land Park and 5th Street Park, with pavilion reservations at Ann Green and Veteran's parks." },
  { name: "Malvern Village Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://villageofmalvern.net/park-services", description: "Village of Malvern park page describing a walking track, ball diamonds, courts, nature trails, a disc golf course and four rentable pavilions." },
  { name: "Ohio Foothills: Carroll County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitohiofoothills.com/carroll/", description: "Carroll County page of the ten-county Ohio Foothills regional tourism site, featuring the McCook House, Leesville Lake, Great Trail Golf Course and the Algonquin Mill Fall Festival (regional)." },
  // ---------- News & Media ----------
  { name: "Free Press Standard (YourOhioNews.com)", category: "News & Media", subcategory: "Newspaper", url: "https://www.yourohionews.com/carroll-county", description: "Carroll County section of Your Ohio News for the Free Press Standard, Carrollton's weekly newspaper." },
];
