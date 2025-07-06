
function downloadResume() {
    const link = document.createElement("a");
    link.href = "Rolly_resume.pdf"; // Replace with your actual resume path
    link.download = "Rolly_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  