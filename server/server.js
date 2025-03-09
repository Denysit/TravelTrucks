import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/catalog", async (req, res) => {
  try {
    const { location, AC, transmission, kitchen, TV, bathroom, form } =
      req.query;
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    let campers = response.data.items;

    if (location) {
      const [country, city] = location
        .split(",")
        .map((item) => item.trim().toLowerCase());

      campers = campers.filter((camper) => {
        const camperLocation = camper.location.toLowerCase();
        return (
          camperLocation.includes(country) && camperLocation.includes(city)
        );
      });
      if (campers.length === 0) {
        return res.status(404).json({ message: "No campers found." });
      }
    }

    if (AC) {
      const ACBool = AC === "true";
      campers = campers.filter((camper) => camper.AC === ACBool);
    }

    if (transmission) {
      campers = campers.filter(
        (camper) =>
          camper.transmission.toLowerCase() === transmission.toLowerCase()
      );
    }

    if (kitchen) {
      const kitchenBool = kitchen === "true";
      campers = campers.filter((camper) => camper.kitchen === kitchenBool);
    }

    if (TV) {
      const TVBool = TV === "true";
      campers = campers.filter((camper) => camper.TV === TVBool);
    }

    if (bathroom) {
      const bathroomBool = bathroom === "true";
      campers = campers.filter((camper) => camper.bathroom === bathroomBool);
    }

    if (form) {
      const formValue = form.trim().toLowerCase();
      campers = campers.filter(
        (camper) => camper.form.toLowerCase() === formValue
      );
    }

    res.status(200).json(campers);
  } catch (error) {
    console.log("Error fetching campers:", error);
    res.status(500).json({ message: "Error fetching campers" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
