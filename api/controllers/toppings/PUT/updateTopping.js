import Topping from '../../../model/topping.js'

export const updateTopping = async (req, res) => {
  let { id } = req.params;
  const { body } = req;

  try {
    let updateTopping = await Topping.findByIdAndUpdate(
      id,
      body
    );
    if (updateTopping) {
      res.status(200).send(`Topping with the ID: ${id} was update`);
    } else {
      res.status(404).send(`The topping could not be updated`);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};