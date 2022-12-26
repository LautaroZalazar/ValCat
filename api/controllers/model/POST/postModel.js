import Model from "../../../model/models.js";

export const postModel = async (req, res) => {
  try {
    const { body } = req;
    const cake = await Model.create(body);
    res.json(cake);
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
