import Model from "../../../model/models.js";

export const getModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const Models = await Model.findById(id);
    if (Models.name) {
      res.json(Models);
    } else {
      res.status(404).send("Models doesn't exist");
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
