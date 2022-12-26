import Filling from "../../../model/filling.js";

export const getAllFillings = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const Fillings = await Filling.find({
        name: new RegExp(".*" + name + ".*", "i"),
      });
      if (Fillings[0]) {
        res.json(Fillings);
      } else {
        res.status(404).send("Fillings not found");
      }
    } else {
      const Fillings = await Filling.find()
      if (Fillings[0]) {
        res.json(Fillings);
      } else {
        res.status(404).send("Fillings doesn't exist");
      }
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
