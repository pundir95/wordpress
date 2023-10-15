import type { NextApiRequest, NextApiResponse } from 'next'

type responseData={
    suggestions:object,
    success:boolean
}

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<responseData>
) {
   // Predefined lists of words for generating site names
const adjectives = ["Awesome", "Amazing", "Creative", "Fantastic", "Epic"];
const nouns = ["Website", "Page", "Portal", "Hub", "Platform"]; 

function generateRandomSiteName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    return `${randomAdjective} ${randomNoun}`;
  }
let websiteName=generateRandomSiteName()
let responseData:responseData={
    suggestions:[{title:websiteName}],
    success:true
}
  res.status(200).json(responseData)
}
