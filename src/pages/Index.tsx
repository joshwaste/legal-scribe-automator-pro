import { useState } from 'react';
import Header from '@/components/Header';
import PetitionPanel from '@/components/PetitionPanel';
import ChatPanel from '@/components/ChatPanel';
import FileUpload from '@/components/FileUpload';

const Index = () => {
  const [petitionContent, setPetitionContent] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handlePetitionGenerated = (content: string) => {
    setPetitionContent(content);
  };

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
    // In a real app, you would process these files with OCR
    console.log('Files uploaded:', files);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="flex h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col">
          <PetitionPanel petitionContent={petitionContent} />
          <FileUpload onFilesUploaded={handleFilesUploaded} />
        </div>
        
        <ChatPanel onPetitionGenerated={handlePetitionGenerated} />
      </div>
    </div>
  );
};

export default Index;