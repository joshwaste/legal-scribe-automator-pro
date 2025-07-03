import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatPanelProps {
  onPetitionGenerated: (content: string) => void;
}

const ChatPanel = ({ onPetitionGenerated }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your legal assistant.\n\nPlease describe your legal needs and I\'ll help generate the appropriate petition for you.',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response (in real app, this would call your backend)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I understand your legal need. Let me generate a petition for you...',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      // Generate sample petition content
      const petitionContent = `PETITION FOR ${input.toUpperCase()}

TO THE HONORABLE COURT:

COMES NOW, the Petitioner, and respectfully submits this petition regarding: ${input}

BACKGROUND:
The petitioner hereby requests the court's consideration of the following matter...

LEGAL BASIS:
[Legal arguments and citations would be generated here based on your specific request]

PRAYER FOR RELIEF:
WHEREFORE, Petitioner respectfully requests that this Honorable Court:
1. Grant the relief requested herein
2. Award such other relief as the Court deems just and proper

Respectfully submitted,

_______________________
Petitioner

Date: ${new Date().toLocaleDateString()}`;

      onPetitionGenerated(petitionContent);
    }, 1500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="w-96 bg-legal-card border-l border-legal-border flex flex-col h-full">
      <div className="p-4 border-b border-legal-border">
        <h3 className="text-xl font-semibold text-legal-gold flex items-center gap-2">
          <Bot className="w-5 h-5" />
          Legal Assistant
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <Card className={`max-w-[80%] p-3 ${
              message.isUser 
                ? 'bg-legal-gold text-legal-dark' 
                : 'bg-legal-dark border-legal-border text-legal-text-primary'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-legal-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your text here"
            className="bg-legal-dark border-legal-border text-legal-text-primary placeholder:text-legal-text-muted"
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="bg-legal-gold hover:bg-legal-gold-bright text-legal-dark shadow-glow"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;