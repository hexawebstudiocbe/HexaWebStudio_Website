export function validateContactRequest(data) {
  if (!data) {
    return { valid: false, error: "Empty request body" };
  }
  
  if (typeof data.name !== "string" || !data.name.trim()) {
    return { valid: false, error: "Name is required" };
  }
  
  if (typeof data.email !== "string" || !data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
    return { valid: false, error: "A valid email is required" };
  }
  
  if (typeof data.phone !== "string" || !data.phone.trim()) {
    return { valid: false, error: "Phone number is required" };
  }
  
  if (typeof data.message !== "string" || !data.message.trim()) {
    return { valid: false, error: "Message is required" };
  }
  
  return { valid: true };
}
