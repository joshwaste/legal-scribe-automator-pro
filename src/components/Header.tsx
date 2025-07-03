import { Scale } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-legal-border bg-background">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-legal-gold rounded flex items-center justify-center">
          <Scale className="w-5 h-5 text-legal-dark" />
        </div>
        <h1 className="text-2xl font-bold text-legal-gold tracking-wider">
          LAWGORITHM
        </h1>
      </div>
      
      <div className="w-10 h-10 bg-legal-card border border-legal-border rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-legal-gold rounded-full flex items-center justify-center">
          <span className="text-legal-dark text-xs font-bold">?</span>
        </div>
      </div>
    </header>
  );
};

export default Header;