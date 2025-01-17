import { Button } from "@/components/ui/button";

interface UpgradeShopProps {
  cocoBalance: number;
  onPurchase: (type: 'clickPower' | 'autoClick', cost: number) => void;
}

const UpgradeShop = ({ cocoBalance, onPurchase }: UpgradeShopProps) => {
  const upgrades = [
    {
      name: 'Magic Wand',
      description: '2x Click Power',
      type: 'clickPower' as const,
      cost: 50,
    },
    {
      name: 'Garden Helper',
      description: '+1 COCO/s',
      type: 'autoClick' as const,
      cost: 100,
    },
  ];

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Upgrades</h2>
      <div className="space-y-4">
        {upgrades.map((upgrade) => (
          <div
            key={upgrade.name}
            className="bg-white/10 rounded-lg p-4 text-white"
          >
            <h3 className="font-semibold">{upgrade.name}</h3>
            <p className="text-sm opacity-80">{upgrade.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <span>{upgrade.cost} COCO</span>
              <Button
                onClick={() => onPurchase(upgrade.type, upgrade.cost)}
                disabled={cocoBalance < upgrade.cost}
                variant="secondary"
                className="hover:bg-purple-500"
              >
                Buy
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradeShop;