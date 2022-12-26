import Filling from "../../../model/filling.js";

export const deleteFillingById = async (req, res) => {
  let { id } = req.params;

  try {
    let deleteFilling = await Filling.findByIdAndDelete(id);

    if (deleteFilling) {
      res.status(200).send(`Filling with the ID: ${id} was delete`);
    } else {
      res.status(404).send("The Filling don't was deleted");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};