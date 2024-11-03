import React, { useState } from 'react';

const FenerbahceApp = () => {
  const [result, setResult] = useState({
    text: "Şampiyonluk yılını öğrenmek için butona basın!",
    year: null,
    isFirstPrediction: true
  });

  const handleClick = () => {
    const randomYear = Math.floor(Math.random() * (2050 - 2025 + 1)) + 2025;
    setResult({
      text: "FENERBAHÇEMIZ",
      year: randomYear,
      isFirstPrediction: false
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="w-full aspect-[9/16] bg-gray-100 rounded-3xl overflow-hidden shadow-inner relative">
          {/* Status bar */}
          <div className="h-6 bg-gray-200 flex justify-between items-center px-4">
            <span className="text-xs">9:41</span>
            <div className="flex space-x-1">
              <span className="text-xs">📶</span>
              <span className="text-xs">🔋</span>
            </div>
          </div>
          
          {/* App content */}
          <div className="flex flex-col items-center justify-center h-full p-6">
            <div className="text-center mb-8 space-y-4">
              {result.year ? (
                <>
                  <p className="text-3xl font-bold text-yellow-500">{result.text}</p>
                  <p className="text-6xl font-bold text-blue-600">{result.year}</p>
                  <p className="text-lg font-medium text-gray-800">yılında şampiyon olacak! 💛💙</p>
                </>
              ) : (
                <p className="text-lg font-medium text-gray-800">{result.text}</p>
              )}
            </div>
            
            <button
              onClick={handleClick}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition-colors"
            >
              {result.isFirstPrediction ? 'Şampiyonluk Yılını Tahmin Et' : 'Tekrar Tahmin Et'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FenerbahceApp;
