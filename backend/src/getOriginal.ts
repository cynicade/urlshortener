import Url from "./model";

// returns the original url or null if it's not in the database
export default async function getOriginal(
  shortId: string
): Promise<string | null> {
  const res = await Url.findOne({ shortened: shortId }).exec();

  // if we found a matching url in the database
  if (res && res.original) {
    const orig = res.original;

    // "normalize" url if needed
    const urlRe = new RegExp("https?://.*..*");

    if (urlRe.test(orig)) return orig;
    return `http://${orig}`;
  }

  // if we didn't find a matching url
  return null;
}
