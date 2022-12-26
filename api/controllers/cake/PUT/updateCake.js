import Cake from '../../../model/cake.js'

export const updateCake = async (req, res) => {
  let { id } = req.params;
  const { body } = req;

  try {
    let updateCake = await Cake.findByIdAndUpdate(
      id,
      body
    );
    if (updateCake) {
      res.status(200).send(`Cake with the ID: ${id} was update`);
    } else {
      res.status(404).send(`The cake could not be updated`);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};