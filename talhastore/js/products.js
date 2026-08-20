// ============================================================
//  TALHASTORE — STORE CONFIG
//  Yahan apni WhatsApp number, store details aur products edit karein.
//  Number format: country code ke saath, bina + ya 0 ke.
//  Example: Pakistan 0300-1234567 -> "923001234567"
// ============================================================

const STORE = {
  name: "Talhastore",
  tagline: "Seedha WhatsApp par order karein",
  whatsapp: "923001234567", // <-- YAHAN APNA ASLI WHATSAPP NUMBER DALEIN
  city: "Lahore, Pakistan",
};

// Har product ek "tag" ki tarah dikhta hai.
// category se products filter hote hain (neeche categories list se milti honi chahiye)
const CATEGORIES = ["Sab Kuch", "New", "Featured"];

const PRODUCTS = [
  {
    id: "p1",
    name: "Product Ka Naam Yahan",
    price: 1999,
    category: "New",
    image: "https://placehold.co/500x500/EDE0C0/14171B?text=Photo+Add+Karein",
    note: "Chhota description yahan likhein",
  },
  {
    id: "p2",
    name: "Doosra Product",
    price: 2499,
    category: "Featured",
    image: "https://placehold.co/500x500/EDE0C0/14171B?text=Photo+Add+Karein",
    note: "Chhota description yahan likhein",
  },
  {
    id: "p3",
    name: "Teesra Product",
    price: 899,
    category: "New",
    image: "https://placehold.co/500x500/EDE0C0/14171B?text=Photo+Add+Karein",
    note: "Chhota description yahan likhein",
  },
];
