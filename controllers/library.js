import StudentList from "../models/student.js";

export const getLibData = async (req, res) => {
  try {
    const data = await StudentList.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getLibDataById = async (req, res) => {
  try {
    const { SIC } = req.params.SIC;
    const data = await StudentList.findOne({ SIC });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateLibDataById = async (req, res) => {
  try {
    const { SIC } = req.params.SIC;
    const newData = req.body;

    const updatedData = await StudentList.findByIdAndUpdate(SIC, newData, {
      new: true,
    });

    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
