import Model from "../../../model/models.js";

export const getAllModels = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const Models = await Model.find({
        name: new RegExp(".*" + name + ".*", "i"),
      });
      if (Models[0]) {
        res.json(Models);
      } else {
        res.status(404).send("Models not found");
      }
    } else {
      const Models = await Model.find()
      if (Models[0]) {
        res.json(Models);
      } else {
        res.status(404).send("Models doesn't exist");
      }
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
