export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("Not allowed", { status: 405 });

    const raw = await request.text();
    let body; try { body = JSON.parse(raw); } catch { body = {}; }

    const gh = await fetch("https://api.github.com/repos/marketingcar/oasis/dispatches", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "oasis-ghost-relay"
      },
      body: JSON.stringify({
        event_type: "ghost_publish",
        client_payload: {
          received_at: new Date().toISOString(),
          ghost_event: body?.event || null,
          post_id: body?.post?.id || null,
          slug: body?.post?.slug || null
        }
      })
    });

    const respTxt = await gh.text();
    console.log("Ghost payload:", raw.slice(0, 2000));
    console.log("GitHub status:", gh.status, "resp:", respTxt.slice(0, 2000));

    if (!gh.ok) return new Response(`GitHub error ${gh.status}: ${respTxt}`, { status: 500 });
    return new Response("OK", { status: 200 });
  }
}
