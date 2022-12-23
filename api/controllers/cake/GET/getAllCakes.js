import Cake from "../../../model/cake.js";

export const getAllCakes = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const cakes = await Cake.find({
        name: new RegExp(".*" + name + ".*", "i"),
      })
        .populate({ path: "model" })
        .populate({ path: "filling" })
        .populate({ path: "topping" });
      if (cakes[0]) {
        res.json(cakes);
      } else {
        res.status(404).send("Cakes not found");
      }
    } else {
      const cakes = await Cake.find()
        .populate({ path: "model" })
        .populate({ path: "filling" })
        .populate({ path: "topping" });
      if (cakes[0]) {
        res.json(cakes);
      } else {
        res.status(404).send("Cakes doesn't exist");
      }
    }
  } catch (error) {
    res.send("Error: ", error.message);
  }
};
