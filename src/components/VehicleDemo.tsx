import React, { useState } from 'react';

// 1. Interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
    console.log(`${this.make} ${this.model} (${this.year}) is ready to go! 🚗`);
  }
}

// Component React
export const VehicleDemo: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  const myCar = new Car("Toyota", "Corolla", 2023);

  const handleStart = () => {
    myCar.start();
    
    setLogs([
      "🔧 Car engine started",
      `✅ ${myCar.make} ${myCar.model} (${myCar.year}) is ready!`
    ]);
    setIsStarted(true);

    setTimeout(() => {
      setIsStarted(false);
      setLogs([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🚗 TypeScript Checkpoint
          </h1>
          <p className="text-xl text-gray-600">
            Interface Vehicle + Classe Car
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Informations du véhicule</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-80 mb-1">Marque</p>
                <p className="text-2xl font-bold">{myCar.make}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-80 mb-1">Modèle</p>
                <p className="text-2xl font-bold">{myCar.model}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm opacity-80 mb-1">Année</p>
                <p className="text-2xl font-bold">{myCar.year}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-6">
              <button
                onClick={handleStart}
                disabled={isStarted}
                className={`
                  px-8 py-4 rounded-xl text-xl font-bold
                  transform transition-all duration-200
                  ${isStarted 
                    ? 'bg-green-500 scale-95 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
                  }
                  text-white shadow-lg
                `}
              >
                {isStarted ? '✅ Moteur démarré !' : '🔑 Démarrer'}
              </button>
            </div>

            {logs.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono">
                <p className="text-xs text-gray-500 mb-2">Console Output:</p>
                {logs.map((log, index) => (
                  <p key={index} className="mb-1">
                    &gt; {log}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-8 border-t">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📝 Code TypeScript
            </h3>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
{`interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2023);
myCar.start();`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            ✅ Checkpoint Requirements:
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>✓ Interface Vehicle avec make, model, year, start()</li>
            <li>✓ Classe Car qui implémente Vehicle</li>
            <li>✓ Constructor pour initialiser les propriétés</li>
            <li>✓ Méthode start() qui log "Car engine started"</li>
            <li>✓ Instance de Car avec des valeurs</li>
            <li>✓ Appel de la méthode start()</li>
          </ul>
        </div>
      </div>
    </div>
  );
};