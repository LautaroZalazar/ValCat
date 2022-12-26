import Filling from "../../../model/filling.js";

export const getFillingById = async (req, res) => {
  try {
    const { id } = req.params;
    const Fillings = await Filling.findById(id)
    if (Fillings.name) {
      res.json(Fillings);
    } else {
      res.status(404).send("Fillings doesn't exist");
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
