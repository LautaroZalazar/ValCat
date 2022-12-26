import Topping from '../../../model/topping.js'

export const deleteToppingById = async (req, res) => {
  let { id } = req.params;

  try {
    let deleteTopping = await Topping.findByIdAndDelete(id);

    if (deleteTopping) {
      res.status(200).send(`Topping with the ID: ${id} was delete`);
    } else {
      res.status(404).send("The Topping don't was deleted");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};