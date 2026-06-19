import { useNavigate } from "react-router-dom";

function FileUpload() {
  const navigate = useNavigate();

  const handleUpload = () => {
    alert("ID Proof Uploaded Successfully!");

    navigate("/confirmation");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📂 Upload ID Proof</h1>

      <input type="file" />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload & Continue
      </button>
    </div>
  );
}

export default FileUpload;