import "../styles/MentorSupportButton.css";
function MentorSupport() {

  const handleClick = () => {

    window.location.href =
      "mailto:deepak2911001@gmail.com?subject=Alaporan Tamilan - Mentor Support&body=Hello Sir,%0D%0A%0D%0AI need help regarding:%0D%0A%0D%0ATopic:%0D%0AQuestion:%0D%0AMy Doubt:%0D%0A%0D%0AThank You.";

  };

  return (

    <button
      className="mentor-btn"
      onClick={handleClick}
    >
      💬 Mentor Support
    </button>

  );

}

export default MentorSupport;