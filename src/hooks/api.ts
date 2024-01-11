// routes

export const getSongs = async () => {
  const response = await fetch(`${API_URL}/songs`);
  return await response.json();
}
