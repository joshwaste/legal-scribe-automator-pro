import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

interface PetitionPanelProps {
  petitionContent: string;
}

const PetitionPanel = ({ petitionContent }: PetitionPanelProps) => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-legal-gold mb-4">
          WELCOME TO LAWGORITHM
        </h1>
        <p className="text-legal-text-muted text-lg">
          Your one-stop solution for all your legal needs
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-legal-text-primary">
          Your Generated Petition Here
        </h2>
        
        <Card className="min-h-[400px] bg-legal-card border-legal-border p-6">
          <div className="h-full">
            {petitionContent ? (
              <div className="text-legal-text-primary whitespace-pre-wrap">
                {petitionContent}
              </div>
            ) : (
              <div className="text-legal-text-muted font-mono text-sm leading-relaxed">
                Your generated petition will appear here once you submit your legal query through the chatbot. Our AI will analyze your requirements and create a comprehensive legal document tailored to your specific needs.
              </div>
            )}
          </div>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button 
            variant="destructive" 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            <Download className="w-4 h-4 mr-2" />
            Save as PDF
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            <FileText className="w-4 h-4 mr-2" />
            Save as DOC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetitionPanel;