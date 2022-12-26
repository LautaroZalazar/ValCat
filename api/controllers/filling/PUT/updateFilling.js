import Filling from '../../../model/filling.js'

export const updateFilling = async (req, res) => {
  let { id } = req.params;
  const { body } = req;

  try {
    let updateFilling = await Filling.findByIdAndUpdate(
      id,
      body
    );
    if (updateFilling) {
      res.status(200).send(`Filling with the ID: ${id} was update`);
    } else {
      res.status(404).send(`The filling could not be updated`);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
