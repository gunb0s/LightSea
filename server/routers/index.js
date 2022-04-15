import express from "express";
import createRouter from "./create.js";
import nftRouter from "./nfts.js";
import assetRouter from "./asset.js";
import accountRouter from "./account.js";
import txRouter from "./tx.js";
import balanceRouter from "./balance.js";
import regsiterRouter from "./register.js";

const router = express.Router();

router.use("/create", createRouter);
router.use("/nfts", nftRouter);
router.use("/asset", assetRouter);
router.use("/account", accountRouter);
router.use("/balance", balanceRouter);
router.use("/tx", txRouter);
router.use("/register", regsiterRouter);

export default router;
