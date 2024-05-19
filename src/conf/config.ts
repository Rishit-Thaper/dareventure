export const config = {
  DB_URL: String(process.env.NEXT_PUBLIC_DB_URL),
  DB_NAME: String(process.env.NEXT_PUBLIC_DB_NAME),
};
export function randomCreatorId() {
  const characters = 'abcdefghijklmnopqrstuvwxyz123456789';
  let id = '';
  const charactersLength = characters.length;

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    id += characters[randomIndex];
  }

  return id;
}