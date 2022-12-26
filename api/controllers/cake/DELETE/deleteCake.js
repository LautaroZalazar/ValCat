import Cake from "../../../model/cake.js";

export const deleteCakeById = async (req, res) => {
  let { id } = req.params;

  try {
    let deleteCake = await Cake.findByIdAndDelete(id);

    if (deleteCake) {
      res.status(200).send(`Cake with the ID: ${id} was delete`);
    } else {
      res.status(404).send("The Cake don't was deleted");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
