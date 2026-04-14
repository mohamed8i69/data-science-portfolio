import { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isUploaded, setIsUploaded] = useState(false);

  // Load CV status from localStorage on mount
  useEffect(() => {
    const savedFileName = localStorage.getItem("portfolio_cv_name");
    if (savedFileName) {
      setFileName(savedFileName);
      setIsUploaded(true);
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
        setFileName(cvFile.name);
        setIsUploaded(true);
        setCvFile(null);
        alert("✅ CV uploaded successfully!");
        
        // Close panel after 1 second
        setTimeout(() => setIsOpen(false), 1000);
      };
      reader.readAsDataURL(cvFile);
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("❌ Error uploading CV");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>🔐 Admin - Upload CV</span>
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
            {isUploaded ? (
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
              Upload CV File
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

          {/* Instructions */}
          <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700">💡 Instructions:</p>
            <p>• Select PDF, DOC, or DOCX file</p>
            <p>• Click Upload CV</p>
            <p>• Visitors can download from the portfolio</p>
            <p>• Press <strong>Ctrl + Shift + A</strong> to open this panel anytime</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
