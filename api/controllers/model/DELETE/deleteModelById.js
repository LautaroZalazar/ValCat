import Model from '../../../model/models.js'

export const deleteModelById = async (req, res) => {
  let { id } = req.params;

  try {
    let deleteModel = await Model.findByIdAndDelete(id);

    if (deleteModel) {
      res.status(200).send(`Model with the ID: ${id} was delete`);
    } else {
      res.status(404).send("The Model don't was deleted");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};