import React, { useState } from 'react';

import Notification from './Notification';
import theNotifications from './notifications';

function App() {
  const [notifications, setNotifications] = useState(theNotifications);

  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <h2>You have {notifications.length} notification(s)</h2>

      <button className="clear-all" onClick={clearAllNotifications}>Clear All Notfifications</button>

      <div className="notifications">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            notification={notification}
            onClear={clearNotification}
          />
        ))}
      </div>
    </div>
  );
}

export default App;