// ═════════════════════════════════════════════════════════════════════════
// STORY DATA — this is the ONLY file you need to edit for a new success story.
// Duplicate this whole project folder, swap the contents of this file and the
// /images folder, and script.js + styles.css keep working unchanged.
// ═════════════════════════════════════════════════════════════════════════

// The "img" field on each slide below can be EITHER:
//   1. A full image URL, e.g. "https://images.unsplash.com/photo-xxxx?w=1600&q=80"
//   2. A local path to an image living in this GitHub repo, e.g. "images/founder.jpg"
//      or "assets/photos/qcell.png" (relative to this page), or an absolute
//      site path like "/GamHubJobsSuccessStories/images/founder.jpg".
//
// Local paths are resolved relative to IMAGE_BASE_PATH below unless they are
// already absolute (start with "http(s)://", "/", "./", or "../"), so you can
// just drop image files into that folder in the repo and reference them by
// filename only, e.g. img: "founder.jpg".
const IMAGE_BASE_PATH = "images/"; // change to match this story's image folder

const slides = [
  {
    type:"statement",
    text:"He started with just 4 employees.",
    img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"In the late 1990s, a simple question changed his life.",
    img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"Why was someone coming all the way from Europe to teach Gambians how to use a computer?",
    img:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1600&q=80"
  },
  {
    type:"statement",
    text:"He saw an opportunity.",
    img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
  },
  {
    type:"statement",
    text:"So he started teaching people computing.",
    img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
  },
  {
    type:"statement",
    text:"That small idea became QuantumNet.",
    img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"Then came telecommunications...",
    img:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600&q=80"
  },
  {
    type:"statement",
    text:"QCell.",
    img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"And eventually, an <span class=\"highlight\">entire business ecosystem</span>.",
    img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
  },
  {
    type:"statement",
    text:"From a small computer-training operation...",
    img:"https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"...to building businesses that expanded beyond The Gambia.",
    img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
  },
  {
    type:"final",
    text:"What can <em>YOU</em> build from a small idea? <span class=\"flag\">🇬🇲</span>",
    img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80"
  }
  // Example of a local repo image instead of a URL:
  // { type:"statement", text:"Example local image.", img:"founder-portrait.jpg" }
];
