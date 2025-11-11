import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }
    alert(`Logged in as: ${email}`);
  }

  return (
    <div style={styles.container}>
      <h2>🔐 Login</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div style={styles.passwordBox}>
        <input
          style={{ ...styles.input, flex: 1 }}
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={styles.showBtn}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button style={styles.loginBtn} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "60px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #ccc",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #aaa",
    fontSize: "16px",
  },
  passwordBox: {
    display: "flex",
    alignItems: "center",
  },
  showBtn: {
    marginLeft: "8px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    background: "#0076FF",
    color: "white",
    border: "none"
  }
}