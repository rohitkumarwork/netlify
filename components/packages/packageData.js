const BuyerPackages = [
  {title: 'Appetizer', count: 1, qualifierText: 'Home Less then $750K', points: [
    {content: "50/50 Rebate \n (1.25% of Purchase Price)", active: true},
    {content: "Free Home Inspection", active: true},
    {content: "Free Legal Closing", active: true},
    {content: "Free Moving Boxes", active: false},
    {content: "Free Professional Cleaner", active: false},
    {content: "Free Professional Movers/Truck", active: false},
    {content: "Free Interior Design Consult", active: false}
  ]},
  {title: 'Lunch Date', count: 2, qualifierText: 'Home priced between $700K-$1M', points: [
    {content: "50/50 Rebate \n (1.25% of Purchase Price)", active: true},
    {content: "Free Home Inspection", active: true},
    {content: "Free Legal Closing", active: true},
    {content: "Free Moving Boxes", active: true},
    {content: "Free Professional Cleaner", active: true},
    {content: "Free Professional Movers/Truck", active: false},
    {content: "Free Interior Design Consult", active: false}
  ]}, 
  {title: 'Full Dinner', count: 3, qualifierText: 'Home Above $1M',points: [
    {content: "50/50 Rebate \n (1.25% of Purchase Price)", active: true},
    {content: "Free Home Inspection", active: true},
    {content: "Free Legal Closing", active: true},
    {content: "Free Moving Boxes", active: true},
    {content: "Free Professional Cleaner", active: true},
    {content: "Free Professional Movers/Truck", active: true},
    {content: "Free Interior Design Consultation", active: true}
  ]}
]

const SellerPackages = [
  {title: 'Pat on the back', count: 1, qualifierText: '1% Commission', 
    points: [
      {content: "Realtor Meet & Greet", active: true},
      {content: "Free Legal Consult", active: true},
      {content: "'For Sale' Sign and Post Installed", active: true},
      {content: "Professional Photography", active: true},
      {content: "MLS & Realtor.ca Post", active: true},
      {content: "Base Social Media Ad", active: true},
      {content: "Premium Feature Sheet", active: true},
      {content: "Community/School Reports", active: true},
      {content: "Open House", active: true},
      {content: "Moving Box Kit", active: true},
      {content: "Free Legal Fees", active: true},
      {content: "MyTownhome Concierge (Movesnap)", active: true},
    ],
    midpoints: [
      {content: "Elite Photography and Floorplan", active: true},
      {content: "Professional Cleaners", active: true},
    ],
    millionpoints: [
      {content: "Basic Staging Consult, Plan & Service", active: true},
      {content: "Partial Moving Service / Pod / Closet", active: true},
    ]
  },


  {title: 'High Five', count: 2, qualifierText: '1.5% Commission',
    points: [
      {content: "Realtor Meet & Greet", active: true},
      {content: "Free Legal Consult", active: true},
      {content: "'For Sale' Sign and Post Installed", active: true},
      {content: "Elite Photography and Floorplan", active: true},
      {content: "MLS & Realtor.ca Post", active: true},
      {content: "Upgraded Social Media Ad", active: true},
      {content: "Custom Feature Phamplet", active: true},
      {content: "Community/School Reports", active: true},
      {content: "Open House", active: true},
      {content: "Moving Box Kit", active: true},
      {content: "Free Legal Fees", active: true},
      {content: "MyTownhome Concierge (Movesnap)", active: true},
      {content: "Free Mortgage Consult", active: true},
      {content: "Staging Consult, Plan & Service", active: true},
    ],
    midpoints: [
      {content: "Professional Cleaners", active: true},
      {content: "Starter Staging Furniture & Accesories", active: true},
      {content: "Partial Moving Service / Pod / Closet", active: true},
    ],
    millionpoints: [
      {content: "Pre Listing Inspection", active: true},
      {content: "Medium Staging Furniture & Accesories", active: true},
      {content: "Full Moving Service", active: true},
    ]
  },

  {title: 'Hug it out', count: 3, qualifierText: '2% Commission',
    points: [
      {content: "Realtor Meet & Greet", active: true},
      {content: "Free Legal Consult", active: true},
      {content: "'For Sale' Sign and Post Installed", active: true},
      {content: "Elite Photography and Floorplan", active: true},
      {content: "MLS & Realtor.ca Post", active: true},
      {content: "High-End Social Media Ad", active: true},
      {content: "Custom Feature Booklet", active: true},
      {content: "Community/School Reports", active: true},
      {content: "Open House", active: true},
      {content: "Moving Box Kit", active: true},
      {content: "Free Legal Fees", active: true},
      {content: "MyTownhome Concierge (Movesnap)", active: true},
      {content: "Free Mortgage Consult", active: true},
      {content: "Staging Consult, Plan & Service", active: true},
      {content: "PreListing Inspection", active: true},
      {content: "Professional Cleaners", active: true},
      {content: "Partial Moving Service/Pod/Closet", active: true},
    ],
    midpoints: [
      {content: "Pre Listing Inspection (400)", active: true},
      {content: "Medium Staging Furniture & Accesories", active: true},

    ],
    millionpoints: [
      {content: "Full Staging Furniture & Accesories", active: true},
      {content: "Full Moving Service ", active: true},
      {content: "Storage Pod / Closet", active: true},
      {content: "Drone Areial Video ", active: true},
    ]
  },
]

export {
  BuyerPackages,
  SellerPackages
}
