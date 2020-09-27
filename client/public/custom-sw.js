self.addEventListener("push", (event) => {
  const data = event.data.json();
  const options = {
    title: data.title,
    body: data.message,
    image: data.image,
    icon: data.icon,
    badge: data.badge,
    image: data.image,
    ttl: data.ttl,
    data: { url: data.data.url },
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  clients.openWindow(e.notification.data.url);
});
