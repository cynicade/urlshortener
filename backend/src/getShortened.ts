import Url from "./model";

// generates a pseudorandom 5 character string (alphanumeric)
function generateRandomString(): string {
  return (Math.random() + 1).toString(36).substring(7);
}

// shortens the long url and writes it to the database
// returns the shortened url (the shortened "ID")
async function shorten(longUrl: string): Promise<string> {
  let shortId: string;
  // keep generating random IDs until we find one that isn't used
  do {
    shortId = generateRandomString();
  } while (await Url.findOne({ shortened: shortId }).exec());

  const url = new Url({
    original: longUrl,
    shortened: shortId,
  });

  await url.save();

  return shortId;
}

// returns the shortened "ID" if it exists in the database for the given long url
// makes a new shortened "ID" and returns that if not
export default async function getShortened(
  longUrl: string
): Promise<string | null> {
  let res = await Url.findOne({ original: longUrl }).exec();

  // if we found a matching url in the database
  if (res && res.shortened) return res.shortened;

  // if we didn't find a matching url
  return await shorten(longUrl);
}
