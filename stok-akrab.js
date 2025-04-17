export default async function handler(req, res) {
  const username = "alekardiansyah418@gmail.com";
  const password = "ardistore";
  const hesdaKey = "glAle03l0kmRyAh418";

  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  try {
    const response = await fetch(`https://api.hesda-store.com/v2/cek_stok_akrab?hesdastore=${hesdaKey}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`
      }
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ status: false, message: "Error fetching from Hesda API", error: error.message });
  }
}