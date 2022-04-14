import express from "express";
import createRouter from "./create.js";
import nftRouter from "./nfts.js";
import assetRouter from "./asset.js";
import accountRouter from "./account.js";
import txRouter from "./tx.js";

const router = express.Router();

router.use("/create", createRouter);
router.use("/nfts", nftRouter);
router.use("/asset", assetRouter);
router.use("/account", accountRouter);
router.use("/tx", txRouter);

export default router;
