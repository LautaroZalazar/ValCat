import Model from '../../../model/models.js'

export const updateModel = async (req, res) => {
  let { id } = req.params;
  const { body } = req;

  try {
    let updateModel = await Model.findByIdAndUpdate(
      id,
      body
    );
    if (updateModel) {
      res.status(200).send(`Model with the ID: ${id} was update`);
    } else {
      res.status(404).send(`The model could not be updated`);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};