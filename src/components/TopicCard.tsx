import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TopicCardProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, isExpanded, onToggle }) => (
  <div className="bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <button
      onClick={onToggle}
      className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors duration-200 rounded-xl"
    >
      <span className="text-gray-800 font-semibold text-base sm:text-lg pr-4 leading-tight">{title}</span>
      {isExpanded ? (
        <ChevronUp className="text-emerald-600 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
      ) : (
        <ChevronDown className="text-emerald-600 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
      )}
    </button>
  </div>
);

export default TopicCard; 