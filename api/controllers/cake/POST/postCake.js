import Cake from "../../../model/cake.js";

export const postCake = async (req, res) => {
  try {
    const { body } = req;
    const cake = await Cake.create(body);
    res.json(cake);
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
