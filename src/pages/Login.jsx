import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Login.css";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // Get student document using username
      const studentRef = doc(db, "students", username);
      const studentSnap = await getDoc(studentRef);

      // Username not found
      if (!studentSnap.exists()) {
        alert("❌ Username not found");
        return;
      }

      const student = studentSnap.data();
      console.log("Firestore password:", student.password);
console.log("Typed password:", password);
      // Password incorrect
      if (student.password !== password) {
        alert("❌ Incorrect Password");
        return;
      }

      // Save student locally
      localStorage.setItem(
        "student",
        JSON.stringify(student)
      );

      // Login Successful
alert(`🎉 Welcome ${student.name}`);

if (!student.language) {
  // New student → choose language
  navigate("/choose-language");
} else {
  // Existing student → continue normally
  navigate("/welcome");
}

    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>「 ✦ DEEP ✦ 」</h1>

      <p>
   Learn. Grow. Succeed.
  <br />
  Technical & Professional Skills for Students
  
</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;
