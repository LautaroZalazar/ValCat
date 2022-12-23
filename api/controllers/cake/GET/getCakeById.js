import Cake from "../../../model/cake.js";

export const getCakeById = async (req, res) => {
  try {
    const { id } = req.params;
    const cakes = await Cake.findById(id)
      .populate({ path: "model" })
      .populate({ path: "filling" })
      .populate({ path: "topping" });
    if (cakes.name) {
      res.json(cakes);
    } else {
      res.status(404).send("Cakes doesn't exist");
    }
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
