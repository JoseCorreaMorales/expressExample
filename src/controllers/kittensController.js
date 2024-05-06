import db from '../config/bd.js';

export const getAllKittens = (req, res) => {
  const q = "SELECT * FROM kittens";
  db.query(q, (err, data) => {
    if (err) return res.json({message : err});
    return res.json(data);
  });
};