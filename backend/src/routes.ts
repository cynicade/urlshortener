import { Router } from "express";
import getShortened from "./getShortened";
import getOriginal from "./getOriginal";

export const router = Router();

// ping route to check if the backend is up
router.get("/ping", (_, res) => {
  res
    .send(
      JSON.stringify({
        message: "pong!",
      })
    )
    .status(200);
});

// post long urls and get a shortened url back
router.post("/new", async (req, res) => {
  // get a new shortened url or find an already existing one in the database
  let shortened = await getShortened(req.body.url);

  if (shortened) {
    res
      .send(
        JSON.stringify({
          url: `cynicade.xyz/urls/api/${shortened}`,
        })
      )
      .status(200);
  } else {
    // something went wrong
    // TODO: better error handling and information
    res.sendStatus(500);
  }
});

// whenever someone tries to access a shortened url, redirect them
router.get("/:id", async (req, res) => {
  const original = await getOriginal(req.params.id);

  if (original) {
    res.redirect(original);
  } else {
    res.redirect("https://cynicade.xyz/urls/404");
  }
});
