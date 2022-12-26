import Topping from "../../../model/topping.js";

export const getAllToppings = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const Toppings = await Topping.find({
        name: new RegExp(".*" + name + ".*", "i"),
      });
      if (Toppings[0]) {
        res.json(Toppings);
      } else {
        res.status(404).send("Toppings not found");
      }
    } else {
      const Toppings = await Topping.find();
      if (Toppings[0]) {
        res.json(Toppings);
      } else {
        res.status(404).send("Toppings doesn't exist");
      }
    }
  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
};
