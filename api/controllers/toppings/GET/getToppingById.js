import Topping from "../../../model/topping.js";

export const getToppingById = async (req, res) => {
  try {
    const { id } = req.params;
    const Toppings = await Topping.findById(id);
    if (Toppings.name) {
      res.json(Toppings);
    } else {
      res.status(404).send("Toppings doesn't exist");
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
