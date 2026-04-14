import { useState, useEffect } from "react";
import { X, Upload, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvUrl, setCvUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  // Load CV from localStorage on mount
  useEffect(() => {
    const savedCvUrl = localStorage.getItem("portfolio_cv_url");
    const savedFileName = localStorage.getItem("portfolio_cv_name");
    if (savedCvUrl) {
      setCvUrl(savedCvUrl);
      setFileName(savedFileName || "CV.pdf");
    }
  }, []);

  // Listen for keyboard shortcut: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleUploadCV = async () => {
    if (!cvFile) {
      alert("Please select a file first");
      return;
    }

    try {
      // Convert file to base64 and store in localStorage
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        localStorage.setItem("portfolio_cv_url", base64String);
        localStorage.setItem("portfolio_cv_name", cvFile.name);
        setCvUrl(base64String);
        setFileName(cvFile.name);
        setCvFile(null);
        alert("CV uploaded successfully!");
      };
      reader.readAsDataURL(cvFile);
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("Error uploading CV");
    }
  };

  const handleDownloadCV = () => {
    if (!cvUrl) {
      alert("No CV uploaded yet");
      return;
    }

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeleteCV = () => {
    if (confirm("Are you sure you want to delete your CV?")) {
      localStorage.removeItem("portfolio_cv_url");
      localStorage.removeItem("portfolio_cv_name");
      setCvUrl("");
      setFileName("");
      alert("CV deleted successfully");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>🔐 Admin Panel - CV Manager</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="ml-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Current CV Status */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Current CV Status:
            </p>
            {cvUrl ? (
              <p className="text-sm text-blue-700">
                ✅ CV Uploaded: <strong>{fileName}</strong>
              </p>
            ) : (
              <p className="text-sm text-blue-700">❌ No CV uploaded yet</p>
            )}
          </div>

          {/* Upload Section */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Upload New CV
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {cvFile && (
              <p className="text-sm text-gray-600">
                Selected: <strong>{cvFile.name}</strong>
              </p>
            )}
            <Button
              onClick={handleUploadCV}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!cvFile}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload CV
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4 border-t">
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="w-full"
              disabled={!cvUrl}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              onClick={handleDeleteCV}
              variant="destructive"
              className="w-full"
              disabled={!cvUrl}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete CV
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700">💡 How to use:</p>
            <p>• Press <strong>Ctrl + Shift + A</strong> to open this panel</p>
            <p>• Upload your CV (PDF, DOC, DOCX)</p>
            <p>• Only you can access this panel</p>
            <p>• CV is stored locally in your browser</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
