import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', connected: true });

  const toggleConnection = () => {
    setUser(prev => ({ ...prev, connected: !prev.connected }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Profil utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>Status : {user.connected ? 'Connecté' : 'Déconnecté'}</p>
      <button onClick={toggleConnection}>
        {user.connected ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        "Bienvenue dans l'application !",
        'Nouveau message reçu',
        'Mise à jour disponible',
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Chargement des notifications...</p>;

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

function NotificationCounter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: 20 }}>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount(count + 1)}>Marquer une notification lue</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Réinitialiser
      </button>
    </div>
  );
}

function EX4() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial', padding: 20 }}>
        <h1>Mon Application React</h1>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </div>
    </UserProvider>
  );
}

export default EX4;
