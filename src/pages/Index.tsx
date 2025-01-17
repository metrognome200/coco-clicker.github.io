import { useState, useEffect } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/useTonConnect';
import CocoCharacter from '../components/CocoCharacter';
import UpgradeShop from '../components/UpgradeShop';
import GameStats from '../components/GameStats';

const Index = () => {
  const { connected, wallet } = useTonConnect();
  const [cocoBalance, setCocoBalance] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickRate, setAutoClickRate] = useState(0);

  useEffect(() => {
    const autoClickInterval = setInterval(() => {
      if (autoClickRate > 0) {
        setCocoBalance(prev => prev + autoClickRate);
      }
    }, 1000);

    return () => clearInterval(autoClickInterval);
  }, [autoClickRate]);

  const handleClick = () => {
    setCocoBalance(prev => prev + clickPower);
  };

  const purchaseUpgrade = (type: 'clickPower' | 'autoClick', cost: number) => {
    if (cocoBalance >= cost) {
      setCocoBalance(prev => prev - cost);
      if (type === 'clickPower') {
        setClickPower(prev => prev * 2);
      } else {
        setAutoClickRate(prev => prev + 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-orange-400 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">COCO Clicker</h1>
          <TonConnectButton />
        </div>
        
        {connected && (
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-8">
            <p className="text-white">Wallet: {wallet?.address.slice(0, 6)}...{wallet?.address.slice(-4)}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CocoCharacter onClick={handleClick} />
            <GameStats 
              cocoBalance={cocoBalance} 
              clickPower={clickPower}
              autoClickRate={autoClickRate}
            />
          </div>
          <div>
            <UpgradeShop 
              cocoBalance={cocoBalance}
              onPurchase={purchaseUpgrade}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;