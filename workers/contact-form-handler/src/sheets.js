export async function saveToGoogleSheets(data, env) {
  try {
    const payload = {
      token: env.AUTH_TOKEN,
      data: {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        businessName: (data.businessName || "").trim(),
        message: data.message.trim(),
      },
    };

    const response = await fetch(env.APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, error: `HTTP error! status: ${response.status}` };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { 
      success: false, 
      error: error.message || "Failed to forward request to Google Sheets script." 
    };
  }
}
