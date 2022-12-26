import Filling from "../../../model/filling.js";

export const postFilling = async (req, res) => {
  try {
    const { body } = req;
    const cake = await Filling.create(body);
    res.json(cake);
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
