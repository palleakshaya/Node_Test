import express from "express";
// import cors from "cors";
import { addingUsersC, getAllUsersC } from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
// import { getMovieByIdC } from "./getMovieByIdC.js";

const router = express.Router();

router.get("/", getAllUsersC);
// router.get("/", getUsersByUsernameC); //signup
// router.put("/:id", updateMovieByIdC);
router.post("/signup", addingUsersC);

// router.post("/login", auth, loginUsersC);

// router.delete("/:id", deleteMovieByIdC);

export default router;
