console.log("start test.js");

const childProcess = require("child_process");
const fs = require("fs");

const cloneRepos = () => {
  console.log("Clone repos");
  childProcess.execSync("mkdir tmp");
  // const allActions = [
  childProcess.execSync(
    `git clone https://github.com/juzhiyuan/docs-structure-sample.git &&
        mv ./docs-structure-sample/docs ./dashboard-docs && rm -rf ./docs-structure-sample`,
    { cwd: "./tmp" }
  );
  // ];
  // return Promise.all(allActions);
};

const docsPaths = {
  apisix: {
    pluginId: "default",
    latestDocs: {
      en: "./website/docs/apisix",
      zh: "./website/i18n/zh-cn/docusaurus-plugin-content-docs/current",
    },
  },
  apisixDashboard: {
    pluginId: "docs-apisix-dashboard",
    latestDocs: {
      en: "./website/docs/apisix-dashboard",
      zh:
        "./website/i18n/zh-cn/docusaurus-plugin-content-docs-docs-apisix-dashboard/current",
    },
  },
};

const copyDocs = (source, project, locale) => {
  try {
    fs.accessSync(`${source}/${locale}/latest`, fs.constants.F_OK);
  } catch (err) {
    console.log(`[${project}] can not find ${locale} latest folder, skip.`);
    return;
  }

  console.log(`[${project}] load ${locale} latest docs config.json`);
  const configLatest = JSON.parse(
    fs.readFileSync(`${source}/${locale}/latest/config.json`)
  );

  console.log(`[${project}] delete ${locale} docs config.json`);
  fs.unlinkSync(`${source}/${locale}/latest/config.json`);

  console.log(
    `[${project}] copy latest ${locale} docs to ${docsPaths[project].latestDocs[locale]}`
  );
  childProcess.execSync(
    `cp -rf ${source}/${locale}/latest/* ${docsPaths[project].latestDocs[locale]}`
  );

  console.log(`[${project}] write sidebar.json`);
  const sidebar = {
    docs: { ...configLatest.sidebar },
  };
  fs.writeFileSync(
    `${docsPaths[project].latestDocs[locale]}/sidebars.json`,
    JSON.stringify(sidebar, null, 4)
  );
};

cloneRepos();
copyDocs("./tmp/dashboard-docs", "apisixDashboard", "en");
copyDocs("./tmp/dashboard-docs", "apisixDashboard", "zh");

console.log("delete tmp folder");
childProcess.execSync("rm -rf tmp");
