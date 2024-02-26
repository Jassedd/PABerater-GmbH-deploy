import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [preferences, setPreferences] = useState({
    functional: true,
    statistics: false,
    marketing: false,
  });

  const handleSavePreferences = () => {
    // Aquí iría la lógica para guardar las preferencias de cookies
    console.log('Preferencias guardadas:', preferences);
    // Simplemente estoy imprimiendo las preferencias en la consola para este ejemplo
    // Deberías implementar la lógica para guardar estas preferencias en tu aplicación
  };

  const handleChange = (category) => {
    setPreferences({
      ...preferences,
      [category]: !preferences[category],
    });
  };

  useEffect(() => {
    // Aquí podrías agregar la lógica para mostrar la ventana emergente la primera vez que se visita el sitio
  }, []);

  return (
    <div className="cookie-consent">
      <h2>Consentimiento de Cookies</h2>
      <p>
        Esta página web utiliza cookies para mejorar tu experiencia. Por favor, selecciona tus preferencias de cookies a continuación:
      </p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={preferences.functional}
            onChange={() => handleChange('functional')}
          />
          Funcional
        </label>
        <label>
          <input
            type="checkbox"
            checked={preferences.statistics}
            onChange={() => handleChange('statistics')}
          />
          Estadísticas
        </label>
        <label>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={() => handleChange('marketing')}
          />
          Marketing
        </label>
      </div>
      <button onClick={handleSavePreferences}>Guardar preferencias</button>
    </div>
  );
};

export default CookieConsent;
