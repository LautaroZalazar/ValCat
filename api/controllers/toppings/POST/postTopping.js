import Topping from "../../../model/topping.js";

export const postTopping = async (req, res) => {
  try {
    const { body } = req;
    const cake = await Topping.create(body);
    res.json(cake);
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
