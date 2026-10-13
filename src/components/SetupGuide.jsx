import "../styles/SetupGuide.css";

function SetupGuide({
  isOpen,
  onClose,
  language,
}) {
  if (!isOpen) return null;

  return (
    <div className="setup-overlay">

      <div className="setup-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✖
        </button>

        <h1>🚀 Get Your PC Ready</h1>

        {language === "java" && (
          <>
            <h2>☕ Java Setup</h2>

            <ul>
              <li>✅ Install JDK 21 or later</li>
              <li>✅ Install VS Code</li>
              <li>✅ Install "Extension Pack for Java"</li>
              <li>✅ Check installation using:</li>
            </ul>

            <pre>
{`java -version
javac -version`}
            </pre>

            <h2>▶ Compile</h2>

            <pre>{`javac Main.java`}</pre>

            <h2>▶ Run</h2>

            <pre>{`java Main`}</pre>

            <h2>📌 Remember</h2>

            <ul>
              <li>Every statement ends with ;</li>
              <li>Java is case-sensitive.</li>
              <li>Filename must match the class name.</li>
              <li>Program starts from main().</li>
            </ul>
          </>
        )}

        {language === "cpp" && (
          <>
            <h2>⚙️ C++ Setup</h2>

            <ul>
              <li>✅ Install MinGW (Windows)</li>
              <li>✅ Install VS Code</li>
              <li>✅ Install C/C++ Extension</li>
              <li>✅ Verify installation:</li>
            </ul>

            <pre>{`g++ --version`}</pre>

            <h2>▶ Compile</h2>

            <pre>{`g++ main.cpp -o main`}</pre>

            <h2>▶ Run</h2>

            <pre>{`main.exe   (Windows)
./main     (Linux)`}</pre>

            <h2>📌 Remember</h2>

            <ul>
              <li>Every statement ends with ;</li>
              <li>Program starts from main().</li>
              <li>Use #include &lt;iostream&gt;.</li>
            </ul>
          </>
        )}

        {language === "python" && (
          <>
            <h2>🐍 Python Setup</h2>

            <ul>
              <li>✅ Install Python 3 or the </li>
              <li>✅ Install VS Code</li>
              <li>✅ Install Python Extension</li>
              <li>✅ Verify installation:</li>
            </ul>

            <pre>{`python --version`}</pre>

            <h2>▶ Run</h2>

            <pre>{`python main.py`}</pre>

            <h2>📌 Remember</h2>

            <ul>
              <li>No semicolon required.</li>
              <li>Indentation is mandatory.</li>
              <li>Python is case-sensitive.</li>
            </ul>
          </>
        )}

      </div>

    </div>
  );
}

export default SetupGuide;