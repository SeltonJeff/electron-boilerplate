const fsConcrete = require("fs");
const fsExtra = require("fs-extra");
const fs = { ...fsConcrete, ...fsExtra };

function addResources() {
  const origin = `${__dirname}/src/resources`;
  const destination = `${__dirname}/dist/resources`;

  fs.copySync(
    origin,
    destination,
    {
      overwrite: true,
    },
    (err) => {
      if (err) console.error(err);
    }
  );
}

async function generateBaseHtml() {
  const baseHtml = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Application</title></head>
<body>
<script>
    ${'var __dirname = "'}${__dirname}"
</script>
<script src="./app.js" type="module"></script>
</body>
</html>
`;

  fs.writeFileSync(`${__dirname}/dist/base.html`, baseHtml);
}

async function buildExtend() {
  await addResources();
  await generateBaseHtml();
}

buildExtend();
