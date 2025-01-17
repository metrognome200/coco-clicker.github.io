interface GameStatsProps {
  cocoBalance: number;
  clickPower: number;
  autoClickRate: number;
}

const GameStats = ({ cocoBalance, clickPower, autoClickRate }: GameStatsProps) => {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 text-white">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">COCO Balance</h3>
          <p className="text-2xl">{cocoBalance.toFixed(0)}</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Click Power</h3>
          <p className="text-2xl">x{clickPower}</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Auto COCO/s</h3>
          <p className="text-2xl">{autoClickRate}/s</p>
        </div>
      </div>
    </div>
  );
};

export default GameStats;