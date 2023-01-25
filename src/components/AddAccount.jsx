import React, { useEffect, useState } from "react";
import "./addaccount.scss";
import { auth, db } from "../firebase";
import { getDatabase, ref, child, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
const AddAccount = () => {
  const [data, setData] = useState({});
  const [dep, setDep] = useState("Plumbing");
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log(dep);
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(data.email);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      setStatus("Account created successfully");

      // await setDoc(doc(db, "users", res.user.uid), {
      //   ...data,
      //   timeStamp: serverTimestamp(),
      // });
      set(ref(db, `Staff/${dep}/${res.user.uid}`), {
        name: "Name will be provided",
      });
      set(ref(db, `StaffKey/${res.user.uid}`), {
        department: dep,
        userId: res.user.uid,
      });
    } catch (err) {
      setStatus("Please check the db befor another click");
      console.log(err);
    }
  };

  const handleDropDown = (e) => {
    setDep(e.target.value);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(value);
    setData({ ...data, [id]: value });
  };

  return (
    <div className="addAccountContainer">
      <div className="formContainer">
        <form onSubmit={handleAdd}>
          <div className="formInput">
            <input
              type="email"
              id="email"
              placeholder="Enter email id"
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              id="password"
              placeholder="Enter password"
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={(e) => handleInput(e)}
            />

            <select value={dep} onChange={handleDropDown}>
              <option value="Plumbing">Plumbing</option>
              <option value="Food">Food</option>
              <option value="Cleanliness">Cleanliness</option>
              <option value="Water">Water</option>
            </select>
          </div>
          <button type="submit">send</button>
        </form>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default AddAccount;
