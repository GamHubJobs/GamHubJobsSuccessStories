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
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFV5-7uIurMHxfz1v3I09U8_DyEBNp2iHGDWrjcPckgW76TYFY2t-_uE&s=10"
  },
  {
    type:"narrative",
    text:"In the late 1990s, a simple question changed his life.",
    img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnJGFoFJyiW-MpwKQ10aQnkzOXWa_HizrK6zK0TI1lqjZIpihLtc9qxEEr4muQt7zH5wTqlkgSMGZ1HGhA5GmhOcYkzGM3w2Wj00TECiqj7elkzvL8sGlELegAo_bWaEwRnsnqnHSVeVI/s1600/muhammed+jah-s.jpg"
  },
  {
    type:"narrative",
    text:"Why was someone coming all the way from Europe to teach Gambians how to use a computer?",
    img:"https://africanshapers.com/wp-content/uploads/2018/08/MJa3.jpg"
  },
  {
    type:"statement",
    text:"He saw an opportunity.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknE1Ez_ZXwthuJLcG5p58cq3_inUSlpdgyXFFryHmRLu9kia3ss-6oRM&s=10"
  },
  {
    type:"statement",
    text:"So he started teaching people computing.",
    img:"https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
  },
  {
    type:"statement",
    text:"That small idea became QuantumNet.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEt8JfIPXJ7lZWq3Goxv46w-vfyYekjvZghOLwoa78FUwJLBKT7_SV81-&s=10"
  },
  {
    type:"narrative",
    text:"Then came telecommunications...",
    img:"https://theciotimes.com/wp-content/uploads/2021/03/TELECOM1.jpg"
  },
  {
    type:"statement",
    text:"QCell.",
    img:"https://gamjobs.com/wp-content/uploads/2024/08/logo-200x200.jpg"
  },
  {
    type:"narrative",
    text:"And eventually, an <span class=\"highlight\">entire business ecosystem, Q-GROUP</span>.",
    img:"https://qanet.gm/storage/slider/the-qgroup-2025-08-26-68acc43143db0.jpg"
  },
  {
    type:"statement",
    text:"From a small computer-training operation...",
    img:"https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
  },
  {
    type:"narrative",
    text:"...to building businesses that expanded beyond The Gambia.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEsBL-1umi3zCqgM9_R95O46inh0xBniTOJDLYYd7iNT-TmTrvZZxhn8&s=10"
  },
  {
    type:"final",
    text:"What can <em>YOU</em> build from a small idea? <span class=\"flag\">🇬🇲</span>",
    img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80"
  }
  // Example of a local repo image instead of a URL:
  // { type:"statement", text:"Example local image.", img:"founder-portrait.jpg" }
];
