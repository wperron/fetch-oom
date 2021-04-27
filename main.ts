const req = new Request("https://example.org");
const init = {
  method: "GET",
};
req.headers.set("foo", "bar");
const res = await fetch(req, init);
