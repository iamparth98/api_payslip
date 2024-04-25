import bcrypt from "bcrypt";
import { client } from "../db/db.js";

export const Login = (req, res) => {
  q = "select * from admin where email = $1";
  client.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    bcrypt.compareSync(req.body.password);
  });
};
export const Register = async (req, res) => {
  // check if user exists
  const q = "select * from admin where email= $1 ";
  client.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.rows.length) return res.status(409).json("user already exists");

    // hash password

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);
    //insert into db
    const q = "insert into admin(name,email,password) Values ($1, $2, $3)";
    client.query(q, [req.body.name, req.body.email, hashPass], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("admin created successfuly");
    });
  });
};
export const Logout = (req, res) => {
  res.end("Logout");
};
