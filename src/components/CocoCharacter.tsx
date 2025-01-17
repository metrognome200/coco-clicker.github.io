import { useState } from 'react';

interface CocoCharacterProps {
  onClick: () => void;
}

const CocoCharacter = ({ onClick }: CocoCharacterProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 100);
  };

  return (
    <div className="flex justify-center items-center p-8">
      <button
        onClick={handleClick}
        className={`w-48 h-48 bg-orange-400 rounded-full shadow-lg transition-transform ${
          isClicked ? 'scale-95' : 'hover:scale-105'
        }`}
      >
        <div className="text-6xl">🥥</div>
        <div className="text-white font-bold mt-2">COCO</div>
      </button>
    </div>
  );
};

export default CocoCharacter;