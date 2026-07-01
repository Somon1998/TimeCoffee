export function buildTelegramUrl(username: string, message: string): string {
  const cleanUsername = username.replace("@", "");
  return `https://t.me/${cleanUsername}?text=${encodeURIComponent(message)}`;
}
