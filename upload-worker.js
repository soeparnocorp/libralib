export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/upload" && request.method === "POST") {
      const form = await request.formData();
      const file = form.get("pdf");
      const user = form.get("user") || "anon";
      const key = `${user}/${Date.now()}-${file.name}`;
      await env.LIBRARY_BUCKET.put(key, file.stream());
      const pdfUrl = `https://pub-xxxxx.r2.dev/libra-books/${key}`;
      return Response.json({ success: true, url: pdfUrl });
    }
    return new Response("ok");
  }
}
