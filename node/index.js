console.log("hello world!");
const { addPeople, getPeople } = require("./db-helper");

const http = require("http");

http
  .createServer(async (req, res) => {
    await addPeople();
    const html = await buildHtml(req);

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length,
      Expires: new Date().toUTCString(),
    });
    res.end(html);
  })
  .listen(3000);

const buildHtml = async (req) => {
  const header = "";
  let body = "<h1>Full Cycle Rocks!</h1><br />";
  const people = await getPeople();
  const results = JSON.parse(JSON.stringify(people));
  if (results.length > 0) {
    body += "<ul>";
    body += buildPeople(results);
    body += "</ul>";
  }
  return (
    "<!DOCTYPE html>" +
    "<html><head>" +
    header +
    "</head><body>" +
    body +
    "</body></html>"
  );
};

const buildPeople = (people) => {
  let list = "";
  for (p of people) {
    list += `<li>${p.name}</li>`;
  }
  return list;
};
